import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {Favourites} from "./pages/Favourites";

function App() {
  return (
   <Routes>
     <Route path='/github-search' element={<Home />}/>
     <Route path='/github-search/favourites' element={<Favourites />}/>
   </Routes>
  );
}

export default App;
