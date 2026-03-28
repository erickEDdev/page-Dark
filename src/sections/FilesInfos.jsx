const FilesInfos = () => {
  return (
    <div className="relative h-65 w-full max-lg:landscape:h-25">
      <div className="absolute flex flex-col gap-y-7 w-full text-center -top-18 max-lg:landscape:-top-50">
        <h1 className="text-[28px] font-semibold text-white max-lg:landscape:max-w-170 max-lg:landscape:m-auto max-lg:landscape:text-4xl">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="text-center m-auto max-w-[85%] text-gray-300 max-lg:landscape:text-[18px] max-lg:landscape:max-w-150">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button className="flex items-center justify-center w-[70%] m-auto py-3.5 rounded-[50px] font-bold bg-[#43b5d0]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default FilesInfos;