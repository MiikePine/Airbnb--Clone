import Image from "next/image"


function Infocard({img, location, titel, star, price, total}) {
    return (
        <div>
            <div>
                <Image src={img} fill="fill" />
            </div>
        </div>
    )
}

export default Infocard