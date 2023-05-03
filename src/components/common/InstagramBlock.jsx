import CopyIcon from "../Icons/Copy"
import ZoomInIcon from "../Icons/ZoomIn"

const InstagramBlock = ({image, onShowImage}) => (
    <div className="relative rounded-lg overflow-hidden group">
        <img src={`./images/Instagram/${image}`} className='w-full object-contain' alt="" />
        <div 
        className="transition-all duration-200 ease-in-out absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center p-4 group-hover:bg-black/30 cursor-pointer is-clickable"
        onClick={(e) => onShowImage(e, image)}
        >
            <CopyIcon className='self-end'/>
            <div className="transition-all duration-200 ease-in-out w-full h-full flex justify-center items-center group-hover:opacity-100 opacity-0">
                <ZoomInIcon />
            </div>
        </div>
    </div>
)

export default InstagramBlock