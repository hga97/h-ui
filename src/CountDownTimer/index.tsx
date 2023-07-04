import type { SetStateAction } from 'react';
import React, { useCallback, useEffect, useState } from 'react';

const useCountdown = (initialCountdown: number) => {
  const [countdown, setCountdown] = useState(initialCountdown);
  const [isCounting, setIsCounting] = useState(false);

  const startCountdown = () => {
    setIsCounting(true);
  };

  const resetCountdown = useCallback(() => {
    setIsCounting(false);
    setCountdown(initialCountdown);
  }, [setCountdown, setIsCounting, initialCountdown]);

  useEffect(() => {
    let intervalId: any;

    if (isCounting && countdown > 0) {
      intervalId = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      resetCountdown();
    }

    return () => {
      clearTimeout(intervalId);
    };
  }, [isCounting, countdown, resetCountdown]);

  return [countdown, isCounting, startCountdown, resetCountdown] as const;
};

export default ({ initialCountdown }: { initialCountdown: number }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (event: { target: { value: SetStateAction<string> } }) => {
    setPhoneNumber(event.target.value);
  };
  const [countdown, isCounting, startCountdown] = useCountdown(initialCountdown);

  return (
    <div className="count-down-timer">
      <input
        className="phone-input"
        type="text"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
      <button className="code-btn" onClick={startCountdown} disabled={isCounting}>
        {isCounting ? `${countdown}秒后重新获取` : '获取验证码'}
      </button>
    </div>
  );
};
