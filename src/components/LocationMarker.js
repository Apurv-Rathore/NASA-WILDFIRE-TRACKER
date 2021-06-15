import React from 'react'
import {Icon} from "@iconify/react"
import locationIconFire from "@iconify/icons-mdi/fire-alert"
import locationIconStorm from "@iconify/icons-mdi/weather-lightning-rainy"


const LocationMarker = ({lat,lng,onClick,type}) => {
    return (
        <div className="location-marker" onClick={onClick}>

            <Icon icon={type===8?locationIconFire:locationIconStorm} className={`location-icon${type}`}></Icon>
        </div>
    )
}
export default LocationMarker;
