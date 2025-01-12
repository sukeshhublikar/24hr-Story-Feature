import DarkMode from "./DarkMode";

const Header = () => {
  return (
    <div className="flex justify-between  lg:font-semibold lg:text-3xl text-xl mb-4">
      Stories
      <DarkMode />
    </div>
  );
};

export default Header;
