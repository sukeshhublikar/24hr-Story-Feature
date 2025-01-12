import { useEffect, useMemo, useState } from "react";
import { ItemType, useLocalStorageContext } from "./App";
import _ from "lodash";
import ProgressBar from "./components/ProgressBar";

const Preview = () => {
  const { value } = useLocalStorageContext();
  const [state, setState] = useState<{ idx: number | undefined }>({
    idx: 0,
  });

  useEffect(() => {
    setTimeout(() => {
      if (state.idx === _.size(value) - 1) {
        setState({ ...state, idx: undefined });
        return;
      }
      setState({ ...state, idx: state?.idx + 1 });
    }, 3000);
  }, []);

  const item = useMemo(() => {
    return value[state.idx];
  }, [state]);
  return (
    <div className="absolute h-screen w-full top-0 bg-black bg-opacity-90 px-10 py-14">
      <div className="flex flex-row gap-2 pb-8">
        {value?.map((__, index) => {
          return <ProgressBar idx={index} currentIdx={state.idx || 0} />;
        })}
      </div>
      <div className="flex flex-col justify-center">
        <img src={item.image} className="rounded-md h-full" />
      </div>
    </div>
  );
};

export default Preview;
