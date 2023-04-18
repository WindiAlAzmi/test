import React from "react";

const CardText = ({dataAll}) => {
    return (
        <div className="border gap-2 border-black absolute bg-white p-6 flex rounded-lg flex-col w-5/6 top-56 md:top-64">
          <h3 className="font-bold  text-lg text-orange-500">{dataAll.title}</h3>
          <p clasName="font-medium text-black text-base p-2">{dataAll.longText}</p>
          <div className="flex flex-row justify-between">
            <h4 className="text-black font-medium">Price :  {dataAll.price}</h4>
            <h4 className="text-gray-500 text-sm">{dataAll.variants}varients</h4>
          </div>
          <div className="flex flex-row items-center justify-center">
            <h4 className="font-bold text-black text-base">Add To Cart</h4>
          </div>
        </div>
    )
}
export default CardText;