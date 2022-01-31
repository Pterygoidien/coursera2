import Logo from "../../utils/Logo";
import ExploreMenu from "./components/ExploreMenu";
import NavBar from "./components/NavBar";
import ProfileMenu from "./components/ProfileMenu";
import SearchBar from "./components/SearchBar";

const Header = () => {
  return (
    <header className="header w-full">
      <div className="flex-row justify-start flex-grow collapse-lg">
        <ExploreMenu />
        <SearchBar />
      </div>
      <div className="header__logo">
        <Logo />
      </div>
      <div className="flex-row justify-end flex-grow collapse-lg">
        <NavBar />
        <ProfileMenu />
      </div>
    </header>
  );
};

export default Header;
