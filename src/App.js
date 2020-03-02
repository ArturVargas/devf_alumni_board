import React from 'react';

import Navbar from "./components/Navbar";
import BatchCards from "./components/BatchCards";
import { people } from "./assets/alumni";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BatchCards persons={ people }/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
