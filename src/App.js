import './App.css';
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";

import { DataFetching } from "./api";




function App() {


  return (

    <>
    <div className="container">


     <h1>Covid-19</h1>
      <ul>
     [posts.map(post => (
       <li key= {post.id}> {post.title}</li>
     ))]

    </ul>

      <Cards />
      <Chart />
      <CountryPicker />

    </div>
    </>
  );
}

export default App;
