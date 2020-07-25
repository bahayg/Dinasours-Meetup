import React from 'react';

const BioInventoryForm = (props) => {
    return (
        <form>
            <label><b>Name:</b></label>
            <input type="text" name="name"></input><br/>
            <label><b>Observer:</b></label>
            <input type="text" name="observer"></input><br/>
            <label><b>Date:</b></label>
            <input type="text" name="date"></input><br/>
            <label><b>Place:</b></label>
            <input type="text" name="place"></input><br/>
            <input type="hidden" name="id" value={props.id}></input>
            <input type="submit"></input>
        </form>
    )
}

export default BioInventoryForm; 
