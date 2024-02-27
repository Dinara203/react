import './Header.css'
import LogoImage from '/public/Header/logo.png'
import SearchImage from '/public/Header/search.png'
import CardImage from '/public/Header/card.png'
import LikeImage from '/public/Header/like.png'
import {Link} from 'react-router-dom'

export default function Header(){

    return(
        <header>
            <div className="container">
                <div className="header-content">
                    <div className="left">
                        <div className="header-logo">
                            <Link to="/" className='header-logo-link'>
                            <img src={LogoImage} />
                            </Link>
                        </div>
                        <nav className="header-nav">
                            <p className="palka">|</p>
                            <li className="btn-nav">
                                <Link to="/" >ГЛАВНАЯ</Link>
                            </li>
                            <li className="btn-nav">
                            <Link to="/catalog">КАТАЛОГ</Link>
                            </li>
                            <p className="palka">|</p>
                            <li className="btn-nav">
                                <a href="">ИНФОРМАЦИЯ</a>
                            </li>
                        </nav>
                    </div>
                    <div className="right">
                        <img src={SearchImage} />
                        <img src={CardImage} />
                        <img src={LikeImage} />
                    </div>
                </div>
            </div>
        </header>
    )
}