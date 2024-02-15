import './Catalog.css'
import Catalog from '../../components/Catalog/Catalog'

export default function CatalogPage(){

    return(
        <div className="container">
            <div className="buttons-cont">
                <a href="" className="categor">Все</a>
                <a href="" className="categor">Топ</a>
                <a href="" className="categor">Низ</a>
                <a href="" className="categor">обувь</a>
            </div>
           <Catalog/>
        </div>
    )
}