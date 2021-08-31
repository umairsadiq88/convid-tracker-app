import React, {useState} from 'react'
// import { Cards, Chart, CountryPicker } from './Components';

import Navbar from './Components/Navbar'
import InfoPanel from './Components/InfoPanel'
import FootNav from './Components/FootNav';


const App = () => {
  const screenConfig = useState(0);

  return (
    <div>

      <Navbar />
      <infoPanel />
<FootNav />
      {/* <Cards /> */}
      {/* <CountryPicker />
      <Chart /> */}

    </div>
  )
}


export default App;

