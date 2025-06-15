import { useEffect, useState } from 'react';
import styles from './typewriter.module.css';

const texts = [
  '欢迎来到我的个人博客',
  '茫茫人海中遇见你我很荣幸',
  '有兴趣认识一下吗？',
  '或者看看文章？',
  '不管怎样，祝你有个好心情',
];

export default function TypewriterText() {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout;

    if (!isDeleting) {
      // 打字阶段
      if (charIndex < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 150);
      } else {
        // 完整打完后等一段时间再开始删除
        timeout = setTimeout(() => setIsDeleting(true), 1000);
      }
    } else {
      // 删除阶段
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 100);
      } else {
        // 删除完，切换下一句
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }, 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <p className={styles.typing}>
      {displayText}
      <span className={styles.cursor} />
    </p>
  );
}
