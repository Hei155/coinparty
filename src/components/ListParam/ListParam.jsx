import React from "react";

const ListParam = (props) => {
    const [isClicked, setIsClicked] = React.useState(false);
    function onDateSelect() {
        props.onDateReset();
        if (props.onDateReset()) {
            setIsClicked(true);
        } else {
            setIsClicked(false);
        }
    }
    return (
        <li onClick={onDateSelect} className={isClicked && !props.isReset ? "portfolio__date portfolio__date_select" : "portfolio__date"}>{props.el}</li>
    )
}

export default ListParam;