const FloatCx = () => {
  return (
    <div className="flex flex-col w-full gap-y-11 text-center z-10">
        <div className="space-y-4">
            <h1 className="text-[18px] font-bold">Get early access today</h1>
            <p className="text-gray-300">
                lt only takes a minute to sign up and our free starter tier is extremely
                generous. If you have any questions, our support team would be happy to
                help you.
            </p>
        </div>
        <div className="flex flex-col gap-y-7">
            <input
            type="email"
            placeholder="email@example.com"
            className="w-full py-3.5 px-8 rounded-full text-gray-700 bg-white placeholder:text-gray-400 outline-none placeholder:text-[14px]"
            />
            <button className="w-full py-3.5 px-8 bg-[#40b1d1] rounded-full text-white font-medium outline-none">
                Get Started For Free
            </button>
        </div>
    </div>
  );
};

export default FloatCx;
