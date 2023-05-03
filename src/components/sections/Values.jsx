import Tite from "../common/Title";
import ValuesImageBlock from "../common/ValuesImageBlock";
import ValuesTextBlock from "../common/ValuesTextBlock";

const Values = () => (
    <div id="values" className="values">
        <div className="container xl:py-28 py-12">
            <Tite text={'Наші цінності'}/>
            <div className="my-7 grid grid-rows-1 gap-4 2xl:w-3/4 mx-auto">
                <div className="grid grid-cols-4 gap-4">
                    <div className="lg:col-span-1 sm:col-span-2 col-span-4 overflow-hidden">
                        <ValuesTextBlock 
                        title='Людяність'
                        text='Однаково турботливий, але об’єктивний підхід до кожного українця, незалежно від віку, релігії, статті, місця народження або життя.'
                        />
                    </div>
                    <div className="lg:col-span-3 sm:col-span-2 col-span-4 overflow-hidden rounded-lg">
                        <ValuesImageBlock path="Values/1.png"/>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    <div className="sm:col-span-1 col-span-4 overflow-hidden rounded-lg sm:block hidden">
                        <ValuesImageBlock path="Values/2.png"/>
                    </div>
                    <div className="sm:col-span-1 col-span-4 overflow-hidden">
                        <ValuesTextBlock 
                        title='Стабільність'
                        text='Ми не новачки, ми завжди були, є і будемо.'
                        />
                    </div>
                    <div className="sm:col-span-2 col-span-4 overflow-hidden rounded-lg">
                        <ValuesImageBlock path="Values/3.png"/>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    <div className="sm:col-span-2 col-span-4 overflow-hidden rounded-lg sm:block hidden">
                        <ValuesImageBlock path="Values/4.png"/>
                    </div>
                    <div className="sm:col-span-1 col-span-4 overflow-hidden">
                        <ValuesTextBlock 
                        title='Турбота'
                        text='Хочемо знайти можливість бути корисними для кожного, з ким звела нас доля.'
                        />
                    </div>
                    <div className="sm:col-span-1 col-span-4 overflow-hidden rounded-lg">
                        <ValuesImageBlock path="Values/5.png"/>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    <div className="lg:col-span-3 sm:col-span-2 col-span-4 overflow-hidden rounded-lg sm:order-1 order-2">
                        <ValuesImageBlock path="Values/6.png"/>
                    </div>
                    <div className="lg:col-span-1 sm:col-span-2 col-span-4 overflow-hidden sm:order-2 order-1">
                        <ValuesTextBlock 
                        title='Прозорість'
                        text='Ми прості, зрозумілі та доступні для всіх людей, які з нами стикаються. '
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Values