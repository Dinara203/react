import './Catalog.css'
import IMGCard from '../../../public/Catalog/img.png'
import IMGlike from '../../../public/Catalog/icon1.png'
import IMGcart from '../../../public/Catalog/icon2.png'
export default function Catalog(){

    return(
        <div className="container">
            <div className="buttons-cont">
                <a href="" className="categor">Все</a>
                <a href="" className="categor">Топ</a>
                <a href="" className="categor">Низ</a>
                <a href="" className="categor">обувь</a>
            </div>
            <div className="card-content">
                <div className="card">
                    <img src={IMGCard} alt="img" />
                    <div className="text-card">
                    Рубашка СВЭГ
                    </div>
                    <div className="price-icons">
                        <p className="price">9999 ₽</p>
                        <div className="icons">
                            <img src={IMGlike} alt="icon" />
                            <img src={IMGcart} alt="icon" />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={IMGCard} alt="img" />
                    <div className="text-card">
                    Рубашка СВЭГ
                    </div>
                    <div className="price-icons">
                        <p className="price">9999 ₽</p>
                        <div className="icons">
                            <img src={IMGlike} alt="icon" />
                            <img src={IMGcart} alt="icon" />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={IMGCard} alt="img" />
                    <div className="text-card">
                    Рубашка СВЭГ
                    </div>
                    <div className="price-icons">
                        <p className="price">9999 ₽</p>
                        <div className="icons">
                            <img src={IMGlike} alt="icon" />
                            <img src={IMGcart} alt="icon" />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}