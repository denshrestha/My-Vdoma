import Title from "../common/Title"
import CheckCircleIcon from "../Icons/CheckCircle"
import Button from '../common/Button'
import { useScrollTo } from "../../hooks/useScrollTo"

const Activities = () => (
    <div id="activities" className="activities">
        <div className="container xl:py-28 py-12">
            <Title text='Активна діяльність' />
            <div className="my-7 grid lg:grid-cols-2 grid-cols-1 gap-4 2xl:w-3/4 mx-auto">
                <div className="col-span-1">
                    <h3 className="text-2xl text-[#D30724] font-bold mb-8">
                        НАШІ ДОСЯГНЕННЯ:
                    </h3>
                    <ul className="lg:mr-5">
                        <li className="flex justify-start items-start my-3">
                            <div className="mr-4">
                                <CheckCircleIcon />
                            </div>
                            <p>Одразу після деокупації забезпечили гостомельську громаду засобами зв'язку, <strong>електроенергією та водопостачанням</strong>
                            </p>
                        </li>
                        <li className="flex justify-start items-start  my-4">
                            <div className="mr-4">
                                <CheckCircleIcon />
                            </div>
                            <p>Створили <strong>гуманітарні штаби</strong> в Гостомелі та сусідніх селах</p>
                        </li>
                        <li className="flex justify-start items-start  my-4">
                            <div className="mr-4">
                                <CheckCircleIcon />
                            </div>
                            <p>Під час зелених коридорів допомогли евакуювати близько <strong>1500 людей</strong> в різні куточки країни та закордон</p>
                        </li>
                        <li className="flex justify-start items-start  my-4">
                            <div className="mr-4">
                                <CheckCircleIcon />
                            </div>
                            <p>Здійснили <strong>5 поїздок</strong> на схід та доставили близько <strong>20 тонн</strong> продуктів</p>
                        </li>
                        <li className="flex justify-start items-start  my-4">
                            <div className="mr-4">
                                <CheckCircleIcon />
                            </div>
                            <p>Наша команда закумулювала та роздала понад <strong>500 тонн</strong> продуктів, десятки тон медикаментів, тонни хімії та речейпершої необхідності.</p>
                        </li>
                        <li className="flex justify-start items-start  my-4">
                            <div className="mr-4">
                                <CheckCircleIcon />
                            </div>
                            <p>Запустили <strong>програму психологічної та юридичної підтримки.</strong></p>
                        </li>
                        <li className="flex justify-start items-start  my-4">
                            <div className="mr-4">
                                <CheckCircleIcon />
                            </div>
                            <p>Прийняли та безкоштовно розселили <strong>200 біженців</strong> на заході України</p>
                        </li>
                        <li className="flex justify-start items-start  my-4">
                            <div className="mr-4">
                                <CheckCircleIcon />
                            </div>
                            <p>Відремонтували <strong>25 житлових будівель</strong> зруйнованих бойовими діями</p>
                        </li>
                        <li className="flex justify-start items-start  my-4">
                            <div className="mr-4">
                                <CheckCircleIcon />
                            </div>
                            <p>Завезли <strong>20 тонн</strong> гуманітарної допомоги на схід України</p>
                        </li>
                        <li className="flex justify-start items-start  my-4">
                            <div className="mr-4">
                                <CheckCircleIcon />
                            </div>
                            <p>Евакуювали понад <strong>100 людей</strong> з місць  активних бойових дій</p>
                        </li>
                        <li className="flex justify-start items-start  my-4">
                            <div className="mr-4">
                                <CheckCircleIcon />
                            </div>
                            <p>Завершили реконструкцію Хабу для гум.допомоги</p>
                        </li>
                    </ul>
                </div>
                <div className="col-span-1">
                    <h3 className="text-2xl text-[#D30724] font-bold mb-8">
                        НАШІ ДОВГОСТРОКОВІ ПЛАНИ:
                    </h3>
                    <ul className="lg:ml-5">
                        <li className="flex justify-start items-start  my-4">
                            <div className="mr-4">
                                <CheckCircleIcon />
                            </div>
                            <p><strong>Будівництво житлового комплексу</strong> для подальшого безкоштовного розселення у ньому постраждалих від війни людей</p>
                        </li>
                        <li className="flex justify-start items-start  my-4">
                            <div className="mr-4">
                                <CheckCircleIcon />
                            </div>
                            <p>Створення центру розвитку людини <strong>(психологічна допомога, бізнес навчання, тренінги з розвитку людини)</strong></p>
                        </li>
                        <li className="flex justify-start items-start  my-4">
                            <div className="mr-4">
                                <CheckCircleIcon />
                            </div>
                            <p>Створення <strong>дитячих івентів</strong> </p>
                        </li>
                        <li className="flex justify-start items-start  my-4">
                            <div className="mr-4">
                                <CheckCircleIcon />
                            </div>
                            <p>Відкриття <strong>бізнес школи для підлітків</strong></p>
                        </li>
                        <li className="flex justify-start items-start  my-4">
                            <div className="mr-4">
                                <CheckCircleIcon />
                            </div>
                            <p>Організація <strong> дискусійного молодіжного клубу</strong></p>
                        </li>
                        <li className="flex justify-start items-start  my-4">
                            <div className="mr-4">
                                <CheckCircleIcon />
                            </div>
                            <p><strong>Game-room</strong> для молоді</p>
                        </li>
                    </ul>

                    <div className="my-8 bg-white shadow-xl p-7 rounded-lg">
                        <h3 className="font-bold text-2xl text-center">ХОЧЕТЕ ПІДТРИМАТИ ІНІЦІАТИВУ?</h3>
                        <div className="grid grid-cols-3 gap-4 xl:w-2/3 mx-auto my-7 font-semibold text-center">
                            <div className="lg:col-span-1 col-span-3 flex justify-center items-center flex-col">
                                <img src="./images/Bank-cards/1.png" alt="" />
                                <p className="my-2">Приват Банк IBAN</p>
                            </div>
                            <div  className="lg:col-span-1 col-span-3 flex justify-center items-center flex-col">
                                <img src="./images/Bank-cards/2.png" alt="" />
                                <p className="my-2">Приват Банк SWIFT</p>
                            </div>
                            <div  className="lg:col-span-1 col-span-3 flex justify-center items-center flex-col">
                                <img src="./images/Bank-cards/3.png" alt="" />
                                <p className="my-2">PAY PAL</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <Button text='Підтримати' onClick={e => {
                                e.stopPropagation()
                                useScrollTo('donate')
                            }}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
) 

export default Activities