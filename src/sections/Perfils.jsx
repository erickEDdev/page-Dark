import Perfil from "../components/Perfil";

const Perfils = () => {
  return (
    <div className="flex flex-col justify-start items-center gap-y-10 w-full">
      <Perfil
        paragraf={
          "FylO has improved team Productivity by an order Of magnitude. Since making the switch Our team has become a well-oiled collaboration machine."
        }
        urlImg={"/images/profile-1.jpg"}
        imgDescription={"homem adulto com blusa vermelha"}
        title={"satish patel"}
        subTitle={"Founder & CEO, Huddle"}
      />
      <Perfil
        paragraf={
          "Pylo has improved aur team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
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
          "FylO has improved team Productivity by Of magnitude_ Since making the switch Our team has become a well-oiled collaboration machine."
        }
        title={"Iva Boyd"}
        subTitle={"Founder & CEO, Huddie"}
      />
    </div>
  );
};

export default Perfils;
