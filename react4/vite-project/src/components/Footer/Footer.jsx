import '../../components/Header/Header.css'
import './Footer.css'
import LogoImage from '/public/Header/logo.png'


export default function Footer(){

    return(
        <footer>
            <div className="container">
                <div className="header-content">
                    <div className="left">
                        <div className="header-logo">
                            <img src={LogoImage} />
                        </div>
                        <nav className="header-nav">
                            <p className="palka">|</p>
                            <li className="btn-nav">
                                <a href="">ГЛАВНАЯ</a>
                            </li>
                            <li className="btn-nav">
                                <a href="">КАТАЛОГ</a>
                            </li>
                            <p className="palka">|</p>
                            <li className="btn-nav">
                                <a href="">ИНФОРМАЦИЯ</a>
                            </li>
                        </nav>
                    </div>
                   <div className="text-footer white">
                       <p>Г КАЗАНЬ, УЛ. БАРИ ГАЛЕЕВА 3А</p>
                       <p>+7 (927) 482-09-82</p>
                       <p>Kuzmakolom@gMAIL.RU</p>
                   </div>
                </div>
            </div>
        </footer>
    )
}