import React from 'react';
import BioInventory from './BioInventory';
import BioInventoryForm from './BioInventoryForm'

const BioInventoryList = props => {

    const bioInvIterate = arr => {
        return arr.map((bioInventory, index) => {
            if (bioInventory.name === '') {
                return <BioInventoryForm key={index} id={bioInventory.id} handleSubmit={props.handleSubmit} />
            } else {
                return <BioInventoryForm key={index} info={bioInventory} />
            }
        }) 
    }
    return (
        <div>
            {bioInvIterate(props.arr)}
        </div>
    );
}

export default BioInventoryList;
