import Perfil from "../components/Perfil";

const Perfils = () => {
  return (
    <div className="flex flex-col justify-start items-center gap-y-10 w-full lg:flex-row lg:justify-center lg:flex-wrap lg:gap-x-12 lg:gap-y-12 lg:min-h-95">
      <Perfil
        paragraf={
          "Fylo has improved team Productivity by an order Of magnitude. Since making the switch Our team has become a well-oiled collaboration machine."
        }
        urlImg={"/images/profile-1.jpg"}
        imgDescription={"homem adulto com blusa vermelha"}
        title={"satish patel"}
        subTitle={"Founder & CEO, Huddle"}
      />
      <Perfil
        paragraf={
          "Fylo has improved team Productivity by an order Of magnitude. Since making the switch Our team has become a well-oiled collaboration machine."
        }
        urlImg={"/images/profile-2.jpg"}
        imgDescription={"homem adulto acima do peso"}
        title={"Bruce McKenzie"}
        subTitle={"Founder & CEO, Huddie"}
      />
      <Perfil
        urlImg={"/images/profile-3.jpg"}
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
