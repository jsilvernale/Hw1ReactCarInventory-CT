import React from 'react';
import { json } from 'stream/consumers';

let token = 'd44d47abb67edd7755eb63086ad235e183909d23a1304bb2'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://car-collection-db-ct-js.herokuapp.com/api/inventory`, {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://car-collection-db-ct-js.herokuapp.com/api/inventory`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to create new data on server')
        }
        return await response.json()
    },

    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://car-collection-db-ct-js.herokuapp.com/api/inventory${id}`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        return await response.json()
    },
    delete: async (id:string) => {
        const response = await fetch(`https://car-collection-db-ct-js.herokuapp.com/api/inventory${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(id)
        });
        return await response.json()
    }
}