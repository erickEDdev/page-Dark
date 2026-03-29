const Links = () => {
    return (
        <div className="flex flex-col gap-y-12 text-[18px] lg:flex-row  lg:gap-x-18 lg:min-h-full lg:font-normal lg:text-gray-300">
            
            <div className="flex flex-col gap-y-2.5 ">
                <a href="#" className="hover:text-white">About Us</a>
                <a href="#" className="hover:text-white">Jobs</a>
                <a href="#" className="hover:text-white">Press</a>
                <a href="#" className="hover:text-white">Blog</a>
            </div>
            <div className="flex flex-col gap-y-2.5">
                <a href="#" className="hover:text-white">Contact Us</a>
                <a href="#" className="hover:text-white">Terms</a>
                <a href="#" className="hover:text-white">Privacy</a>
            </div>
        </div>
    )
}

export default Links