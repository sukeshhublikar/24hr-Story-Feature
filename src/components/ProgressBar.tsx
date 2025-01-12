const ProgressBar = ({
  idx,
  currentIdx,
}: {
  idx: number;
  currentIdx: number;
}) => {
  return (
    <div
      className={` lg:h-2 h-1 w-full rounded-lg bg-blue-500 bg-gradient-to-r`}
    >
      {idx}
      {currentIdx}
    </div>
  );
};

export default ProgressBar;

// ${
//     idx < currentIdx ? "bg-sky-500" : "bg-gray-500 "
//   }
//   ${idx === currentIdx ? "progress-bar" : ""}
