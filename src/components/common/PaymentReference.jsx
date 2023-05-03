import CopyIcon from '../Icons/Copy'

const PBReference = () => (
    <>
        <h3 className=":lgtext-2xl text-xl font-bold uppercase text-center">
            Платежі з-за кордону <br/> та по Україні
        </h3>
        <h4 className="lg:text-xl text-lg font-bold uppercase text-center xl:my-7 my-4">🇺🇦 Перекази по Україні</h4>
        <p className="my-4">
            <span>БО БФ</span> <br/>
            <span className="font-bold">“Ми вдома”</span>
        </p>
        <p className="my-4">
            <span>ЄДРПОУ</span> <br/>
            <span className="font-bold">44723979</span>
        </p>
        <p className="my-4">
            <span>АТ КБ</span> <br/>
            <span className="font-bold">“ПриватБанк”</span>
        </p>
        <p className="my-4">
            <span>Призначення платежу</span> <br/>
            <span className="font-bold">Благодійна допомога</span>
        </p>
        <p className="my-4">
            <span>Гривня</span> <br/>
            <span className="font-bold lg:flex justify-between items-center">UA953052990000026001000136976 <CopyIcon className="stroke-black"/></span>
        </p>
    </>
)

const SWIFTReference = () => (
    <>
        <h3 className="lg:text-2xl text-lg font-bold uppercase text-center">
            SWIFT перекази з-за кордону (USD; EUR)
        </h3>
        <h4 className="lg:text-xl font-bold uppercase text-center xl:my-7 my-4">Реквізити підприємства/Company details</h4>
        <p className="my-4">
            <span>Назва підприємства/company Name</span> <br/>
            <span className="font-bold">БО БФ МИ ВДОМА/CHARITY ORGANIZATION "CHARITY FOUNDATION" MY VDOMA "</span>
        </p>
        <p className="my-4">
            <span>IBAN Code</span> <br/>
            <span className="font-bold">UA393052990000026006030120805</span>
        </p>
        <p className="my-4">
            <span>Назва банку/Name of the bank</span> <br/>
            <span className="font-bold">JSC CB "PRIVATBANK", 1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE</span>
        </p>
        <p className="my-4">
            <span>SWIFT code банку/Bank SWIFT Code</span> <br/>
            <span className="font-bold">PBANUA2X</span>
        </p>
        <p className="my-4">
            <span>Адреса підприємства/Company address</span> <br/>
            <span className="font-bold">08290, УКРАЇНА, ОБЛ. КИЇВСЬКА, Р-Н. БУЧАНСЬКИЙ, СМТ. ГОСТОМЕЛЬ, ВУЛ. ОСТРОМИРСЬКА, Б. 35Б, КВ. 1./Ukraine, 08289, Kyiv region, Bucha district, Gostomel urban-type settlement, 35B Ostromirska Street, 1</span>
        </p>
        <h4 className="lg:text-xl font-bold uppercase text-center xl:my-7 my-4">Банки кореспонденти/Correspondent banks</h4>
        <p className="my-4">
            <span>Рахунок у банку-кореспонденті/Account in the correspondent bank</span> <br/>
            <span className="font-bold">001-1-000080</span>
        </p>
        <p className="my-4">
            <span>SWIFT Code банку-кореспондента/SWIFT Code of the correspondent bank</span> <br/>
            <span className="font-bold">CHASUS33</span>
        </p>
        <p className="py-4 my-4 border-b border-b-black/30">
            <span>Банк-кореспондент/Correspondent bank</span> <br/>
            <span className="font-bold">JP Morgan Chase Bank, New York ,USA</span>
        </p>
        <p className="my-4">
            <span>Рахунок у банку-кореспонденті/Account in the correspondent bank</span> <br/>
            <span className="font-bold">890-0085-754</span>
        </p>
        <p className="my-4">
            <span>SWIFT Code банку-кореспондента/SWIFT Code of the correspondent bank</span> <br/>
            <span className="font-bold">IRVT US 3N</span>
        </p>
        <p className="py-4 my-4 border-b border-b-black/30">
            <span>Банк-кореспондент/Correspondent bank</span> <br/>
            <span className="font-bold">The Bank of New York Mellon, New York, USA</span>
        </p>
        <p className="my-4">
            <span>Рахунок у банку-кореспонденті/Account in the correspondent bank</span> <br/>
            <span className="font-bold">36445343</span>
        </p>
        <p className="my-4">
            <span>SWIFT Code банку-кореспондента/SWIFT Code of the correspondent bank</span> <br/>
            <span className="font-bold">CITI US 33</span>
        </p>
        <p className="py-4 my-4 border-b border-b-black/30">
            <span>Банк-кореспондент/Correspondent bank</span> <br/>
            <span className="font-bold">Citibank N.A., NEW YORK, USA</span>
        </p>
        <h4 className="text-xl font-bold uppercase text-center xl:my-7 my-4">Призначення платежу/Remittance information</h4>
        <p>
        Форма оплати/Payment form <br/>
        Опис товару(послуг)/Description of goods (services) <br/>
        Номер та дата документа(контракту/інвойсу/оферти, тощо)/Document number and dates (contract/invoice/offer, etc.)
        </p>
    </>
)

const PaymentReference = () => (
    <div className="bg-white xl:p-8 p-4 rounded-md text-black h-full max-h-[90vh] overflow-y-auto text-sm md:text-base-1">
        <PBReference />
        <SWIFTReference />
    </div>
)

export default PaymentReference