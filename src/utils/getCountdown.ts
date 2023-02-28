import { useEffect, useState } from 'react';

export const Countdown = (targetDate: Date) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const addZero = (num: number) => {
  if (num.toString().length === 1) {
    return '0' + num.toString();
  } else return num;
};

const getReturnValues = (countDown: number) => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, addZero(hours), addZero(minutes), addZero(seconds)];
};
