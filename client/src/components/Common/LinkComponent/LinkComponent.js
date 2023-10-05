import React from "react";
import { Link } from 'react-router-dom';

const LinkComponent = ({ title, type, href }) => {
    return (
        <li className={`${type}-item`}>
            <Link to={href} className={`${type}-link`}>
                {title}
            </Link>
        </li>
    )
}

export default LinkComponent;