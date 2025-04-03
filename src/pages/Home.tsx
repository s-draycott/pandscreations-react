import Header from "../components/header/Header";
import welcome from "../assets/home-background.jpg";

export default function Home() {
    return (
        <>
            <Header />
            <img id="welcome-img" src={welcome}></img>
        </>
    );
}
