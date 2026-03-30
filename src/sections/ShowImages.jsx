import { useMediaQuery } from "@mui/material";

const ShowImages = () => {
  const isMobile = useMediaQuery("(max-width:1023px)")

  return (
    <>
      <div className="absolute z-1 -top-50 w-85 select-none max-lg:landscape:left-85 lg:-top-140 lg:w-150">
        <img
          src="/images/illustration-intro.png"
          alt="arquivos do computador"
          className="w-full"
        />
      </div>
      <div className="w-full">
        <img
          src={isMobile ? "/page-Dark/images/bg-curvy-mobile.svg" : "/images/bg-curvy-desktop.svg"}
          alt="montanha cinza"
          className="w-full"
        />
      </div>
    </>
  );
};

export default ShowImages;