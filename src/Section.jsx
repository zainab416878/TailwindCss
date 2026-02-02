import React from "react";

const Section = ({image, icon, title, text, reverse}) => {
    return(
        <>
        <div className={`flex px-10 py-10 items-center bg-gray-100 ${reverse ? "flex-row-reverse" : "flex-row"}`}>

            <div className="w-1/2">
            <img src={image} alt="" className="w-full"></img>
            </div>

            <div className="w-1/2">
            <div className="gap-3 mb-4">
                <img src={icon} alt="icon" className="w-30 h-30"></img>
                <h2 className="text-3xl font-bold">{title}</h2>
            </div>
            <p className="mt-2">{text}</p>
            </div>
        </div>
        </>
    )
}

export default Section