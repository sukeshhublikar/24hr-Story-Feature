const ProgressBar = ({
  idx,
  currentIdx,
  onClick,
}: {
  idx: number;
  currentIdx: number;
  onClick: () => void;
}) => {
  return (
    <div
      className={` lg:h-2 h-1 w-full rounded-lg bg-gray-500 relative cursor-pointer  `}
      onClick={onClick}
    >
      <div
        className={`lg:h-2 h-1 w-full absolute rounded-lg z-40 ${
          idx === currentIdx ? "progress-bar  bg-sky-500 z-10" : ""
        }`}
      ></div>
    </div>
  );
};

export default ProgressBar;
