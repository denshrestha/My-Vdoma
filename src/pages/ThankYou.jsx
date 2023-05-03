import Title from '../components/common/Title'
import Button from '../components/common/Button'
import { useNavigate } from 'react-router-dom'
const ThankYou = () => {
    const navigate = useNavigate()
    return (
        <div className="relative container lg:w-2/4 w-full md:my-7 my-4 min-h-[50vh] flex justify-center items-center flex-col">
            <Title text="Дякуємо за Ваше повідомлення!"/>
            <p className='text-center'>
                Ми цінуємо Вашу готовність допомогти та відповімо Вам
                в найближчий час!
            </p>
            <div className='my-7 flex justify-center items-center'>
                <Button text="На головну" onClick={(e) => {
                    e.stopPropagation()
                    navigate('/')
                }}/>
            </div>
        </div>
    )
}

export default ThankYou