import _ from "lodash";
import ImageUpload from "./ImageUpload";

const AddStory = () => {
  return (
    <div className="py-1 items-center text-center">
      <div className="flex border-dashed border-sky-500 text-sky-500 border-2 rounded-full  lg:h-[70px] lg:w-[70px] h-[60px] w-[60px]  items-center justify-center cursor-pointer">
        <ImageUpload />
        <svg
          className="absolute"
          viewBox="0 0 256 256"
          xmlns="http://www.w3.org/2000/svg"
          height={18}
          width={22}
        >
          <rect fill="none" height="30" width="256" />
          <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
            x1="40"
            x2="216"
            y1="128"
            y2="128"
          />
          <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
            x1="128"
            x2="128"
            y1="40"
            y2="216"
          />
        </svg>
      </div>
      <div className="mt-1 lg:text-sm  text-xs">Add Story</div>
    </div>
  );
};

export default AddStory;
