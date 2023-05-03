import Activities from "../components/sections/Activities"
import Contacts from "../components/sections/Contacts"
import Donate from "../components/sections/Donate"
import Help from "../components/sections/help"
import Instagram from "../components/sections/Instgram"
import MainVideoBlock from "../components/sections/main-video-block"
import MainActivityDirections from "../components/sections/OurMainActivityDirections"
import Values from "../components/sections/Values"

const Home = () => (
    <div className="relative">
        <MainVideoBlock />
        <MainActivityDirections />
        <Help />
        <Values />
        <Activities />
        <Instagram />
        <Donate />
        <Contacts />
    </div>
)

export default Home