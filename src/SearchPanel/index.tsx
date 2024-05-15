import { Search } from '@hga/h-ui';
import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import '../Search/style/index';

const SearchPanel = () => {
  const panelRef = useRef(null);
  const [showPanel, setShowPanel] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  const onPanelShow = () => {
    setShowPanel(true);
  };

  const onPanelClose = () => {
    setAnimationClass('sideUpOut');
    setTimeout(() => {
      setShowPanel(false);
      setAnimationClass('');
    }, 300);
  };

  const onSearch = (value: string) => {
    console.log(value);
  };

  useEffect(() => {
    const onGlobalMouseDown = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (panelRef.current && !(panelRef.current as HTMLElement).contains(target)) {
        onPanelClose();
      }
    };

    document.addEventListener('mousedown', onGlobalMouseDown);

    return () => {
      document.removeEventListener('mousedown', onGlobalMouseDown);
    };
  }, []);

  return (
    <div className="search-panel" onMouseDown={onPanelShow} ref={panelRef}>
      <Search placeholder="请输入搜索内容" onSearch={onSearch} />
      {showPanel && (
        <div className={classNames('search-panel-drowpdown', animationClass)}>
          <div className="panel-history">历史记录</div>
          <div className="panel-think">猜你所想</div>
          <div className="panel-colse" onClick={onPanelClose}>
            关闭
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPanel;
