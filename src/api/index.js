import axios from 'axios';
import {useState, useEffect} from 'react';


function DataFetching() {
const [data, setData] = useState([]);

useEffect ( () => {
    axios.get ('https://covid19.mathdro.id/api')
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}

// const fetchData = async () => {
//     try {
//     const responce = await axios.get(url);
//     return responce;
//     } catch (error)

}

export default DataFetching;