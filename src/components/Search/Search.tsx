import { Input } from 'antd';
import { useCallback, useState } from 'react';
import './Search.css';
import { SearchOutlined } from '@ant-design/icons';

const SearchOutlineStyle = {
  width: '150px',
  height: '2rem',
};

const SearchSuffix = () => {
  return <span className="shortcut-hint">Ctrl K</span>;
};

export default function LZSearch() {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleClick = useCallback(() => {
    setShowOverlay(true);
  }, [showOverlay]);

  const closeOverlay = useCallback(() => {
    setShowOverlay(false);
  }, [showOverlay]);

  return (
    <>
      <Input
        className="overWriteSearchStyle"
        prefix={
          <SearchOutlined
            style={{ fontSize: '18px', position: 'relative', top: '2px' }}
          />
        }
        suffix={<SearchSuffix />}
        placeholder="Search"
        variant="filled"
        onClick={handleClick}
        onFocus={e => e.target.blur()} // 强制 blur
        style={SearchOutlineStyle}
      />
      {showOverlay && (
        <div onClick={closeOverlay} className="overlay">
          <div className="overlay-content"></div>
        </div>
      )}
    </>
  );
}
