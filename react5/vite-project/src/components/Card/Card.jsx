import IMGCard from '../../../public/Catalog/img.png'
import IMGlike from '../../../public/Catalog/icon1.png'
import IMGcart from '../../../public/Catalog/icon2.png'
export default function Card({name,price}){

    return(
            <div className="card">
                    <img src={IMGCard} alt="img" />
                    <div className="text-card">
                    {name}
                    </div>
                    <div className="price-icons">
                        <p className="price">{price} ₽</p>
                        <div className="icons">
                            <img src={IMGlike} alt="icon" />
                            <img src={IMGcart} alt="icon" />
                        </div>
                    </div>
            </div>
    )
}