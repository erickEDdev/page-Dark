const Header = () => {
  return (
    <header className="flex items-center justify-between p-7 bg-transparent font-header capitalize lg:p-[60px_100px]">
      <div className="w-21 h-auto lg:w-40">
        <img
          src="/images/logo.svg"
          alt="logo da marca"
          className="h-full w-full"
        />
      </div>
      <div className="flex items-center gap-x-7 lg:text-gray-300">
        <a href="#">features</a>
        <a href="#">team</a>
        <a href="#">sign in</a>
      </div>
    </header>
  );
};

export default Header;
