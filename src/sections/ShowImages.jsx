import { useMediaQuery } from "@mui/material";

const ShowImages = () => {
  const isMobile = useMediaQuery("(max-width:1023px)")

  return (
    <>
      <div className="absolute z-1 -top-92 w-85 select-none lg:-top-245 lg:h-auto lg:w-130">
        <img
          src="/images/illustration-intro.png"
          alt="arquivos do computador"
          className="w-full lg:h-full"
        />
      </div>
      <div className="absolute -top-40 max-lg:landscape:-top-60 left-0 right-0 w-full select-none lg:-top-118">
        <img
          src={isMobile ? "/images/bg-curvy-mobile.svg" : "/images/bg-curvy-desktop.svg"}
          alt="montanha cinza"
          className="w-full"
        />
      </div>
    </>
  );
};

export default ShowImages;