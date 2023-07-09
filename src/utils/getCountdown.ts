import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

export const getCountdown = (targetDate: string) => {
  const deadLine = dayjs(targetDate).format('YYYY-MM-DD HH:mm:00');

  const [countDown, setCountDown] = useState(dayjs(deadLine).diff(dayjs()));

  useEffect(() => {
    setInterval(() => {
      setCountDown(dayjs(deadLine).diff(dayjs()));
    }, 1000);
  }, [deadLine]);

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

  return {
    days: days,
    hours: addZero(hours),
    minutes: addZero(minutes),
    seconds: addZero(seconds),
  };
};
