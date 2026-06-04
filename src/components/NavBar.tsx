type NavbarProps = {
  logoSrc: string;
};

function NavBar({ logoSrc }: NavbarProps) {
  return (
    <nav className="flex h-21 items-center bg-zinc-900 px-1 text-white">
      <div className="flex items-center gap-3">
        <img
          src={logoSrc}
          alt="Game Discover Logo"
          className="h-20 w-20 object-contain"
        />
        <span className=" bg-clip-text text-xl font-extrabold">
          Game Discover
        </span>
      </div>
    </nav>
  );
}

export default NavBar;
