import React, { useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import { useFetchData } from '../../CustomHooks';
import { AddCarForm } from '../AddCarForm'
import { server_calls } from '../../api';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';


const columns: GridColDef[] = [
    { field: 'make', headerName: 'Make', width: 150 },
    { field: 'model', headerName: 'Model', width: 150 }, 
    { field: 'year', headerName: 'Year',  width: 150 },
    { field: 'color', headerName: 'Color', width: 150 }
];

interface gridData {
    data: {
        id?: string
    }
}

const rows = [
    { id: 1, make: 'Hyundai', model: 'Genesis', year: '2021', color: 'black '},
    { id: 2, make: 'Toyota', model: 'Tacoma', year: '2020', color: 'silver'}, 
    { id: 3, make: 'Ford', model: 'Mustang', year: '1964', color: 'yellow'}, 
    { id: 4, make: 'Dodge', model: 'Challenger', year: '2022', color: 'red'},
];

export const DataTable = () => {

    let { inventoryData, getData } = useFetchData();
    let [ open, setOpen ] = useState(false);
    let [ gridData, setData ] = useState<gridData>({data:{}})
    const [ selectionModel, setSelectionModel ] = useState<any>([])

    let handleOpen = () => {
        setOpen(true)
    };

    let handleClose = () => {
        setOpen(false)
    };

    let deleteData = () => {
        server_calls.delete(selectionModel);
        getData();
        setTimeout( () => {window.location.reload(); }, 1000)
    }

    return (
        <div style={{ height: 400, width: '100%'}}>
            <DataGrid rows={inventoryData} columns={columns} pageSize={5} checkboxSelection={true} onSelectionModelChange = { (item) => {
                setSelectionModel(item) }} />
            <Button onClick={handleOpen}>Update Car</Button>
            <Button variant='contained' color='secondary' onClick={deleteData}>Delete Car</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                <DialogTitle id='form-dialog-title'>Update your car {selectionModel}</DialogTitle>
                <DialogContent>
                    <DialogContentText>Lets Change Some Things</DialogContentText>
                    <AddCarForm id={selectionModel!}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color='primary'>Nevermind</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
