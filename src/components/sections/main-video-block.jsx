import InstagramIcon from '../Icons/Instagram'
import FacebookIcon from '../Icons/Facebook'
import YouTubeIcon from '../Icons/YouTube'
import TikTokIcon from '../Icons/TikTok'
import ArrowIcon from '../Icons/Arrow'
import { useScrollTo } from '../../hooks/useScrollTo'
import Modal from '../common/Modal'
import useModal from '../../hooks/useModal'

const MainVideoBlock = () => {
    const {
        showModal,
        toggleModal,
    } = useModal()

    const scroll = (e) => {
        e.stopPropagation()
        useScrollTo('directions')
    }

    return (
        <div className="relative h-[90vh]">
            <video 
            src="./video/Myvdoma_background_video.mp4"
            placeholder="./images/main-video-placeholder.png"
            className="object-cover w-full h-full"
            width={'100%'}
            loop
            autoPlay
            muted
            ></video>
    
            <div className="absolute top-0 left-0 w-full h-full text-white bg-gradient-to-b from-black to-black/50 flex flex-col justify-end items-center">
                <div className="flex flex-col justify-center items-center xl:w-2/5 md:w-3/5 w-full text-center md:text-xl text-lg xl:mb-40 md:mb-20 mb-10">
                    <h1>
                        <span className="sm:tracking-[0.6em] tracking-[0.2em]">БЛАГОДІЙНИЙ ФОНД</span>
                        <br />
                        <span className="inline-block md:text-7xl text-4xl font-bold my-8">МИ ВДОМА</span>
                    </h1>
                    <p className="xl:my-8 my-4">Захист вразливих верст населення, створення нової екосистеми, яка допоможе створити Гостомель, як місто майбутнього </p>
                    <button className="w-[64px] h-[64px] rounded-full border border-white/30 outline-none bg-black/50 flex justify-center items-center is-clickable" onClick={(e) => toggleModal(e)}>
                        <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 14V0L11 7L0 14Z" fill="white"/>
                        </svg>
                    </button>
                </div>
                <ul className='xl:mb-16 mb-8 flex justify-center items-center'>
                    <li className='mx-3'>
                        <InstagramIcon />
                    </li>
                    <li className='mx-3'>
                        <FacebookIcon />
                    </li>
                    <li className='mx-3'>
                        <YouTubeIcon />
                    </li>
                    <li className='mx-3'>
                        <TikTokIcon />
                    </li>
                </ul>
                <div className='w-[72px] h-[72px] p-2.5 bg-white rounded-full -mb-[36px] is-clickable' onClick={(e) => scroll(e)}>
                    <button className='bg-black w-full h-full rounded-full flex justify-center items-center'>
                        <ArrowIcon className='stroke-white'/>
                    </button>
                </div>
            </div>
            {
                showModal &&
                <Modal onClose={(e) => toggleModal(e)} hideArrows={true}>
                    <div className='flex justify-center items-center h-full'>
                        <video 
                        src="./video/Myvdoma_background_video.mp4"
                        placeholder="./images/main-video-placeholder.png"
                        className="object-cover w-full h-full"
                        controls
                        ></video>
                    </div>
                </Modal>
            }
        </div>
    )
}

export default MainVideoBlock