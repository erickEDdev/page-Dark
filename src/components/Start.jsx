import { useId } from "react";
import Caixas from "./Caixas";
import Header from "./Header";

const Start = () => {
  const id = useId()

  return (
    <div className="flex flex-col gap-y-100 min-h-auto bg-[#1b2330] text-white">
      <Header />
      <main className="relative flex flex-col gap-y-80 justify-start items-center min-h-auto w-full px-7 bg-[#181f2b]">
        {/* // começo das imagens */}
        <div className="absolute z-1 -top-92 w-85">
          <img
            src="/images/illustration-intro.png"
            alt="arquivos do computador"
            className="w-full"
          />
        </div>
        <div className="absolute -top-40 left-0 right-0 w-full">
          <img
            src="/images/bg-curvy-mobile.svg"
            alt="montanha cinza"
            className="w-full"
          />
        </div>
        {/* // fim das imagens */}
        <div className="z-1 relative text-center w-full ">
          <div className="absolute flex flex-col gap-y-4 w-full -top-18">
            <h1 className="text-[28px] text-bold text-white">All your files in one secure location, accessible anywhere.</h1>
            <p className="text-center m-auto max-w-[85%] text-gray-500">
              Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.
            </p>
            <button className="flex items-center justify-center w-[70%] m-auto py-3.5 rounded-[50px] font-bold bg-[#43b5d0]">Get Started</button>
          </div>
        </div>
        <div className="z-1">
          <Caixas urlImage={"/images/icon-access-anywhere.svg"} descriptionImg={"computador imagem"} title={"Access your files, anywhere"} textP={"The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."} key={id} />
        </div>
      </main>
    </div>
  );
};

export default Start;

/*
  o que fazer para arrumar a imagem:
  colocar a montanha no top 
  e a do computador top negativo para ultrapassar o componente
*/
