import React from "react";

const LiCheckComponent = ({ title, type }) => {
    let checked = (
        <li className="check">
            <span className="ion-ios-checkmark"></span><span><span>&#10003;</span></span> {title}
        </li>
    )
    let uncheck = (
        <li className="remove">
            <span className="ion-ios-close"></span><span><span>&#10060;</span></span> {title}
        </li>
    )
    return (
        <div>
            {type ? checked : uncheck}
        </div>
    )
}

export default LiCheckComponent;