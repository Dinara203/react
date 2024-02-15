import Card from "../Card/Card";
import { catalog } from "../../data";

export default function Catalog (){
    return(
        <div className="card-content">
            {
                catalog.map((card) =>{
                    return(
                        <Card name={card.name} price={card.price}/>
                    )
                })
            }

                
        </div>

    )

   
}