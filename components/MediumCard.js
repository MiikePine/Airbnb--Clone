import Image from "next/image"


function MediumCards ({img, title}) {
    return (
        <div className="cursor-pointer hover:scale-105 transform duration-300 ease-out">
            <div className="relative h-80 w-80 ">
                <Image  src={img} fill="fill" alt="img" className="rounded-xl"/>
            </div>
            <h3 className="text-2xl mt-3 ">{title}</h3>
        </div>
    )

}

export default MediumCards