import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

// 한 자리수 숫자인 경우 앞에 0 추가
const addZero = (num: number) => {
  if (num.toString().length === 1) {
    return '0' + num.toString();
  } else return num;
};

// countDown: 마감 시간까지 남은 시간
const getReturnValues = (countDown: number) => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  const milliseconds = +(countDown % 1000).toString().slice(0, 2);

  return {
    days: days,
    hours: addZero(hours),
    minutes: addZero(minutes),
    seconds: addZero(seconds),
    milliseconds: addZero(milliseconds),
  };
};

export const getCountdown = (targetDate: string) => {
  const deadLine = dayjs(targetDate).format('YYYY-MM-DD HH:mm:00:00');

  const [countDown, setCountDown] = useState(dayjs(deadLine).diff(dayjs()));

  useEffect(() => {
    setInterval(() => {
      setCountDown(dayjs(deadLine).diff(dayjs()));
    }, 10);
  }, [deadLine]);

  return getReturnValues(countDown);
};
