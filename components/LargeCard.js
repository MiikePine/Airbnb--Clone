
import Image from "next/image"

function LargeCard ({img, title, description, buttonText}) {
    return (
        <section className="relative py-16 ">
            <div className="relative h-96 min-w-[300px]">
                <Image src={img} width={1200} height={200} alt="img3" style="cover" className="rounded-2xl" />
            </div>


            <div className="absolute top-32 left-12 ">
                <h3 className="text-4xl mb-3 w-64 ">{title}</h3>
                <p>{description}</p>

                <button className="text-sm text-white bg-gray-900 py-2 px-4 rounded-lg mt-5 hover:scale-95 active:scale-95 active:bg-gray-900
        transition transform duration-100 ease-out">{buttonText}</button>
            </div>
        </section>
    )
}


export default LargeCard