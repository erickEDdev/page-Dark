const FilesInfos = () => {
  return (
    <div className="relative text-center w-full">
      <div className="absolute flex flex-col gap-y-7 w-full -top-18 lg:gap-y-8 lg:w-155 lg:-top-133 lg:left-[50%] lg:transform-[translate(-50%,0%)]">
        <h1 className="text-[28px] text-bold text-white lg:text-4xl lg:font-header lg:font-semibold">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="text-center m-auto max-w-[85%] text-gray-500 lg:text-[18px] lg:max-w-[90%] lg:text-gray-300">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button className="flex items-center justify-center w-[70%] m-auto py-3.5 rounded-[50px] font-bold bg-[#43b5d0] lg:w-[45%]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default FilesInfos;