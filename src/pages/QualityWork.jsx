import React from "react";


const CountComponent = ({datas}) => {
    return (
        <div className=" w-1/2  text-left flex flex-col  text-black">
            <h3 className="text-lg font-bold">{datas.count}</h3>
            <h3 className="text-base">{datas.title}</h3>
        </div>
    )
}

const QualityWork = () => {
    const dataCount = [
      { id: "1", count: "10,000+", title: "review" },
      { id: "2", count: "500+", title: "clients" },
      { id: "3", count: "2 Million", title: "users" },
      { id: "4", count: "140", title: "countries" },
    ];
    return (
      <div
        className="justify-between md:mt-10 bg-orange-500/75 p-10 items-center flex md:flex-row gap-8 md:gap-0 flex-col bg-[background: #FFF3D880]"
      >
        <div className=" flex md:w-1/2 w-full flex-col gap-2 text-left">
          <h3 className="font-semibold text-base text-black">
            Quality Our Work
          </h3>
          <h3 className="font-bold text-3xl text-black md:w-1/2 w-full">
            Milestones that we proudly accomplished & lead Us Forward.
          </h3>
          <h3 className="font-semibold text-base text-black">
            With our super powers we have reached this
          </h3>
        </div>
        <div className=" flex flex-row md:w-1/2 w-full flex-wrap">
          {dataCount.map((dt) => {
            return <CountComponent datas={dt} />;
          })}
        </div>
      </div>
    );
}

export default QualityWork;