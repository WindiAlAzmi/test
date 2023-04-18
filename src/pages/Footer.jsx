import React from "react";



const MiniTitle = ({datas}) => {
    return (
      <div className="flex flex-col text-left gap-2  text-black">
        <h3 className="text-lg font-bold md:mb-8 mb-4">{datas.title}</h3>
        <h4 className="text-base font-semibold">{datas.arrayData.data1}</h4>
        <h4 className="text-base font-semibold">{datas.arrayData.data2}</h4>
        <h4 className="text-base font-semibold">{datas.arrayData.data3}</h4>
      </div>
    );
}
const BigTitle = () => {
    return (
      <div className="flex flex-col gap-10 text-black">
        <h3 className="text-2xl font-bold">Furniture</h3>
        <h3 className="text-lg font-base font-semibold">Copyright © 2023 Furnit</h3>
      </div>
    );
}
const Footer = () => {
    const dataMiniTitle = [
        {id:'1', title:'Company', arrayData:{
        data1:'quality work', data2:'contact us', data3:'service'}

        },
          {id:'2', title:'Support', arrayData:{
        data1:'status', data2:'legal', data3:'center'}

        },

    ]
    return <div className="flex flex-wrap p-8  flex-col gap-10 md:gap-0 text-black md:flex-row justify-between">
        <BigTitle/>
        <div className="flex flex-row gap-20 justify-between">
          {dataMiniTitle.map((dt) => {
            return <MiniTitle datas={dt}/>;
         })}
        
        </div>
    </div>;
}

export default Footer;