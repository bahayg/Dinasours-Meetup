import React from 'react';

const BioInventory = (props) => {
    const { name, observer, date, place, id } = props.info;
    return (
        <div id="bioInvent">
            <p><b>{id}:</b>  <b>Name:</b> {name} <b>Observer:</b> {observer} <b>Date:</b> {date} <b>Place:</b> {place} </p>
        </div>
    )
}

export default BioInventory;