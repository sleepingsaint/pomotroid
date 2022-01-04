import { useTheme } from "hooks/ThemeProvider";
import { useEffect, useState } from "react";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { BsPauseCircle, BsPlayCircle } from "react-icons/bs";
import { FaHistory, FaChevronRight } from "react-icons/fa";

const Pomotroid: React.FC = () => {
  const timings = [
    25 * 60,
    5 * 60,
    25 * 60,
    5 * 60,
    25 * 60,
    5 * 60,
    25 * 60,
    15 * 60,
  ];
  const { theme } = useTheme();

  const [idx, setIdx] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [play, setPlay] = useState<boolean>(false);
  const [focusRounds, setFocusRounds] = useState<number>(0);

  useEffect(() => {
    let interval: number | undefined;
    if (play) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else {
      interval && clearInterval(interval);
    }

    return () => {
      interval && clearInterval(interval);
    };
    FaChevronRight;
  }, [play]);

  useEffect(() => {
    if (idx % 2 == 1) {
      setFocusRounds((focusRounds) => focusRounds + 1);
    }
  }, [idx]);

  useEffect(() => {
    if (time === timings[idx]) {
      setIdx((idx) => (idx + 1) % timings.length);
      setTime(0);
    }
  }, [time]);

  const toggle = () => setPlay((play) => !play);
  const reset = () => setTime(0);
  const next = () => setTime(timings[idx]);

  return (
    <div className="w-full h-full flex justify-center flex-grow">
      <div className="w-64 h-64 mt-16">
        <CircularProgressbarWithChildren
          value={time}
          counterClockwise={true}
          maxValue={timings[idx]}
          styles={buildStyles({
            trailColor: theme.colors.color_accent,
            pathColor: theme.colors.color_foreground_darkest,
          })}
        >
          <div
            style={{
              textAlign: "center",
              color: theme.colors.color_foreground,
            }}
          >
            <p className="text-4xl">
              {Math.floor((timings[idx] - time) / 60)} :{" "}
              {((timings[idx] - time) % 60).toString().padStart(2, "0")}
            </p>
            <p>
              {idx != 0 && idx % 7 === 0
                ? "Long Break"
                : idx % 2 === 1
                ? "Short Break"
                : "Focus"}
            </p>
            <button onClick={toggle} className="mt-2">
              {play ? <BsPauseCircle size={40} /> : <BsPlayCircle size={40} />}
            </button>
          </div>
        </CircularProgressbarWithChildren>
        <div
          className="flex justify-between px-3"
          style={{ color: theme.colors.color_foreground }}
        >
          <button onClick={reset}>
            <FaHistory
              size={20}
              color={theme.colors.color_foreground}
              style={{ display: "inline" }}
            />{" "}
            Reset
          </button>
          <button onClick={next}>
            <FaChevronRight
              color={theme.colors.color_foreground}
              size={20}
              style={{ display: "inline" }}
            />{" "}
            Next
          </button>
        </div>

        <p
          className="text-center p-2 mt-4"
          style={{ color: theme.colors.color_foreground }}
        >
          You have completed {focusRounds.toString()} focus sessions
        </p>
      </div>
    </div>
  );
};

export default Pomotroid;
