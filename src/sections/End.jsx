import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Links from "./Links";
import Infos from "./Infos";

const End = () => {
  return (
    <div className="min-h-auto space-y-17 p-5 pt-70 bg-[#0c1524] text-white lg:flex lg:flex-row lg:justify-around lg:pt-130 lg:flex-wrap">
      <Infos />
      
      {/* links finais */}
      <Links />

      {/* icones redes sociais */}
      <div className="flex items-center gap-x-3.5 justify-center lg:items-start  lg:max-h-full">

        <div className="flex justify-center items-center p-2 border rounded-full hover:text-[#63dfda] cursor-pointer">
          <FaFacebookF size={15} />
        </div>

        <div className="flex items-center jsutify-center p-2 border rounded-full hover:text-[#63dfda] cursor-pointer">
          <FaTwitter size={15} />
        </div>

        <div className="flex items-center justify-center p-2 border rounded-full hover:text-[#63dfda] cursor-pointer">
          <FaInstagram size={15} />
        </div>

      </div>
    </div>
  );
};

export default End;
