import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Works} from "./layout/sections/works/Works";
import {Testimony} from "./layout/sections/testimony/Testimony";
import {Contacts} from "./layout/sections/contacts/Contacts";
import {Slogan} from "./layout/sections/slogan/Slogan";
import {Footer} from "./layout/footer/Footer";
import {GoTopBtn} from "./components/goTopBtn/GoTopBtn";
import {Particle} from "./components/particles/Particle";

function App() {

    return (
        <div className="App">
            <Particle />
            <Header/>
            <Main/>
            <Skills/>
            <Works />
            <Testimony />
            <Contacts />
            <Slogan />
            <Footer />
            <GoTopBtn />
        </div>
    );
}
export default App;