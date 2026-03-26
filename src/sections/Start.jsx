import Header from "./Header";
import Perfils from "./Perfils";
import CaixasInfos from "./CaixasInfos";
import Products from "./Products";
import FilesInfos from "./FilesInfos";
import ShowImages from "./ShowImages";
import FloatCx from "../components/Float";

const Start = () => {
  return (
    <div className="flex flex-col relative gap-y-100 min-h-auto bg-[#1b2330] text-white font-body">
      <Header />
      <main className="relative flex flex-col gap-y-100 justify-start items-center min-h-auto w-full px-5 bg-[#181f2b]">
        <ShowImages />
        <FilesInfos />
        <div className="space-y-40">
          <CaixasInfos />
          <Products />
          <Perfils />
        </div>
      </main>

      <div className="absolute w-[87%] h-fit p-7 -bottom-50 left-[50%] transform-[translate(-50%)] bg-[#1b2330] rounded-[10px]">
        <FloatCx />
      </div>
    </div>
  );
};

export default Start;

/*
  o que fazer para arrumar a imagem:
  colocar a montanha no top 
  e a do computador top negativo para ultrapassar o componente
*/
