import {useLocation} from "react-router-dom";
import React from "react";

import {img} from "../../config";

const PosterPreview = () => {

    const {state} = useLocation();
    const {poster_path, title} = state

    const link = (img + poster_path)

    return(
        <div>
            <img src={link} alt={title}/>
        </div>
    )
}

export {PosterPreview};