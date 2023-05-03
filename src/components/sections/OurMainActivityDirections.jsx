import { useEffect, useState } from "react"
import Tite from "../common/Title"
import DirectionListItem from '../common/DirectionListItem'
import { directionList } from "../../modules"
import ZoomInIcon from "../Icons/ZoomIn"
import Modal from "../common/Modal"
import useModal from "../../hooks/useModal"

const MainActivityDirections = () => {
    const [imageUrl, setImageUrl] = useState('1.jpeg')
    const [activeIndex, setActiveIndex] = useState(0)

    const {
        showModal,
        toggleModal,
    } = useModal()

    useEffect(() => {
        const imageIndex = directionList.findIndex((i) => i.image === imageUrl)
        if(imageIndex > -1) {
            setActiveIndex(imageIndex)
        }
    }, [imageUrl])

    const setImageAndShowModal = (image) => {
        setImageUrl(image)
        toggleModal()
    }

    const showImage = (direction) => {
        let itemIndex = directionList.findIndex(({image}) => image === imageUrl)        
        if(itemIndex > -1) {
            const index = direction === 'next' ? itemIndex + 1 : itemIndex - 1
            if(index >= directionList.length && direction === 'next') {
                setImageUrl(directionList[0].image)
            } else if (index <= 0) {
                const length = directionList.length - 1
                setImageUrl(directionList[length].image)
            } else {
                setImageUrl(directionList[index].image)
            }
        }
    }

    const DirectionsList = () => (
        <ul className="-my-4">
            {
                directionList
                .filter(({title}) => !!title)
                .map(({title, image}, index) =>
                    <li key={index} className="is-clickable">
                        <DirectionListItem 
                        title={title} 
                        isActive={image === imageUrl}
                        onImageChange={() => setImageUrl(image)}
                        onShowModal={() => setImageAndShowModal(image)}
                        />
                    </li>
                )
            }
        </ul>
    )

    const ImageBlock = () => (
        <div className="rounded-md overflow-hidden max-h-[585px] my-auto relative group is-clickable lg:block hidden">
            <img src={`./images/Directions/${imageUrl}`} className="object-cover w-full h-full" alt="" />
            <div 
            className="transition-all ease-in-out duration-200 absolute top-0 h-full w-full flex justify-center items-center bg-black/50 opacity-0 group-hover:opacity-100 cursor-pointer"
            onClick={(e) => toggleModal(e)}
            >
                <ZoomInIcon />
            </div>
        </div>
    )

    return (
        <div id="directions" className="main-activities">
            <div className="container xl:py-28 py-12">
                <Tite text='Основні напрямки нашої діяльності' />
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 2xl:w-3/4 mx-auto">
                    <DirectionsList />
                    <ImageBlock />
                </div>
            </div>
            {
                showModal &&
                <Modal 
                showArrows 
                showBottom
                activeIndex={activeIndex}
                onNext={() => showImage('next')}
                onPrev={() => showImage('prev')}
                onClose={(e) => toggleModal(e)} 
                onSelect={(e) => setImageUrl(directionList[e].image)}
                >
                    <img src={`./images/Directions/${imageUrl}`} className="object-contain h-full w-full" alt="" />
                </Modal>
            }
        </div>
    )
}

export default MainActivityDirections