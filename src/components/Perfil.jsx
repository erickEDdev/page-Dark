const Perfil = ({ paragraf, title, subTitle, urlImg, imgDescription }) => {

    return (
        <div className="w-83 h-fit p-7 bg-[#21293c] rounded-[5px] text-left lg:min-w-100 lg:p-12 lg:py-9">
            <div className="space-y-6.5 lg:h-full lg:w-full lg:flex lg:flex-col lg:space-y-0 lg:gap-y-8">
                <p className="text-[14px] text-gray-300 lg:text-[16px]">
                    {paragraf}
                </p>
                
                <div className="flex items-center gap-x-3.5">
                    <img src={urlImg} alt={imgDescription} className="w-10 h-10 rounded-full object-cover" />
                    <div className="flex flex-col justify-center">
                        <span className="font-bold text-white text-[16px]">{title}</span>
                        <span className="font-normal text-gray-300 text-[12px]">{subTitle}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Perfil