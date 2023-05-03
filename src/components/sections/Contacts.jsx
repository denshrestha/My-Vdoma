import ContactForm from "../common/ContactForm"
import Title from "../common/Title"
import EmailIcon from "../Icons/Email"
import FacebookIcon from "../Icons/Facebook"
import InstagramIcon from "../Icons/Instagram"
import PhoneRedIcon from "../Icons/PhoneRed"
import TikTokIcon from "../Icons/TikTok"
import YouTubeIcon from "../Icons/YouTube"

const Contacts = () => {
    return (
        <div id="contacts" className="contacts">
            <div className="container xl:py-28 py-12">
                <Title text='Контакти' />
                <div className="my-7 grid xl:grid-cols-2 grid-cols-1 gap-4 2xl:w-3/4 mx-auto">
                    <div className="col-span-1 flex flex-col  justify-center md:items-start items-center">
                        <div className="flex justify-start items-center font-bold md:text-2xl tetx-xl">
                            <PhoneRedIcon className='mr-4' />
                            <p>+38 (096) 979-58-01</p>
                        </div>
                        <div className="flex justify-start items-center my-4">
                            <EmailIcon  className="mr-4" />
                            <p>myvdoma.help@gmail.com</p>
                        </div>
                        <p className="md:my-4">Ми в соціальних мережах</p>
                        <ul className="my-4 flex justify-start items-center">
                            <li className='mx-3'>
                                <InstagramIcon />
                            </li>
                            <li className='mx-3'>
                                <FacebookIcon />
                            </li>
                            <li className='mx-3'>
                                <YouTubeIcon />
                            </li>
                            <li className='mx-3'>
                                <TikTokIcon />
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts