import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import BurgerIcon from "../Icons/Burger"
import PhoneIcon from "../Icons/Phone"
import Button from "./Button"
import MobileNav from "./MobileNavBar"

const Header = () => {
    const [activeMobileMenu, setActiveMobileMenu] = useState(false)
    let location = useLocation();
    const navigate = useNavigate()

    useEffect(() => {
        if(activeMobileMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [activeMobileMenu])

    const toggleMenu = (e) => {
        e.stopPropagation()
        setActiveMobileMenu(!activeMobileMenu)
    }

    const goTo = (e) => {
        e.stopPropagation()
        navigate('/requisites')
    }

    const textColor = location.pathname === '/' ? 'text-white' : 'text-black'
    const position = location.pathname === '/' ? 'absolute' : 'relative'
    const strokeColor = location.pathname === '/' ? 'stroke-white' : 'stroke-black'

    const imagePath = location.pathname === '/' ? './images/svg/Logotype.svg' : './images/Logotype-dark.svg'

    return (
        <header className={`${position} top-0 right-0 left-0 lg:p-8 p-4 w-full z-20 container flex justify-between items-center ${textColor}`}>
            <nav className={` w-full justify-between items-center lg:flex hidden`}>
                <Link className="p-2 is-clickable" to='/#help'>Про нас</Link>
                <Link className="p-2 is-clickable" to='/#activities'>Активна діяльність</Link>
                <Link className="p-2 is-clickable" to='/#contacts'>Контакти</Link>
            </nav>
            <img src={imagePath} className="max-h-[71px] lg:w-2/3 " alt="Logo" onClick={e => {
                e.stopPropagation()
                navigate('/')
            }}/>
            <div className="flex xl:justify-between justify-end items-center  w-full">
                <div className="justify-between items-center flex lg:mx-0 mx-5">
                    <PhoneIcon className="sm:inline hidden"/>
                    <span className={`ml-4 ${textColor} xl:inline hidden`}>+38 (066) 001 12 23</span>
                </div>
                <div className="mx-6 lg:block hidden">
                    <span className={`${textColor}`}>UA</span>
                    <span className="h-full border mx-2"></span>
                    <span className={`${textColor} opacity-50`}>EN</span>
                </div>
                <Button text="Підтримати" onClick={e => goTo(e)}/>
                <button 
                onClick={(e) => toggleMenu(e)}
                className={`w-[45px] h-[45px] lg:hidden flex  justify-center items-center is-clickable ml-4 ${strokeColor}`}
                >
                    <BurgerIcon />
                </button>
            </div>
            <MobileNav onClose={(e) => toggleMenu(e)} isActive={activeMobileMenu}/>
        </header>
    )
}

export default Header