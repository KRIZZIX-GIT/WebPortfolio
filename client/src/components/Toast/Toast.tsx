import React, { useEffect, useRef, useState } from 'react';
import { IoCheckmarkCircle, IoCloseCircle, IoAlertCircle, IoCodeSlash } from 'react-icons/io5';
import styles from './Toast.module.css';

interface ToastProps {
  message: string;
  visible: boolean;
  errState: 'success' | 'error' | 'warning' | 'info';
}


const Toast: React.FC<ToastProps> = ({ message, visible, errState }) => {
   const [animationValue, setAnimationValue] = useState(0);

  useEffect(() => {
    if (visible) {
      setAnimationValue(1);

      const timeout = setTimeout(() => {
        setAnimationValue(0);
      }, 2500);

      return () => clearTimeout(timeout);
    } else {
      setAnimationValue(0);
    }
  }, [visible]);

  if (!visible) return null;

  const getIconByState = () => {
    switch (errState) {
      case 'success':
        return IoCheckmarkCircle;
      case 'error':
        return IoCloseCircle;
      case 'warning':
        return IoAlertCircle;
      default:
        return IoCodeSlash;
    }
  };

  const Icon = getIconByState();

  return (
    <div
      className={styles["toast-container"]}
      style={{ 
        backgroundColor: errState === 'success' ? "#4CAF50" : errState === 'error' ? "#F44336" : errState === 'warning' ? "#FFB74D" : 'gray',
        top: animationValue === 1 ? '10px' : '-100px',
       }}
    >
      <Icon size={30} color='white' />
      <span className={styles["toast-message"]}>{message || 'Неизвестная ошибка'}</span>
    </div>
  );
};

export default Toast;