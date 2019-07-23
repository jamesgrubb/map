import React, { useEffect, useRef } from "react"

export const addMarker = links => map => {
  const infowindow = new window.google.maps.InfoWindow({
    content: `Cocacola`,
  })

  links.forEach((link, index) => {
    const marker = new window.google.maps.Marker({
      map,
      position: link.coords,
      label: `${index + 1}`,
      title: link.title,
      icon: link.image,
    })
    console.log(infowindow)

    marker.addListener("click", function() {
      infowindow.open(map, marker)
    })
  })
}

export default function Map({ options, onMount, className }) {
  const props = {
    ref: useRef(),
    className,
  }
  const onLoad = () => {
    const map = new window.google.maps.Map(props.ref.current, options)
    onMount && onMount(map)
  }

  useEffect(() => {
    if (!window.google) {
      const script = document.createElement("script")
      script.type = "text/javascript"
      script.src =
        `https://maps.google.com/maps/api/js?key=` +
        process.env.GOOGLE_MAPS_API_KEY
      const headScript = document.getElementsByTagName("script")[0]
      headScript.parentNode.insertBefore(script, headScript)
      script.addEventListener("load", onLoad)
      return () => script.removeEventListener("load", onLoad)
    } else onLoad()
  })

  return (
    <div
      {...props}
      style={{ height: "70vh", margin: "5vmin, 0", borderRadius: "2px" }}
    ></div>
  )
}

Map.defaultProps = {
  options: {
    center: {
      lat: 51.516,
      lng: -0.14707,
    },
    zoom: 5,
  },
}
