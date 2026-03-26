import { useId } from "react";
import { v4 as uuidv4 } from "uuid";

const CaixaInfos = ({ urlImage, descriptionImg, title, textP }) => {
  // const ID = uuidv4()
  const ID = useId();

  return (
    <div
      id={ID}
      className="flex flex-col items-center justify-center gap-y-10 text-center z-1"
    >
      {urlImage && (
        <img
          src={urlImage}
          alt={descriptionImg}
          className="w-15 h-auto object-cover select-none"
        />
      )}
      <div className="space-y-2.5">
        <h1 className="text-2xl text-semibold text-white">{title}</h1>
        <p className="text-center m-auto text-gray-300">{textP}</p>
      </div>
    </div>
  );
};

export default CaixaInfos;
