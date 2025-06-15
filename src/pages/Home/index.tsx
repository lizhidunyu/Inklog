import Header from './Header';
import style from './index.module.css';
import bgImg from '@/assets/images/bg1.jpg';
import { TypewriterText } from '@/components/index';

const HomeContainer = {
  height: '100vh',
  backgroundImage: `url(${bgImg})`,
  // backgroundSize: 'cover',
  backgroundPosition: 'center 40px',
  backgroundRepeat: 'no-repeat',
  color: 'white',
};

export default function Home() {
  return (
    <div style={HomeContainer}>
      <Header />
      <div style={{ textAlign: 'center' }}>
        <h1 className={style.mainTitle}>lzdy</h1>
        <TypewriterText />
      </div>
    </div>
  );
}
