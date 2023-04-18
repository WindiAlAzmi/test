import React from "react";
import Card from "../components/Card";
import cardimg1 from "./../assets/card1.svg";
import cardimg2 from "./../assets/card2.svg";
import cardimg3 from "./../assets/card3.svg";

const Product = () => {
    const dataCard = [
      {
        id: "1",
        gmbrCard: `${cardimg1}`,
        title: "Halowen",
        longText: "lorem ipusmn gergr",
        price: "20 $",
        variants: "2",
      },
      {
        id: "2",
        gmbrCard: `${cardimg2}`,
        title: "Halowen",
        longText: "lorem ipusmn gergr",
        price: "20 $",
        variants: "2",
      },
      {
        id: "3",
        gmbrCard: `${cardimg3}`,
        title: "Halowen",
        longText: "lorem ipusmn gergr",
        price: "20 $",
        variants: "2",
      },
      {
        id: "4",
        gmbrCard: `${cardimg1}`,
        title: "Halowen",
        longText: "lorem ipusmn gergr",
        price: "20 $",
        variants: "2",
      },
      {
        id: "5",
        gmbrCard: `${cardimg2}`,
        title: "Halowen",
        longText: "lorem ipusmn gergr",
        price: "20 $",
        variants: "2",
      },
      {
        id: "6",
        gmbrCard: `${cardimg3}`,
        title: "Halowen",
        longText: "lorem ipusmn gergr",
        price: "20 $",
        variants: "2",
      },
    ];
    return (
      <div className="md:mb-20 mb-10 flex flex-col items-center">
        <div className="border-2 text-center mb-10 justify-center flex items-center flex-row w-[200px] border-white border-b-orange-500">
          <h3 className="font-bold text-2xl">Our Product</h3>
        </div>
        <div className="flex md:flex-row justify-around md:mb-80 md:gap-28 flex-wrap w-full p-4">
          {dataCard.map((dt) => {
            return <Card dataAll={dt} />;
          })}
        </div>
        <div className="w-full md:-mt-40 mt-30 flex flex-row justify-center items-center ">
          <button className="bg-orange-500 text-white font-bold p-3 text-xl rounded-full">Load More</button>
        </div>
      </div>
    );
}

export default Product;