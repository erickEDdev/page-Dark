import Perfil from "../components/Perfil";

const Perfils = () => {
  return (
    <div className="flex flex-col justify-start items-center gap-y-10  lg:flex-row lg:justify-center lg:flex-wrap lg:gap-x-12 lg:gap-y-12 lg:min-h-95 relative w-fit! m-auto">
      <div className="absolute -top-6.5 left-2 max-lg:landscape:left-65 lg:-left-2.5 lg:top-7">
        <img
          src="/page-Dark/images/bg-quotes.png"
          alt="aspas duplas imagem"
          className="relative w-9 lg:w-15"
        />
      </div>
      <Perfil
        paragraf={
          "Fylo has improved team Productivity by an order Of magnitude. Since making the switch Our team has become a well-oiled collaboration machine."
        }
        urlImg={"/page-Dark/images/profile-1.jpg"}
        imgDescription={"homem adulto com blusa vermelha"}
        title={"satish patel"}
        subTitle={"Founder & CEO, Huddle"}
        first={true}
      />
      <Perfil
        paragraf={
          "Fylo has improved team Productivity by an order Of magnitude. Since making the switch Our team has become a well-oiled collaboration machine."
        }
        urlImg={"/page-Dark/images/profile-2.jpg"}
        imgDescription={"homem adulto acima do peso"}
        title={"Bruce McKenzie"}
        subTitle={"Founder & CEO, Huddie"}
      />
      <Perfil
        urlImg={"/page-Dark/images/profile-3.jpg"}
        imgDescription={"mulher adulta"}
        paragraf={
          "Fylo has improved team Productivity by an order Of magnitude. Since making the switch Our team has become a well-oiled collaboration machine."
        }
        title={"Iva Boyd"}
        subTitle={"Founder & CEO, Huddie"}
      />
    </div>
  );
};

export default Perfils;
