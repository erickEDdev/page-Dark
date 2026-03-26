const Infos = () => {

    return (
        <div className="flex flex-col gap-y-9 text-gray-300">
            {/* caixas: localização, emails, numero */}
            <img src="/images/logo.svg" alt="logo fylo" className="w-45 h-auto" />

            <div className="flex flex-col gap-y-5">
                <div className="flex gap-x-6 items-start">
                    <img src="/images/icon-location.svg" alt="icone maps" className="w-5 h-auto pt-2" />
                    <p className="text-[18px]">
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore
                        et dolore magna aliqua
                    </p>
                </div>
                <div className="flex gap-x-6 items-center">
                    <img src="/images/icon-phone.svg" alt="telefone email" className="w-5 h-auto" />
                    <span>+1-543-123-4567</span>
                </div>
                <div className="flex gap-x-6 items-center">
                    <img src="/images/icon-email.svg" alt="icone email" className="w-5 h-auto" />
                    <span>example@fylo.com</span>
                </div>
            </div>
      </div>
    )
}

export default Infos