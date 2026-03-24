const Header = () => {
  return (
    <header className="flex items-center justify-between p-7 bg-transparent font-header capitalize">
      <div className="w-21 h-auto">
        <img
          src="/images/logo.svg"
          alt="logo da marca"
          className="h-full w-full"
        />
      </div>
      <div className="flex items-center gap-x-7">
        <span>features</span>
        <span>team</span>
        <span>sign in</span>
      </div>
    </header>
  );
};

export default Header;
