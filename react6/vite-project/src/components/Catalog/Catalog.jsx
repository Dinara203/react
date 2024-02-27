import Card from "../Card/Card";
import { catalog } from "../../data";

export default function Catalog (){
    return(
        <div className="card-content">
            {
                catalog.map((card, index) =>{
                    return(
                        <Card key={index} {...card}/>
                    )
                })
            }

                
        </div>

    )

   
}