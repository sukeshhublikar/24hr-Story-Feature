import { ItemType } from "../App";
import { formatTime } from "../utils";

const Story = ({ time, image }: ItemType) => {
  const formattedTime = formatTime(time);
  return (
    <div className="flex flex-col py-1 items-center text-center">
      <div
        className={`flex border-2 border-sky-500 text-sky-500 rounded-full  lg:h-[70px] lg:w-[70px] h-[60px] w-[60px] items-center justify-center 
      ${formattedTime === "just now" ? "border-sky-500" : "border-slate-400"}`}
      >
        {image ? <img src={image} className="rounded-full h-full" /> : null}
      </div>
      <div className="mt-1 lg:text-sm text-xs">{formattedTime}</div>
    </div>
  );
};

export default Story;
