import SearchBox from "./SearchBox";

type NavbarProps = {
  logoSrc: string;
};

function NavBar({ logoSrc }: NavbarProps) {
  return (
    <nav className="flex h-21 items-center bg-zinc-900 px-4 text-white">
      <img
        src={logoSrc}
        alt="Game Discover Logo"
        className="h-20 w-20 object-contain"
      />

      <div className="mx-4 flex-1">
        <SearchBox />
      </div>

      <span className="text-xl font-extrabold">Game Discover</span>
    </nav>
  );
}

export default NavBar;
