import _ from "lodash";
import { useLocalStorageContext } from "../App";

const ImageUpload = () => {
  const { value, updateValue } = useLocalStorageContext();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const files = event.target.files;
      if (files && files.length > 0) {
        const file = files[0];
        const reader = new FileReader();
        debugger;
        reader.readAsDataURL(file); // Convert image to base64 string
        reader.onloadend = () => {
          if (!_.isNil(reader.result)) {
            const base64String: string = reader.result as string; // Get the base64 encoded string
            const stories = [...value];
            stories?.push({
              image: base64String,
              time: new Date().toISOString(),
            });
            // Save the base64 string to localStorage
            updateValue(stories);
          }
        };
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <input
      type="file"
      accept="image/*"
      onChange={handleImageUpload}
      className="opacity-0 h-full w-full cursor-pointer"
    />
  );
};

export default ImageUpload;
