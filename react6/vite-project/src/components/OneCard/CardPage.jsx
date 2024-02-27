import './CardPage.css'
import { catalog } from '../../data'
import { useParams } from 'react-router-dom'
import CardImage from '../../../public/Catalog/img.png'
import LikeImage from '../../../public/Catalog/icon1.png'

export default function CardPage (){
    console.log("here")

    const {id} = useParams();
    const product = catalog.find(product => product.id === parseInt(id))
    return(
        <>
         <div className="one-card">
            <div className="container">
                <div className="links">
                    <p className="text">Главная\Каталог\{product.name}</p>
                </div>
                <div className="one-card-content">
                    <img src={CardImage} alt="" />
                    <div className="one-card-inf">
                        <div className="name-price">
                            <p className="name">{product.name}</p>
                            <p className="price col">{product.price} ₽</p>
                        </div>  
                        <select>
                            <option>Черный</option>
                            <option>Белый</option>
                        </select>    
                        <select>
                            <option>S</option>
                            <option>M</option>
                        </select>     
                        <div className="btn-like">
                            <div className="to-bag">ДОБАВИТЬ В КОРЗИНУ</div>
                            <img src={LikeImage} alt="" />
                        </div>  
                        <p className="text">{product.text}</p>            
                    </div>
                </div>
            </div>
        </div>
        </>

        )
    }