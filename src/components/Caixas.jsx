const Caixas = ({ urlImage, descriptionImg, title, textP }) => {
  return (
    <div>
      {urlImage && (
        <div>
          <img src={urlImage} alt={descriptionImg} />
        </div>
      )}
      <h1 className="text-2xl text-semibold text-white">{title}</h1>
      <p className="text-center max-w-[88%] m-auto text-gray-500">{textP}</p>
    </div>
  );
};

export default Caixas;
