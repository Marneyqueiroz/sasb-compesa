import { Icon } from "@iconify/react";
import DamIcon from "@iconify/icons-flat-color-icons/dam";
import { useState } from "react";


const Marker = ({text}) => {

    const [widht, setWidht] = useState("15%");

    return (
        <div className="marker">
            <Icon
                icon={DamIcon}
                width={widht}
                onMouseEnter={() => setWidht("20%")}
                onMouseLeave={() => setWidht("15%")}
                onClick={() => {}}
            />
            <p className="marker-text">{text}</p>
        </div>
    )
}

export default Marker;
