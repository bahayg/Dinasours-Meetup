import React from 'react';
import './bioInventory.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';

const BioInventoryForm = (props) => {
    return (
        <form id="bioForm">
            <TextField id="name" label="Name" variant="outlined" /> 
            <TextField id="observer" label="Observer" variant="outlined" /> <Divider />
            <TextField id="date" label="Date" variant="outlined" /> 
            <TextField id="place" label="Place" variant="outlined" /> <Divider />
            <TextField id="id" type="hidden" value={props.id} /> <Divider />
            <Button type="submit" variant="contained" color="secondary"> Submit </Button>
        </form>
    )
}

export default BioInventoryForm; 
