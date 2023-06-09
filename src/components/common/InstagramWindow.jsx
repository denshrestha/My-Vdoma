const InstagramWindow = ({imageUrl, activeIndex}) => (
    <div className="w-full h-full flex justify-center items-center rounded-lg overflow-hidden lg:flex-row flex-col text-[12px] max-h-[90vh] overflow-y-auto">
        <img src={`./images/Instagram/${imageUrl}`} className="h-full md:w-auto w-full md:object-contain object-cover object-right" alt="" />
        <div className="bg-white self-stretch px-7 py-6 text-black  md:max-w-[300px]">
            <div className="flex justify-start items-center mb-7">
                <div className="w-[32px] h-[32px]">
                    <img src="./images/avatar.png" className="w-full h-full object-contain" alt="" />
                </div>
                <span>myvdoma.hostomel</span>
            </div>
            <p className="lg:my-4 my-2">
            Війна, вона просто здетонувала наші мрії, дала серйозний привід, щоб ми включились та почали активно діяти💡
            </p>
            
            <p className="lg:my-4 my-2">Ще до війни в Україні були люди, які потребували допомоги. Ще до війни були ті, ким ми захоплювались, та кого хотіли підтримати.
            Пані Лідія — одна з них 🙌</p>
            
            <p className="lg:my-4 my-2">Ця прекрасна жінка самостійно виховує свого 7-річного правнука. Їхня історія розпочалася, ще коли йому було лише 8 місяців.
            Будучи прабабусею, їй довелося вдруге стати мамою ❤️‍🩹</p>
            <p className="lg:my-4 my-2">
            Пані Лідія, як і багато гостомельчан, також пережила окупацію; її будинок постраждав від уламків.
            Команда «Ми вдома» розчистила двір від наслідків бомбардувань, полагодила дах та заготовила частину дров на зиму.
            </p>
            <div className="flex justify-start items-center">
                <p className="flex justify-between items-center px-3 border-r border-r-black">
                    <span>{activeIndex + 1}/4</span>
                </p>
                <p className="flex justify-between items-center px-3 border-r border-r-black">
                    <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.9999 4L6.49985 0V2.5C-2.2999 2.5 0.16662 7.5 2.49985 10C0.0998507 5.2 4.16652 4.66667 6.49985 5V8L10.9999 4Z" fill="#0E0D0D"/>
                    </svg>
                    <span className="mx-2">Share</span>
                </p>
                <p className="flex justify-between items-center px-3 border-r border-r-black last:border-r-transparent">
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_9_781)">
                <path d="M7.00288 4.13086C5.15734 4.13086 3.66873 5.63379 3.66873 7.49707C3.66873 9.36035 5.15734 10.8633 7.00288 10.8633C8.84842 10.8633 10.337 9.36035 10.337 7.49707C10.337 5.63379 8.84842 4.13086 7.00288 4.13086ZM7.00288 9.68555C5.81025 9.68555 4.83525 8.7041 4.83525 7.49707C4.83525 6.29004 5.80734 5.30859 7.00288 5.30859C8.19842 5.30859 9.17051 6.29004 9.17051 7.49707C9.17051 8.7041 8.19551 9.68555 7.00288 9.68555ZM11.2511 3.99316C11.2511 4.42969 10.9029 4.77832 10.4734 4.77832C10.041 4.77832 9.69574 4.42676 9.69574 3.99316C9.69574 3.55957 10.044 3.20801 10.4734 3.20801C10.9029 3.20801 11.2511 3.55957 11.2511 3.99316ZM13.4594 4.79004C13.41 3.73828 13.1721 2.80664 12.4089 2.03906C11.6486 1.27148 10.7259 1.03125 9.68413 0.978516C8.61047 0.916992 5.39239 0.916992 4.31873 0.978516C3.27989 1.02832 2.35712 1.26855 1.59395 2.03613C0.830783 2.80371 0.595738 3.73535 0.543506 4.78711C0.482568 5.87109 0.482568 9.12012 0.543506 10.2041C0.592836 11.2559 0.830783 12.1875 1.59395 12.9551C2.35712 13.7227 3.27699 13.9629 4.31873 14.0156C5.39239 14.0771 8.61047 14.0771 9.68413 14.0156C10.7259 13.9658 11.6486 13.7256 12.4089 12.9551C13.1692 12.1875 13.4071 11.2559 13.4594 10.2041C13.5203 9.12012 13.5203 5.87402 13.4594 4.79004ZM12.0723 11.3672C11.846 11.9414 11.4078 12.3838 10.8361 12.6152C9.98011 12.958 7.94886 12.8789 7.00288 12.8789C6.0569 12.8789 4.02275 12.9551 3.16962 12.6152C2.60087 12.3867 2.1627 11.9443 1.93346 11.3672C1.59395 10.5029 1.6723 8.45215 1.6723 7.49707C1.6723 6.54199 1.59685 4.48828 1.93346 3.62695C2.1598 3.05273 2.59797 2.61035 3.16962 2.37891C4.02565 2.03613 6.0569 2.11523 7.00288 2.11523C7.94886 2.11523 9.98302 2.03906 10.8361 2.37891C11.4049 2.60742 11.8431 3.0498 12.0723 3.62695C12.4118 4.49121 12.3335 6.54199 12.3335 7.49707C12.3335 8.45215 12.4118 10.5059 12.0723 11.3672Z" fill="#0E0D0D"/>
                </g>
                <defs>
                <clipPath id="clip0_9_781">
                <rect width="13" height="15" fill="white" transform="translate(0.5)"/>
                </clipPath>
                </defs>
                </svg>
                <span className="mx-2">Instagram</span>
                </p>
            </div>
        </div>
    </div>
)

export default InstagramWindow