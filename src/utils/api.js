import axios from "axios";
const BASE_URL = 'https://youtube138.p.rapidapi.com'

const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://youtube138.p.rapidapi.com/auto-complete/',
  params: {
    q: 'desp',
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_KEY,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};
