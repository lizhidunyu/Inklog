import type { MenuProps } from 'antd';
import headerStyle from './header.module.css';
// import Search from '@/components/Search.tsx';
import { Button, Dropdown } from 'antd';
import avatarImg from '@/assets/images/images.jpg';
import { useRef } from 'react';
import {
  BulbOutlined,
  CompassOutlined,
  HomeOutlined,
  SignatureOutlined,
  UserOutlined,
} from '@ant-design/icons';

const navLinkStyle: React.CSSProperties = {
  flex: '1',
  display: 'flex',
  justifyContent: 'center',
};

export default function Header() {
  const navLinkItems = [
    { text: '首页', path: '/', icon: <HomeOutlined /> },
    {
      text: '写作',
      path: '/write',
      icon: <SignatureOutlined />,
      children: [
        { text: '技术', path: '/write/it' },
        { text: '随笔', path: '/write/books' },
        { text: '杂记', path: '/write/else' },
        { text: '归档', path: '/write/timeline' },
      ],
    },
    {
      text: '见闻',
      path: '/see',
      icon: <BulbOutlined />,
      children: [
        { text: '游戏', path: '/see/games' },
        { text: '旅游', path: '/see/trips' },
        { text: '爱好', path: '/see/hobbies' },
      ],
    },
    {
      text: '规划',
      path: '/plan',
      icon: <CompassOutlined />,
      children: [
        { text: 'TODO', path: '/plan/todo' },
        { text: 'OKR', path: '/plan/okr' },
      ],
    },
    {
      text: '关于',
      path: '/about',
      icon: <UserOutlined />,
      children: [
        { text: '我', path: '/about/me' },
        { text: '留言板', path: '/about/leave-message' },
      ],
    },
  ];

  const avatarRef = useRef<HTMLDivElement>(null);
  const requestId = useRef<number>(0);
  const angle = useRef(0);
  const speed = useRef(0.2); // 初始速度

  const rotate = () => {
    if (avatarRef.current) {
      angle.current += speed.current;
      speed.current += 0.05; // 每一帧加速
      avatarRef.current.style.transform = `rotate(${angle.current}deg)`;
      requestId.current = requestAnimationFrame(rotate);
    }
  };

  const stopRotate = () => {
    cancelAnimationFrame(requestId.current!);
    speed.current = 0.2; // 重置速度
  };

  return (
    <div className={headerStyle.homeHeaderContainer}>
      {/* 左侧-logo区域 */}
      <div className={headerStyle.logeAvatarStyle}>
        <a href="/" className={headerStyle.headerLeftTitleStyle}>
          <div>
            <img src="" alt="" />
            <span>lzdy's Inklog</span>
          </div>
        </a>
      </div>
      {/* 中间导航区*/}
      <div style={navLinkStyle}>
        {/*大屏显示*/}
        <div className={headerStyle.largerStyle}>
          <div>{/* <Search /> */}</div>
          <div>
            {navLinkItems.map(item => {
              const hasChildren =
                Array.isArray(item.children) && item.children.length > 0;

              if (hasChildren) {
                const menuItems: MenuProps['items'] = item?.children?.map(
                  child => ({
                    key: child.path,
                    label: (
                      <a href={child.path} style={navLinkStyle}>
                        {child.text}
                      </a>
                    ),
                  })
                );

                return (
                  <Dropdown
                    key={item.text}
                    menu={{ items: menuItems }}
                    placement="bottom"
                  >
                    <Button
                      type="text"
                      style={{ width: '5rem' }}
                      icon={item.icon}
                    >
                      {item.text}
                    </Button>
                  </Dropdown>
                );
              } else {
                return (
                  <Button
                    type="text"
                    style={{ width: '5rem' }}
                    icon={item.icon}
                  >
                    {item.text}
                  </Button>
                );
              }
            })}
          </div>
        </div>
        {/*小屏显示*/}
        <div className={headerStyle.smallerStyle}>
          {/* <Search /> */}
          <button>☰</button>
        </div>
      </div>
      {/* 右侧-头像区*/}
      <div className={headerStyle.logeAvatarStyle}>
        <div
          ref={avatarRef}
          className={headerStyle.avatarBgStyle}
          style={{ backgroundImage: `url(${avatarImg})` }}
          onMouseEnter={rotate}
          onMouseLeave={stopRotate}
        ></div>
      </div>
    </div>
  );
}
