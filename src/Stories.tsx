import AddStory from "./components/AddStory";
import Story from "./components/Story";
import { ItemType, useLocalStorageContext } from "./App";

const Stories = () => {
  const { value } = useLocalStorageContext();

  return (
    <div className="flex flex-row gap-6">
      <AddStory />
      {value?.map((item: ItemType) => {
        return <Story image={item?.image} time={item?.time} />;
      })}
    </div>
  );
};

export default Stories;
