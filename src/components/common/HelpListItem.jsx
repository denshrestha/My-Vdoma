const HelpListItem = ({image, text}) => (
    <div className="shadow-lg rounded-lg h-full bg-white">
        <img src={`./images/Help/${image}`} className='w-full' alt="" />
        <p className="my-3 p-4 text-center">{text}</p>
    </div>
)

export default HelpListItem