import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Links from "./Links";
import Infos from "./Infos";

const End = () => {
  return (
    <div className="min-h-auto space-y-17 p-5 pt-70 bg-[#0c1524] text-white">
      <Infos />
      
      {/* links finais */}
      <Links />

      {/* icones redes sociais */}
      <div className="flex items-center gap-x-3.5 justify-center">

        <div className="flex justify-center items-center p-2 border rounded-full">
          <FaFacebookF size={15} />
        </div>

        <div className="flex items-center jsutify-center p-2 border rounded-full">
          <FaTwitter size={15} />
        </div>

        <div className="flex items-center justify-center p-2 border rounded-full">
          <FaInstagram size={15} />
        </div>

      </div>
    </div>
  );
};

export default End;
