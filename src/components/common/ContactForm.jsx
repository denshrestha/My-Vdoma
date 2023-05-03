import { useNavigate } from "react-router-dom"
import TextAreaInput from "../Inputs/TextAreaInput"
import TextInput from "../Inputs/TextInput"
import Button from "./Button"

const ContactForm = () => {
    const navigate = useNavigate()
    const goTo = (e) => {
        e.stopPropagation()
        navigate('/thank-you')
    }
    return (
        <form className="xl:w-3/4 grid grid-rows-1 gap-4">
            <TextInput placeholder="Ваше повне Ім'я"/>
            <TextInput placeholder="Ваш мобільний"/>
            <TextInput placeholder="Ваш email"/>
            <TextAreaInput placeholder="Ваше повідомлення" />
            <Button text="Відправити" onClick={(e) => goTo(e)} />
        </form>
    )
}
export default ContactForm