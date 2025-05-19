import headerStyle from './header.module.css'
import Search from "@/components/Search.tsx"

const HomeHeaderContainer:React.CSSProperties = {
    backgroundColor: 'yellow',
    height: '2rem',
    lineHeight: '2rem',
    position: 'fixed',
    width: "calc(100% - 3rem)",
    display: 'flex'
}

export default function Header(){
  return (
    <div style={HomeHeaderContainer}>
      {/* 左侧-logo区域 */}
      <div style={{width: '12rem'}}>
        <a href="/" className={headerStyle.headerLeftTitleStyle}>
            <div>
                <img src="" alt="" />
                <span>lzdy's Inklog</span>
            </div>
        </a>
      </div>
      {/* 右侧*/}
      <div style={{flex: '1'}}>
        {/*大屏显示*/}
        <div  className={headerStyle.largerStyle}>
            <div>
                <Search/>
            </div>
            <div>工具栏</div>
        </div>
        {/*小屏显示*/}
        <div   className={headerStyle.smallerStyle}>
            <Search/>
            <button>☰</button>
        </div>
      </div>
    </div>
  )
}
