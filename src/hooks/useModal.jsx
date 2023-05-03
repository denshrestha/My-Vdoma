import { useEffect, useState } from "react";

export default function useModal () {
    return modal()
}

function modal() {
    const [showModal, setShowModal] = useState(false)
    useEffect(() => {
        if(showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [showModal])

    const toggleModal = (e, fn) => {
        if(e) e.stopPropagation()
        if(typeof fn === 'function') fn()
        setShowModal(!showModal)
    }
    return {
        showModal,
        toggleModal
    }
}