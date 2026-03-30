import { useForm } from "react-hook-form";

const FloatCx = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    };
    console.log("RENDERIZOU")
    console.log(errors)

  return (
    <div className="flex flex-col w-full gap-y-11 text-center z-10">
      <div className="space-y-4">
        <h1 className="text-[18px] font-semibold lg:text-3xl lg:font-header">
          Get early access today
        </h1>
        <p className="text-gray-300 lg:max-w-180 lg:m-auto">
          lt only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="on"
        className="flex flex-col gap-y-7 lg:flex-row lg:gap-x-10 lg:items-center"
      >
        <div className="w-full space-y-2">
            <input
              type="email"
              placeholder="email@example.com"
              className="w-full py-3.5 px-8 rounded-full text-gray-700 bg-white placeholder:text-gray-400 outline-none placeholder:text-[14px] lg:w-full"
              {...register("email", { required: "Please enter a valid email address", minLength: { value: 3, message: "precisa ter no minimo 3 caracteres" } })}
            />
            { errors?.email && <p className="text-red-500 font-bold text-left text-[13px] pl-5">{errors?.email?.message}</p> }
            {/* {errors?.email?.type === 'required' && <p className="text-red-600">erro</p>} */}
        </div>
        <button
            type="submit"
            className="w-full py-3.5 px-8 bg-[#40b1d1] hover:bg-[#8cdae4] cursor-pointer rounded-full text-white font-medium outline-none min-[1024px]:w-[60%] min-[1024px]:text-[10px] min-[1387px]:text-[16px] min-[1100px]:w-80"
        >
          Get Started For Free
        </button>
      </form>
    </div>
  );
};

export default FloatCx;
