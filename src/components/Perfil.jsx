const Perfil = ({ paragraf, title, subTitle, urlImg, imgDescription }) => {

    return (
        <div className="w-83 h-fit p-7 bg-[#21293c] rounded-[5px] text-left">
            <div className="space-y-6.5 ">
                <p className="text-[14px] text-gray-300">
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