
import { Input } from "antd";
import { useCallback, useState } from "react";
import './Search.css'
import { SearchOutlined } from '@ant-design/icons';

const SearchOutlineStyle = {
    width: '150px', 
    height: '2rem'
}

const SearchSuffix = () => {
    return (
       <span className="shortcut-hint">
          Ctrl K
        </span>
    )
}

export default function LZSearch() {
    const [showOverlay, setShowOverlay] = useState(false);

    const handleClick = useCallback(() => {
        setShowOverlay(true);
    },[showOverlay])

    const closeOverlay = useCallback(() => {
        setShowOverlay(false);
    },[showOverlay])

    return (
        <>
            <Input 
                className="overWriteSearchStyle"
                prefix={<SearchOutlined style={{ fontSize: '18px'}} />} 
                suffix={<SearchSuffix />}
                placeholder="Search" 
                variant="filled" 
                onClick={handleClick}
                style={SearchOutlineStyle}
            />
            {
                showOverlay && (
                    <div onClick={closeOverlay} className="overlay">
                        <div className="overlay-content">
                            <p>这是一个遮罩弹窗，你可以在这里放搜索结果或命令面板</p>
                        </div>
                    </div>
                )
            }
        </>
    )
}