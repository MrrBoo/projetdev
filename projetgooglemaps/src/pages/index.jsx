import axios from "axios"
import Link from "next/link"
import { useState } from "react"

export const getServerSideProps = async () => {
  const locations  = await axios.get("http://localhost:3000/api/locations")
  console.log(locations)

  const initialLocations = locations.data
  return {
    props: { initialLocations },
  }
}

const LocationsPage = ({ initialLocations }) => {
  const [locations] = useState(initialLocations)

  return (
    <ul className="flex flex-col gap-4 divide-y-2 divide-green-600">
      {locations.map(({ id, locationName, locationType, locationAddress, locationCity, locationCountry, starRating, price }) => (
        <li key={id} className="flex justify-center ">
          <Link href={`/locations/${id}/edit`} className="flex gap-2 py-1">
          
          <p className="font-bold">Nom du lieu : </p> {locationName}
          <br/>{locationType}
          <br/>{locationAddress}
          <br/>{locationCity}
          <br/>{locationCountry}
          <br/>{starRating}
          <br/>{price}
          <br/>
          
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default LocationsPage