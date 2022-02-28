import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { Input } from '../sharedComponents/Input'
import { Button } from '@material-ui/core';
import { chooseMake } from '../../redux/slices/rootSlice'
import { server_calls } from '../../api';
import { useFetchData } from '../../CustomHooks';

interface InventoryFormProps {
    id?: string;
    data?: {}
}

interface InventoryState {
    make: string;
    model: string;
    year: string;
    color: string;
}

export const AddCarForm = (props: InventoryFormProps) => {
    const dispatch = useDispatch();
    let { inventoryData, getData } = useFetchData();
    const store = useStore();
    const name = useSelector<InventoryState>(state => state.make);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data:any, event:any) => {
        console.log(data)
        
        if(props.id!){
            server_calls.update(props.id!, data)
            console.log(`Updated: ${data} ${props.id}`)
            console.log(data);
            window.location.reload();
            event.target.reset();
        } else {
            dispatch(chooseMake(data.make))
            server_calls.create(store.getState())
            window.location.reload()
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor='make'>Car Make</label>
                    <Input {...register('make')} name='make' placeholder='Make'/>            
                </div>
                <div>           
                    <label htmlFor='model'>Car Model</label>
                    <Input {...register('model')} name='model' placeholder='Model'/>            
                </div>
                <div>           
                    <label htmlFor='year'>Car Year</label>
                    <Input {...register('year')} name='year' placeholder='Year'/>          
                </div>
                <div>            
                    <label htmlFor='color'>Car Color</label>
                    <Input {...register('color')} name='color' placeholder='Color'/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}
    
