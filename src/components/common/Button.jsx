const Button = ({text, onClick}) => {
    return (
        <button className="
        text-white
        relative py-4 px-7 rounded-full  outline-none border-none bg-[#D30724] overflow-hidden 
        is-clickable
        after:content-[''] after:absolute after:bg-[#E21C38] after:w-[52px] after:h-[53px] after:rounded-full after:-bottom-6 
        before:content-[''] before:absolute before:bg-[#E21C38] before:w-[52px] before:h-[53px] before:rounded-full before:-top-7 before:-left-6
        hover:after:scale-[450%]
        hover:before:scale-[450%]
        before:transition-all
        after:transition-all
        transition-all ease-in-out duration-400
        sm:max-w-[150px]
        max-w-[200px]
        "
        onClick={onClick}
        >
            <span className="relative z-20">{ text }</span>
        </button>
    )
}

export default Button