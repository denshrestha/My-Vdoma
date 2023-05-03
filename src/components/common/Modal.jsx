import { useState } from "react"
import { directionList } from "../../modules"
import ArrowGalleryIcon from "../Icons/ArrowGallery"
import CloseIcon from "../Icons/Close"

const Modal = ({children, showBottom = false, onClose, onNext, onPrev, onSelect, showArrows = false, activeIndex}) => {
    const [touchPosition, setTouchPosition] = useState(null)

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e) => {
        if(!showArrows) return
        const touchDown = touchPosition
    
        if(touchDown === null) {
            return
        }
    
        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch
    
        if (diff > 5) {
            onNext()
        }
    
        if (diff < -5) {
            onPrev()
        }
    
        setTouchPosition(null)
    }

    const next = (e) => {
        e.stopPropagation()
        onNext()
    }

    const prev = (e) => {
        e.stopPropagation()
        onPrev()
    }

    const setImage = (e, i) => {
        e.stopPropagation()
        onSelect(i)
    }

    const Tumbnails = () => {
        return (
            <ul className="lg:flex hidden justify-between items-center w-full">
                {
                    directionList
                    .map(({image}, index) =>
                        <li 
                        className={`w-[150px] h-[100px] mx-1 border ${activeIndex === index ? 'border-white' : 'border-transparent'}`} 
                        key={index}
                        onClick={(e) => setImage(e, index)}
                        >
                            <img src={`./images/Directions/${image}`} height="100%" width={'100%'} className="object-cover w-full h-full" alt="" />
                        </li>
                    )
                }
            </ul>
        )
    }
    
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black/90 z-20 flex flex-col justify-between items-center text-white lg:p-10 p-4">
            <div className="flex justify-end items-end w-full grow-0">
                <button onClick={e => onClose(e)} className="is-clickable">
                    <CloseIcon />
                </button>
            </div>
            <div className="flex justify-between items-center grow">
                {
                    showArrows &&
                    <div 
                    className="mx-4 hover:bg-black md:block hidden cursor-pointer is-clickable p-4"
                    onClick={(e) => prev(e)}
                    >
                        <ArrowGalleryIcon />
                    </div>
                }
                <div 
                className={`flex justify-start items-start mx-auto h-full lg:py-4 lg:max-h-[70vh] lg:max-w-[70vw] overflow-y-scroll`} 
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                >
                    {children}
                </div>
                {
                    showArrows &&
                    <div 
                    className="mx-4 hover:bg-black md:block hidden cursor-pointer is-clickable p-4"
                    onClick={(e) => next(e)}
                    >
                        <ArrowGalleryIcon className="rotate-180" />
                    </div>
                }
            </div>
            { showBottom && <Tumbnails />}
        </div>
    )
}

export default Modal