const ShowImages = () => {
  return (
    <>
      <div className="absolute z-1 -top-92 w-85 select-none">
        <img
          src="/images/illustration-intro.png"
          alt="arquivos do computador"
          className="w-full"
        />
      </div>
      <div className="absolute -top-40 max-lg:landscape:-top-60 left-0 right-0 w-full select-none">
        <img
          src="/images/bg-curvy-mobile.svg"
          alt="montanha cinza"
          className="w-full"
        />
      </div>
    </>
  );
};

export default ShowImages;
