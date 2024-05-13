import React, {
  createRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import ReactDOM from 'react-dom/client';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

interface NotificationItemProps {
  content: string;
  onRemove: () => void;
}

// 组件挂载
const el = document.createElement('div'); // 创建容器
document.body.append(el);
el.style.position = 'fixed';
el.style.top = '10px';
el.style.zIndex = '999';
const root = ReactDOM.createRoot(el);

// 单个通知组件：渲染通知和移除控制
const NotificationItem = ({ content, onRemove }: NotificationItemProps) => {
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (!isHover) {
      timeout = setTimeout(() => {
        onRemove();
      }, 3000);
    }

    return () => {
      console.log(isHover, 'ishover');
      clearTimeout(timeout);
    };
  }, [isHover, onRemove]);

  return (
    <div
      className="notification"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {content}
    </div>
  );
};

// 通知列表组件: 主要是管理通知列表和动画管理
// forwardRef: 允许组件使用ref将一个DOM节点暴露给父组件
const Notifications = forwardRef((props, ref) => {
  const [list, setList] = useState<JSX.Element[]>([]);

  const incrementKeyRef = useRef(0);

  // useImperativeHandle: 向父组件暴露一个自定义的ref
  useImperativeHandle(
    ref,
    () => ({
      notify(content: string) {
        const key = incrementKeyRef.current++;
        setList((_list) => {
          const noti = (
            <CSSTransition className="message" key={key} timeout={500} classNames="message">
              <NotificationItem
                onRemove={() => {
                  // 移除通知
                  setList((__list) => {
                    return __list.filter((item) => item.key !== key.toString());
                  });
                }}
                content={content}
              />
            </CSSTransition>
          );

          return [..._list, noti];
        });
      },
    }),
    [],
  );

  return <TransitionGroup>{list}</TransitionGroup>;
});

const notificationRef: any = createRef();

// 渲染组件
root.render(<Notifications ref={notificationRef} />);

export default function showMessage(content: string) {
  // 这里就可以调用组件内暴露出来的方法了
  notificationRef.current.notify(content);
}
