
import './App.css';

import DashbordPage from './pages/dashboard';
import BookingPage from './pages/booking';

import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
function App() {
  return (
    <Routes>
       <Route  index path="/" element={<DashbordPage />}>
     
      </Route>
      <Route index path="Dashbord" element={<DashbordPage />}>
         </Route>
         <Route index path="Cars" element={<BookingPage />} >
         </Route>
    </Routes>
  
  );
}

export default App;
