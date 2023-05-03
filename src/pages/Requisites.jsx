import Title from "../components/common/Title"
import { useScrollTo } from "../hooks/useScrollTo"

const ButtonBordered = ({text, to}) => {
    return (
        <button className="font-semibold border border-[#CFCFCF] rounded-xl shadow-lg py-4 px-6 m-2 grow is-clickable" onClick={e => {
            e.stopPropagation()
            useScrollTo(to)
        }}>
            {text}
        </button>
    )
}

const Requisites = () => (
    <div className="relative container lg:w-2/4 w-full md:my-7 my-4">
        <Title text='ФІНАНСОВА ДОПОМОГА ПРОЕКТУ'/>
        <div className="flex justify-between items-center flex-wrap lg:w-4/6 w-full xl:mx-auto">
            <ButtonBordered text='Монобанк' to='mb'/>
            <ButtonBordered text='Платежі по Україні' to='pb'/>
            <ButtonBordered text='Swift' to='swift'/>
            <ButtonBordered text='PayPal' to='paypal'/>
        </div>
        <div className="md:my-7 my-4 border border-[#CFCFCF] rounded-xl md:px-7 px-4 md:py-8 py-5" id='mb'>
            <h3 className="text-center lg:text-2xl text-lg font-bold uppercase">моно банк</h3>
            <p className="mt-7">
                <span>Mono банка</span> <br/>
                <span className="font-bold sm:text-base text-[12px]">https://send.monobank.ua/jar/8bfP9hWNwd</span>
            </p>
        </div>
        <div className="md:my-7 my-4 border border-[#CFCFCF] rounded-xl  md:px-7 px-4 md:py-8 py-5" id='pb'>
            <h3 className="text-center lg:text-2xl text-lg font-bold uppercase">Платежі по Україні</h3>
            <h3 className="md:my-7 my-4 text-center text-lg font-bold uppercase">🇺🇦 Перекази по Україні</h3>
            <p className="md:my-7 my-4">
                <span>БО БФ “Ми вдома”</span> <br/>
                <span>ЄДРПОУ 44723978</span> <br/>
                <span>АТ КБ “ПриватБанк”</span> <br/>
                <span>Призначення платежу: Благодійні пожертвування</span> 
            </p>
            <p className="md:my-7 my-4">
                <span>Гривна</span> <br/>
                <span className="font-bold sm:text-base text-[12px]">UA953052990000026001000136976</span>
            </p>
        </div>
        <div className="md:my-7 my-4 border border-[#CFCFCF] rounded-xl md:px-7 px-4 md:py-8 py-5" id='swift'>
            <h3 className="text-center lg:text-2xl text-lg font-bold uppercase">Swift Платежі з-за кордону (USD; EUR)</h3>
            <h3 className="md:my-7 my-4 text-center text-lg font-bold uppercase">SWIFT in US dollars (USD)</h3>
            <p className="md:my-7 my-4">
                <span className="font-bold">BENEFICIARY :</span> CHARITY ORGANIZATION "CHARITY FOUNDATION" MY VDOMA "
            </p>
            <p className="md:mt-7 my-4">
                <span>IBAN Code</span> <br/>
                <span className="font-bold sm:text-base text-[12px]">UA393052990000026006030120805</span>
            </p>
            <h3 className="md:my-7 my-4 text-center text-lg font-bold uppercase">SWIFT in US dollars (USD)</h3>
            <p className="md:my-7 mt-4">
                <span className="font-bold">BENEFICIARY :</span> CHARITY ORGANIZATION "CHARITY FOUNDATION" MY VDOMA "
            </p>
            <p className="md:my-7 mt-4">
                <span>IBAN Code</span> <br/>
                <span className="font-bold sm:text-base text-[12px]">UA833052990000026002020127500</span>
            </p>
            <h3 className="md:my-7 my-4 text-center text-lg font-bold uppercase" id='paypal'>PayPal</h3>
            <p className="md:my-7 mt-4">
                <span>PayPal</span> <br/>
                <span className="font-bold sm:text-base text-[12px]">myvdoma.help@gmail.com</span>
            </p>
        </div>
    </div>
)

export default Requisites