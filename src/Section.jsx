import React from "react";

const Section = ({image, icon, title, text, reverse}) => {
    return(
        <>
        <div className={`px-30 gap-5 flex items-center justify-between bg-gray-100 ${reverse ? "flex-row-reverse" : "flex-row"}`}>

            <div className="flex-[2]">
            <img src={image} alt=""></img>
            </div>

            <div className="flex-[1]">
            <div className="gap-3 mb-4">
                <img src={icon} alt="icon" className="w-20 h-20"></img>
                <h2 className="text-3xl font-bold">{title}</h2>
            </div>
            <p className="mt-2">{text}</p>
            </div>
        </div>
        </>
    )
}

export default Section