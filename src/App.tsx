import React, { useEffect, useState } from "react";
import time from "./time";

export const App = (): JSX.Element => {
  const clockNumbers: number[] = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const [hour, setHour] = useState<number>();
  const [minute, setMinute] = useState<number>();
  const [second, setSecond] = useState<number>();
  useEffect(() => {
    const getTime = async () => {
      const result = await time();
      setHour(Number(result.datetime.slice(11, 13)));
      setMinute(Number(result.datetime.slice(14, 16)));
      setSecond(Number(result.datetime.slice(17, 19)));
    };
    getTime();
    const interval = setInterval(() => getTime(), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const hRotation = 30 * hour + minute / 2;
  const mRotation = 6 * minute;
  const sRotation = 6 * second;

  console.log(hour, minute, second);
  return (
    <div className="App">
      <div className="Clock">
        <div
          key={Math.random().toString(36).substr(2, 9)}
          id="hour"
          style={{ transform: `rotate(${hRotation}deg)` }}
        ></div>
        <div
          key={Math.random().toString(36).substr(2, 9)}
          id="minute"
          style={{ transform: `rotate(${mRotation}deg)` }}
        ></div>
        <div
          key={Math.random().toString(36).substr(2, 9)}
          id="second"
          style={{ transform: `rotate(${sRotation}deg)` }}
        ></div>
        <div
          key={Math.random().toString(36).substr(2, 9)}
          className="block"
        ></div>
        {clockNumbers.map((el) => {
          const style: string = `numbers num_${el}`;
          return (
            <div
              key={Math.random().toString(36).substr(2, 9)}
              className={style}
            >
              {el}
            </div>
          );
        })}
      </div>
    </div>
  );
};
