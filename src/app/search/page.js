

import { useRouter } from "next/navigation"
import Footer from "../../../components/Footer"
import Header from "../../../components/Header"
import { useSearchParams } from 'next/navigation'
import Infocard from "../../../components/InfoCard";

function page ({data}) {
const router = useRouter();


const paramsValues = useSearchParams()

    return (
        <div>
            <Header placeholder={paramsValues.get('location') || paramsValues.get('noOfGuests')} />
<main className="flex"> 
        <section className="flex-grow pt-14 px-6 ">
            <p className="text-xs "> 300+ Stays for {paramsValues.get('noOfGuests')} number of Guests</p>
            <h1 className="text-3xl font-semibold mt-2 mb-6"> Stays in {paramsValues.get('location')}  </h1>


            <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                <p className="button">Cancellation Flexibity</p>
                <p className="button">Type of Place</p>
                <p className="button">Price</p>
                <p className="button">Rooms and Beds</p>
                <p className="button">More Filters</p>
            </div>
                <div className="flex flex-col">
                            {data.map(
                                ({img, location, title, description, star, price, total}) => (
                        <Infocard 
                                key={img} 
                                img={img}
                                location={location}
                                title={title}
                                description={description}
                                star={star}
                                price={price}
                                total={total}
                        />
                            ))}
                            </div>
        </section>

</main>

        <Footer/>
        </div>
    )}

async function getData() {
    const res = await fetch('https://www.jsonkeeper.com/b/5NPS')

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   
  export default async function Page() {
    const data = await getData()
   
    return <main>{(data)}</main>;
   
}