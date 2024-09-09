import React,{useState} from "react";
// import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


function Parking() {
  const[Inputs, setInputs] = useState('');
  const[data, setData] = useState([]);
  const navigate = useNavigate();

  const handlesubmit = (e) =>{
    e.preventDefault();
    setInputs('')

    const newdata = Array.from({length:Number(Inputs)}, (_,index) => (index + 1))

    const update = [...data, ...newdata]

    setData(update);

    navigate("/Parking_Lot", {state: {data: update}})



  }

    return ( 
    <>
    <div className="background_img">
     <div className="header">
    <br></br>
    <br></br>
      <h2><b>Enter Parking Space</b> </h2>
      
      <form onSubmit={handlesubmit}>
       <input className="text" 
     type="number"
      placeholder="Number"
      value={Inputs}
      onChange={(e) => setInputs(e.target.value)}
      ></input>
     <br></br>
     <div className="btn">
      
     <Button variant="contained" className="btn" type="submit">SET SPACE</Button>
    
      </div>

      </form>
     </div>
       </div>
 
    </>
    );
  }
  
  export default Parking;
  

// import Box from "@mui/material/Box";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import Button from "@mui/material/Button";
// import {useDispatch} from 'react-redux'
// import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";

// import { setspace } from "../Redux/Action/SpaceAction";


// function ParkingComponenet() {
//  const [inputval, setinputval] = useState('')
//  const navigate = useNavigate();
//  const Dispatch = useDispatch();


//  const handalOnsubmit =(event)=>{
//   event.preventDefault();
//   const spacesArray = Array.from({ length: Number(inputval) }, (_, index) => Space ${index + 1});
//   Dispatch(setspace(spacesArray));
//   console.log("clicked", spacesArray);
//     navigate('/ParkingLots')
// }

//   return (
//     <>
//       <Box className="Container">
//         <Box className="second-box" >
//           <form className="Box" onSubmit={handalOnsubmit}>
//             <h2>Enter Parking Space</h2>
//             <OutlinedInput
//               placeholder="Please enter text"
//               type="number"
//               value={inputval}
//               onChange={(e) => setinputval(e.target.value)}
//               sx={{ marginBottom: "20px", width: "80%" }}
//             />

            
//               <Button variant="contained" className="btn" type="submit">
//                 SET SPACE
//               </Button>
           
//           </form>
//         </Box>
//       </Box>
//     </>
//   );
// }
// export default ParkingComponenet;
