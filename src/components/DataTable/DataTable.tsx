import React, { useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
// import { useGetData } from '../../custom-hooks';

const columns: GridColDef[] = [
    { field: 'make', headerName: 'Make', width: 150 },
    { field: 'model', headerName: 'Model', width: 150 }, 
    { field: 'year', headerName: 'Year',  width: 150 },
    { field: 'color', headerName: 'Color', width: 150 }
];

const rows = [
    { id: 1, make: 'Hyundai', model: 'Genesis', year: '2021', color: 'black '},
    { id: 2, make: 'Toyota', model: 'Tacoma', year: '2020', color: 'silver'}, 
    { id: 3, make: 'Ford', model: 'Mustang', year: '1964', color: 'yellow'}, 
    { id: 4, make: 'Dodge', model: 'Challenger', year: '2022', color: 'red'},
];

export const DataTable = () => {
    return (
        <div style={{ height: 400, width: '100%'}}>
            <h1>Car Collection</h1>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
    )
}
