import React from 'react';

const BioInventory = (props) => {
    const { name, observer, date, place } = props.info;
    return (
        <div id="bioInvent">
            <p>Name: {name} Observer: {observer} Date: {date} Place: {place} </p>
        </div>
    )
}

export default BioInventory;