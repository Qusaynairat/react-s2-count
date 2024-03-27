import style from "./Navbar.module.css";

function Navbar() {
    return (
        <div className={style.container}>
        <a href="#home" className={`${style.bg} ${style.lnk}`}>Home</a>
        <a href="#about" className={`${style.bg} ${style.lnk}`}>About</a>
        <a href="#services" className={`${style.bg} ${style.lnk}`}>Services</a>
        <a href="#contact" className={`${style.bg} ${style.lnk}`}>Contact</a>
        </div>
    );
}

export default Navbar