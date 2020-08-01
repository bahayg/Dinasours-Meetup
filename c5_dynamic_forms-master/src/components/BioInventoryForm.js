import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const BioInventoryForm = (props) => {
    return (
        <form onSubmit={(event) => props.handleSubmit(event)}>
            <TextField id="name" label="Name" variant="outlined" /> <br/>
            <TextField id="observer" label="Observer" variant="outlined" /> <br/>
            <TextField id="date" label="Date" variant="outlined" /> <br/>
            <TextField id="place" label="Place" variant="outlined" /> <br/>
            <TextField id="id" type="hidden" value={props.id} />
            <Button type="submit" variant="contained" color="secondary"> Submit </Button> <br/>
        </form>
    )
}

export default BioInventoryForm; 
