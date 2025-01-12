import AddStory from "./components/AddStory";
import Story from "./components/Story";
import { ItemType, useLocalStorageContext } from "./App";
import { useState } from "react";
import Preview from "./Preview";

const Stories = () => {
  const { value } = useLocalStorageContext();
  const [state, setState] = useState({ show: false, storeIdx: 0 });

  return (
    <div className="w-full">
      <div className="flex flex-row gap-6 overflow-x-auto">
        <AddStory />
        {value?.map((item: ItemType, idx) => {
          return (
            <Story
              key={item.time}
              image={item?.image}
              time={item?.time}
              showPreview={() => setState({ storeIdx: idx, show: true })}
            />
          );
        })}
      </div>
      {state.show ? (
        <Preview
          onClose={() => setState({ storeIdx: 0, show: !state.show })}
          storyIdx={state.storeIdx}
        />
      ) : null}
    </div>
  );
};

export default Stories;
