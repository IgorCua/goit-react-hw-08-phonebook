import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = "https://64393e304660f26eb1ae0394.mockapi.io";
axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll', 
    
    async (_, thunkAPI) =>{
        console.log('fetchContacts')

        try{
            const response = await axios.get('/contacts');
            return response.data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',

    async (text, thunkAPI) => {
        const { name, number } = text;
        try{
            const response = await axios.post('/contacts', { name, number });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',

    async (id, thunkAPI) => {
        try{
            const response = await axios.delete(`/contacts/${id}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// export const toggleCompleted = createAsyncThunk(
//     'contacts/toggleCompleted',
//     async (contact, thunkAPI) => {
//         const response = axios.put()
//     }
// )


// export const register = async (credentials) => {
//     console.log(credentials)
//     try{
//         const response = await axios.post('/users/signup', credentials);
//         setAuthHeader(response.data.token);
//         console.log(setAuthHeader);
//         return response.data;
//     } catch (error) {
//         console.log(error.message)
//         // return thunkAPI.rejectWithValue(error.message);
//     }
// }