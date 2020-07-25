import React from 'react';

const BioInventoryForm = (props) => {
    return (
        <form>
            <label>Name:</label>
            <input type="text" name="name"></input>
            <label>Observer:</label>
            <input type="text" name="observer"></input>
            <label>Date:</label>
            <input type="text" name="date"></input>
            <label>Place:</label>
            <input type="text" name="place"></input>
            <input type="hidden" name="id" value={props.id}></input>
            <input type="submit"></input>
        </form>
    )
}

export default BioInventoryForm; 
