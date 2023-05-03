import { Link } from "react-router-dom"
import CloseIcon from "../Icons/Close"
import Button from "./Button"

const MobileNav = ({onClose, isActive}) => {
    const activeClass = isActive ? 'translate-x-0 opacity-1' : 'translate-x-[100000px] opacity-0'
    const goTo = (e, id) => {
        e.stopPropagation()
        onClose()
        useScrollTo(id)
    }

    return (
        <div className={`transition-all duration-200 ease-linear fixed top-0 left-0 w-full h-full bg-black z-50 py-7 px-3 flex flex-col justify-between items-center text-white ${activeClass}`}>
            <div className="flex justify-end items-end w-full">
                <button onClick={e => onClose(e)}>
                    <CloseIcon />
                </button>
            </div>
            <div className="w-full text-white flex lg:justify-between justify-between items-center lg:flex-row flex-col h-full py-7">
                <img src="./images/svg/Logotype.svg" className="lg:mb-0 mb-7" alt="Logo" />
                <div className="flex justify-between items-center flex-col ">
                    <nav className={`flex lg:justify-between justify-center items-center lg:flex-row flex-col lg:my-0 my-7`}>
                        <Link className="p-2 is-clickable lg:my-0 my-4" to='/#help' onClick={onClose}>Про нас</Link>
                        <Link className="p-2 is-clickable lg:my-0 my-4" to='/#activities' onClick={onClose}>Активна діяльність</Link>
                        <Link className="p-2 is-clickable lg:my-0 my-4" to='/#contacts' onClick={onClose}>Контакти</Link>
                    </nav>
                    <div className="lg:mr-12 my-7">
                        <span>UA</span>
                        <span className="h-full border mx-2"></span>
                        <span className="opacity-50">EN</span>
                    </div>
                </div>
                <Button text="Підтримати" />
            </div>
        </div>
    )
}

export default MobileNav