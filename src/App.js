import Header from "./components/Header";
import Footer from "./components/Footer";
import Boost from "./components/Boost";
import Advanced from "./components/Advanced";
import Showcase from "./components/Showcase";
import Shortener from "./components/Shortener";
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();

export default function App() {
    return (
        <>
            <Header />
            <Showcase />
            <Shortener />
            <Advanced />
            <Boost />
            <Footer />
        </>
    );
}
