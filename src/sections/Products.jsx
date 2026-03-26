import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Products = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-y-13 text-left">
            <img
              src="/images/illustration-stay-productive.png"
              alt="três pessoas produzindo"
              className="w-[80%] h-auto object-cover select-none"
            />
            <div className="flex flex-col gap-y-5 p-3">
              <h1 className="text-[20px] text-bold text-white">
                Stay productive, wherever you are
              </h1>
              <p className="text-gray-300">
                Never let location be an issue when accessing your files, Fylo has you covered for all of your file storage needs.
              </p>
              <p className="text-gray-300">
                Securely share files and folders with friends,family and colleagues for live collaboration. No email attachments required.
              </p>
              <a href="#" className="flex gap-x-2.5 text-[16px] text-[#63ddd8] border-b w-fit pb-1.5">
                <span>See how Fylo works</span>
                <div><FontAwesomeIcon icon={faCircleArrowRight} /></div>
              </a>
            </div>
        </div>
    )
}

export default Products