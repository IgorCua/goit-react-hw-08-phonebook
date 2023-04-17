import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const setAuthHeader = token => {
    // axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
    'auth/register',
    
    async (credentials, thunkAPI) => {
        try{
            const response = await axios.post('/users/signup', credentials);
            console.log('response ',response.data);
            setAuthHeader(response.data.token);
            console.log(setAuthHeader)
            return response.data;
        } catch (error) {
            // console.log('log ', error.message)
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logIn = createAsyncThunk(
    'auth/logIn',

    async (credentials, thunkAPI) => {
        console.log('logIn ', credentials);
        try{
            const response = await axios.post('users/login', credentials);
            console.log('logIn response ', response.data);
            setAuthHeader(response.data.token);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logOut = createAsyncThunk(
    'auth/logOut',

    async (_, thunkAPI) => {
        try{
            await axios.post('/users/logout');
            clearAuthHeader();
        } catch (error){
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;
        
         if (persistedToken === null) {
             throw new Error("token == 0")
            } 
        try{               
            setAuthHeader(persistedToken);
            console.log('refresh response')
            const response = await axios.get('/users/current');
            if (response === "") {
                throw new Error("token == 0")
                } 
            return response.data;
        } catch (error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

// export const refreshUser = createAsyncThunk(
//        'auth/refresh',
        
//     async (_, {rejectWithValue, getState}) => {
//         try {
//             const {auth} = getState();
//             const result = await 
            
//         } catch (error) {
            
//         }
//     }
//     )