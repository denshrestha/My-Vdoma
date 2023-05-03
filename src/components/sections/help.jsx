import Tite from "../common/Title"
import { helpList } from "../../modules"
import HelpListItem from "../common/HelpListItem"

const Help = () => {
    return (
        <div id="help" className="help">
            <div className="container xl:py-28 py-12">
                <Tite text={'Кому ми допомагаємо'}/>
                <ul className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 place-items-stretch 2xl:w-3/4 mx-auto -my-4">
                    {
                        helpList.map(({title, image}, index) => 
                            <li key={index} className='transition-all duration-200 ease-linear h-full hover:-translate-y-2'>
                                <HelpListItem image={image} text={title}/>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
} 

export default Help