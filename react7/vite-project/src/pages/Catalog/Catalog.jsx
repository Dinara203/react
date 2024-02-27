import Card from '../../components/Card/Card'
import { catalog } from "../../data";
import './Catalog.css'
import { useState } from 'react';


export default function CatalogPage(){
    const [query,setQuery]= useState("")

    function search (e){
        setQuery(e.target.value)
    }
    const filterdProducts = catalog.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))

    return(
        <>
       
        <div className="container">
            <div className="buttons-cont">
                <a href="" className="categor">Все</a>
                <a href="" className="categor">Топ</a>
                <a href="" className="categor">Низ</a>
                <a href="" className="categor">обувь</a>
            </div>
            <input type="search" onChange={search} name="search" placeholder='Поиск' className='search' />

            <div className="card-content">
            {
                filterdProducts.length ?
                
                filterdProducts.map((card, index) =>{
                    return(
                        <Card key={index} {...card}/>
                    )
                })
                :
                <h2>По запросу "{query}" ничего не найдено</h2>
            }

                
        </div>
        </div>
        </>
    )
}