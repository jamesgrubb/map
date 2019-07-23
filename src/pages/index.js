import React from "react"
import Map, { addMarker } from "../components/Map/Map"
import mapStyles from "../utils/mapStyles"

const links = [
  {
    coords: {
      lat: 51.516,
      lng: -0.14707,
    },
    title: "Marker Title",
    image:
      "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
  },
]

export default () => {
  const mapProps = {
    options: {
      center: { lat: 51.516, lng: -0.14707 },
      zoom: 16,
      zoomControl: false,
      streetViewControl: false,
      mapTypeControl: false,
      styles: mapStyles,
    },
    onMount: addMarker(links),
  }
  return (
    <div>
      <Map {...mapProps} />
    </div>
  )
}
