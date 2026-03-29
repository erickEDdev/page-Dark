const FilesInfos = () => {
  return (
    <div className="relative h-65 w-full font-header max-lg:landscape:h-25 z-5 lg:h-0">
      <div className="absolute flex flex-col gap-y-7 w-full text-center -top-18 max-lg:landscape:-top-50 max-lg:landscape:gap-y-12 lg:-top-130 lg:gap-y-8">
        <h1 className="text-[28px] font-semibold text-white max-lg:landscape:max-w-170 max-lg:landscape:m-auto max-lg:landscape:text-4xl lg:max-w-180 lg:m-auto lg:text-4xl lg:leading-13">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="text-center m-auto max-w-[85%] text-gray-300 max-lg:landscape:text-[18px] max-lg:landscape:max-w-150 lg:max-w-120">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button className="flex items-center justify-center w-[70%] m-auto py-3.5 rounded-[50px] font-bold bg-[#43b5d0] hover:bg-[#8cdae4] cursor-pointer lg:w-full lg:max-w-65">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default FilesInfos;