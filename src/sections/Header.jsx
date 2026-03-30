const Header = () => {
  return (
    <header className="flex items-center justify-between p-7 bg-transparent font-header capitalize lg:p-[60px_100px]">
      <div className="w-21 h-auto lg:w-40">
        <img
          src="/page-Dark/images/logo.svg"
          alt="logo da marca"
          className="h-full w-full"
        />
      </div>
      <div className="flex items-center gap-x-7 lg:text-gray-300 font-medium">
        <a href="#" className="hover:text-white hover:underline underline-offset-1">features</a>
        <a href="#" className="hover:text-white hover:underline underline-offset-1">team</a>
        <a href="#" className="hover:text-white hover:underline underline-offset-1">sign in</a>
      </div>
    </header>
  );
};

export default Header;
