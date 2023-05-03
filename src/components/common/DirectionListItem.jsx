import ArrowIcon from "../Icons/Arrow"

const DirectionListItem = ({title, isActive, onImageChange, onShowModal}) => {
    const handleClick = (e) => {
        e.stopPropagation()
        if(window.innerWidth < 1024) {
            onShowModal()
        } else {
            onImageChange()
        }
    }

    return (
        <div className={`
        group 
        p-8 bg-[#FBFAFA] my-4 rounded-md overflow-hidden relative
        before:content-[''] before:absolute before:-bottom-7 before:-left-7 before:bg-[#D30724] before:w-[52px] before:h-[52px] before:rounded-full
        before:transition-all before:ease-linear before:duration-400
        hover:before:scale-[4000%]
        cursor-pointer
        ${isActive ? 'before:scale-[4000%]' : 'before:scale-1'}
        `}
        onClick={(e) => handleClick(e)}
        >
            <div className={`flex justify-between items-center text-xl uppercase relative z-10 group-hover:text-white transition-all ease-in-out duration-200 ${isActive ? 'text-white' : ''}`}>
                <p className="w-[90%] ">{title}</p>
                <button className="bg-transparent outline-none">
                    <ArrowIcon className={`-rotate-90 group-hover:stroke-white group-hover:translate-x-2 transition-all ease-in-out duration-200 ${isActive ? 'stroke-white' : 'stroke-[#0E0D0D]'}`}/>
                </button>
            </div>
        </div>
    )
}

export default DirectionListItem