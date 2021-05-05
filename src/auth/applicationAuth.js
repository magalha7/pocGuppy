const axios = require('axios');
const token = "1c3ce6b8251d91c1112aa11d1ef2daa1";

const instance = axios.create({
    baseURL:'https://api.gupy.io/api/v1',
    timeout:1000,
    headers:{'Authorization': 'Bearer '+token}
})

module.exports = instance;