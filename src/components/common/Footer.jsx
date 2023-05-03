import { Link, useNavigate } from "react-router-dom"
import Button from "./Button"
const Footer = () => {
    const year = new Date().getFullYear()
    const navigate = useNavigate()

    const goTo = (e) => {
        e.stopPropagation()
        navigate('/requisites')
    }
    return (
        <footer className="bg-black">
            <div className="container py-14 text-white flex lg:justify-between justify-center items-center lg:flex-row flex-col 2xl:w-3/4">
                <div className="flex lg:justify-between justify-center items-center lg:flex-row flex-col lg:basis-1/2">
                    <img src="./images/svg/Logotype.svg" className="lg:mb-0 mb-7" alt="Logo" />
                    <nav className={`flex lg:justify-between justify-center items-center lg:flex-row flex-col lg:my-0 my-7`}>
                        <Link className="p-2 is-clickable lg:my-0 my-4" to='/#help'>Про нас</Link>
                        <Link className="p-2 is-clickable lg:my-0 my-4" to='/#activities'>Активна діяльність</Link>
                        <Link className="p-2 is-clickable lg:my-0 my-4" to='/#contacts'>Контакти</Link>
                    </nav>
                </div>
                <div className="flex lg:justify-between justify-center items-center lg:flex-row flex-col">
                    <div className="lg:mr-12 my-7">
                        <span>UA</span>
                        <span className="h-full border mx-2"></span>
                        <span className="opacity-50">EN</span>
                    </div>
                    <Button text="Підтримати" onClick={e => goTo(e)}/>
                </div>
            </div>
            <div className="bg-[#1A1818] py-6 text-center text-white/30 text-sm">
                <p>
                    ©Ми вдома {year} | Сайт розроблено за підтримки - 
                    <span className="text-[#D30724]"> Rivo Agency</span>
                </p>
            </div>
        </footer>
    )
}

export default Footer