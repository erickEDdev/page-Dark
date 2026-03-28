import CaixaInfos from "../components/CaixaInfo";

const CaixasInfos = () => {
  return (
    <div className="z-4 flex flex-col gap-y-20 auto-rows-auto">
      <CaixaInfos
        urlImage={"/images/icon-access-anywhere.svg"}
        descriptionImg={"computador imagem"}
        title={"Access your files, anywhere"}
        textP={
          "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
        }
      />
      <CaixaInfos
        urlImage={"/images/icon-security.svg"}
        title={"Security you can trust"}
        textP={
          "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
        }
        descriptionImg={"icone de um escudo de segurança"}
      />
      <CaixaInfos
        urlImage={"/images/icon-collaboration.svg"}
        title={"Real-time collaboration"}
        textP={
          "Securely share files and folders with friends,family and colleagues for live collaboration. No email attachments required."
        }
        descriptionImg={"relógio"}
      />
      <CaixaInfos
        urlImage={"/images/icon-any-file.svg"}
        descriptionImg={"arquivo files"}
        title={"Store any type of file"}
        textP={
          "Whether you're sharing holidays Photos or work documents, FyIO has you covered allowing for allfile types to be securely stored and shared."
        }
      />
    </div>
  );
};

export default CaixasInfos;
