import axios from 'axios';

export const http = axios.create({
    baseURL: 'http://localhost:3000/',
    // headers: {
    //     'Content-Type': 'application/json;charset=UTF-8',
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    //     'Access-Control-Allow-Headers': '*'
    //   }
})