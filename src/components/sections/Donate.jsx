import Title from "../common/Title"
import Modal from '../common/Modal'
import { useEffect, useState } from "react"
import PaymentReference from "../common/PaymentReference"

const Donate = () => {
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        if(showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [showModal])

    const toggleModal = (e) => {
        if(e) {
            e.stopPropagation()
        }
        setShowModal(!showModal)
    }

    return (
        <div id="donate">
            <div className="container xl:py-28 py-12">
                <Title text='ФІНАНСОВА ДОПОМОГА ПРОЕКТУ'/>
                <div className="my-7 grid md:grid-cols-3 grid-cols-1 gap-4 2xl:w-3/4 w-full mx-auto">
                    <div className="transition-all ease-in-out duration-200 col-span-1 flex flex-col justify-center items-center font-semibold text-center hover:-translate-y-2 cursor-pointer w-full is-clickable" onClick={(e) => toggleModal(e)}>
                        <img src="./images/Bank-cards/4.png" className="object-contain" alt="" />
                        <p className="my-2">Mono банк</p>
                    </div>
                    <div className="transition-all ease-in-out duration-200 col-span-1 flex flex-col justify-center items-center font-semibold text-center hover:-translate-y-2 cursor-pointer w-full">
                        <img src="./images/Bank-cards/6.png" className="object-contain" alt="" />
                        <p className="my-2">Приват банк</p>
                    </div>
                    <div className="transition-all ease-in-out duration-200 col-span-1 flex flex-col justify-center items-center font-semibold text-center hover:-translate-y-2 cursor-pointer w-full">
                        <img src="./images/Bank-cards/5.png" className="object-contain" alt="" />
                        <p className="my-2">Liqpay</p>
                    </div>
                </div>
            </div>
            {
                showModal &&
                <Modal onClose={(e) => toggleModal(e)} 
                >
                    <PaymentReference />
                </Modal>
            }
        </div>
    )
}

export default Donate