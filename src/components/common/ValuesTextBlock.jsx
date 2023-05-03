const ValuesTextBlock = ({title, text}) => (
    <div className="h-full flex justify-center items-start flex-col">
        <h3 className="text-2xl text-[#D30724] font-bold mb-2">
            {title}
        </h3>
        <p>{text}</p>
    </div>
)

export default ValuesTextBlock