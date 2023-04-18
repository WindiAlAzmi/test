import React from "react";
import CardText from "./CardText";
import cardLike from "./../assets/like.svg";

const Card = ({dataAll}) => {

    return (
        <div className="md:w-2/6 lg:w-[25%] items-center md:mb-20 mb-44 justify-center p-3 flex flex-col relative">
           <div className="flex flex-row absolute right-6 top-10 md:top-20 ">
            <img src={cardLike} alt="like" />
           </div>
           <div className=" md:h-72 rounded-lg">
             <img src={dataAll.gmbrCard} alt="img ke-1" className="h-full" />
           </div>
           <CardText dataAll={dataAll}/>
        </div>
    )
}

export default Card;