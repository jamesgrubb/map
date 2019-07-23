import React from "react"
import Map, { addMarker } from "../components/Map/Map"
import mapStyles from "../utils/mapStyles"
import { graphql } from "gatsby"

export default ({ data }) => {
  console.log(data)

  const mapProps = {
    options: {
      center: { lat: 51.516, lng: -0.14707 },
      zoom: 16,
      zoomControl: false,
      streetViewControl: false,
      mapTypeControl: false,
      styles: mapStyles,
    },
    onMount: addMarker(data.allAirtable.edges),
  }
  return (
    <div>
      <Map {...mapProps} />
    </div>
  )
}

export const query = graphql`
  query HomePageQuery {
    allAirtable {
      edges {
        node {
          data {
            lng
            lat
            Name
            Attachment {
              url
            }
          }
        }
      }
    }
  }
`
