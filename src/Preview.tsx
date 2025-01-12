import { useEffect, useMemo, useState } from "react";
import { useLocalStorageContext } from "./App";
import _ from "lodash";
import ProgressBar from "./components/ProgressBar";
import CloseBtn from "./components/ CloseButton";

const Preview = ({
  onClose,
  storyIdx,
}: {
  onClose: () => void;
  storyIdx: number;
}) => {
  const { value } = useLocalStorageContext();
  const [state, setState] = useState<{ idx: number | undefined }>({
    idx: storyIdx || 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setState((prev) => {
        if (prev.idx === _.size(value) - 1) {
          onClose();
          return prev;
        }
        return { ...prev, idx: prev.idx + 1 };
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const onNext = (val: string) => {
    if (val === "nxt") {
      setState((prev) => ({ ...prev, idx: prev.idx + 1 }));
    }
    if (val === "prev") {
      setState((prev) => ({ ...prev, idx: prev.idx - 1 }));
    }
  };

  const item = useMemo(() => {
    return value[state.idx];
  }, [state]);

  return (
    <div className="absolute h-screen w-full top-0 bg-black bg-opacity-90 lg:px-10 px-4 pt-4 pb-14 -ml-8">
      <div className="flex flex-row gap-2 pb-4">
        {value?.map((__, index) => {
          return (
            <ProgressBar
              idx={index}
              currentIdx={state.idx || 0}
              onClick={() => setState({ ...state, idx: index })}
            />
          );
        })}
      </div>
      <CloseBtn onClick={onClose} />
      <div className="flex flex-row w-full justify-center h-full">
        {state.idx !== 0 ? (
          <button
            className="flex p-1 lg:w-12 w-8"
            onClick={() => onNext("prev")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-arrow-left"
            >
              <path d="M19 12H5M12 5l-7 7 7 7"></path>
            </svg>
          </button>
        ) : null}
        {item ? (
          <div className="flex  justify-center h-full w-[95%] ">
            <img src={item.image} className="rounded-md h-full" />
          </div>
        ) : null}
        {state.idx !== _.size(value) - 1 ? (
          <button
            className="flex p-1 lg:w-12 w-8"
            onClick={() => onNext("nxt")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-arrow-right"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Preview;
