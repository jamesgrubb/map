import React from "react"

const MapNav = props => {
  return (
    <li key={props.key} onClick={props.clicked}>
      <img src={props.logo} alt={props.alt} />
      {props.title}
    </li>
  )
}

export { MapNav }
