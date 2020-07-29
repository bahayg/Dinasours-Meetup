import React from 'react';
import BioInventory from './BioInventory';
import BioInventoryForm from './BioInventoryForm'
import './bioInventory.css'

const BioInventoryList = props => {

    const bioInvIterate = arr => {
        return arr.map((bioInventory, index) => {
            if (bioInventory.name === '') {
                return <BioInventoryForm key={index} id={bioInventory.id} handleSubmit={props.handleSubmit} />
            } else {
                return <BioInventory key={index} info={bioInventory} />
            }
        }) 
    }
    return (
        <div id="bioInvent">
            {bioInvIterate(props.arr)}
        </div>
    );
}

export default BioInventoryList;
