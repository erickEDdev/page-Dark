const Infos = () => {

    return (
        <div className="flex flex-col gap-y-9 text-gray-300 lg:relative lg:justify-start lg:min-h-full">
            {/* caixas: localização, emails, numero */}
            <img src="/page-Dark/images/logo.svg" alt="logo fylo" className="w-45 h-auto lg:absolute lg:-top-25 lg:left-0" />

            <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-20">
                <div className="flex gap-x-6 items-start">
                    <img src="/page-Dark/images/icon-location.svg" alt="icone maps" className="w-5 h-auto pt-2" />
                    <p className="text-[18px] lg:max-w-90">
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore
                        et dolore magna aliqua
                    </p>
                </div>
                <div className="flex flex-col gap-y-5">
                    <div className="flex gap-x-6 items-center">
                        <img src="/page-Dark/images/icon-phone.svg" alt="telefone email" className="w-5 h-auto" />
                        <span>+1-543-123-4567</span>
                    </div>
                    <div className="flex gap-x-6 items-center">
                        <img src="/page-Dark/images/icon-email.svg" alt="icone email" className="w-5 h-auto" />
                        <span>example@fylo.com</span>
                    </div>
                </div>
            </div>
      </div>
    )
}

export default Infos