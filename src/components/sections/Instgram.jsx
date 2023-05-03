import { useEffect, useState } from "react"
import useModal from "../../hooks/useModal"
import InstagramBlock from "../common/InstagramBlock"
import InstagramWindow from "../common/InstagramWindow"
import Modal from "../common/Modal"
import Tite from "../common/Title"

const images = ['1.png', '2.png', '3.png', '4.png']

const Instagram = () => {
    const [imageUrl, setImageUrl] = useState('1.png')
    const [activeIndex, setActiveIndex] = useState(0)
    const {
        showModal,
        toggleModal,
    } = useModal()

    useEffect(() => {
        const imageIndex = images.findIndex((i) => i === imageUrl)
        if(imageIndex > -1) {
            setActiveIndex(imageIndex)
        }
    }, [imageUrl])

    const showImage = (direction) => {
        let itemIndex = images.findIndex((image) => image === imageUrl)        
        if(itemIndex > -1) {
            const index = direction === 'next' ? itemIndex + 1 : itemIndex - 1
            if(index >= images.length && direction === 'next') {
                setImageUrl(images[0])
            } else if (index <= 0) {
                const length = images.length - 1
                setImageUrl(images[length])
            } else {
                setImageUrl(images[index])
            }
        }
    }

    const ImagesList = () => (
        <ul className="my-7 grid xl:grid-cols-4 md:grid-cols-2 gap-6 2xl:w-3/4 mx-auto">
            {
                images.map((image, index) =>
                    <li key={index}>
                        <InstagramBlock image={image} onShowImage={(e, img) => toggleModal(e, img)}/>
                    </li>
                )
            }
        </ul>
    )

    return (
        <div id="instagram">
            <div className="container xl:py-28 py-12">
                <Tite text={'ІНСТАГРАМ'} />
                <ImagesList />
            </div>
            {
                showModal &&
                <Modal 
                showArrows
                onClose={(e) => toggleModal(e)}
                onNext={() => showImage('next')}
                onPrev={() => showImage('prev')}
                >
                    <InstagramWindow imageUrl={imageUrl} activeIndex={activeIndex}/>
                </Modal>
            }
        </div>
    )
}

export default Instagram