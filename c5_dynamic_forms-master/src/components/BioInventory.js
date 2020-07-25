import React from 'react';

const BioInventory = (props) => {
    const { name, observer, date, place } = props.info;
    return (
        <div id="bioInvent">
            <p><b>Name:</b> {name} <b>Observer:</b> {observer} <b>Date:</b> {date} <b>Place:</b> {place} </p>
        </div>
    )
}

export default BioInventory;