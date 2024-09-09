// import React, { useState } from "react";
// import Button from '@mui/material/Button';
// import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from "@mui/material/DialogTitle";
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from "@mui/material/DialogActions";
// import TextField from '@mui/material/TextField';
// import MenuItem from '@mui/material/MenuItem';  
// import Select from '@mui/material/Select';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
// import { Typography } from "@mui/material";

// function Parking_Lot() {
//   const location = useLocation();
//   const data = location.state?.data || [];
//   const [open, setOpen] = useState(false);
//   const [PayOpen, setPayOpen] = useState(false);
//   const [inputText, setInputText] = useState("");
//   const [selectedSpace, setSelectedSpace] = useState([]);
//   const [savedSpace, setSavedSpace] = useState([]);
//   const [regNumber, setRegNumber] = useState([]);
//   const handleOnClick = () => {
//     setOpen(true);
//   };
//   const PayhandleOnClick = (index) => {
//     console.log(index)
    
//     setPayOpen(true);
//   };

//   const handleOnClose = () => {
//     setOpen(false);
//   };

//   const payhandleOnClose = () => {
    
//     setPayOpen(false);
//   };

//   const handleSave = () => {
//     console.log('Car Registration No:', inputText);
//     console.log('Selected Parking Spaces:', selectedSpace);
//     setSavedSpace((prevSavedSpace) => [...new Set([...prevSavedSpace, ...selectedSpace])]); // Merge new selections with existing ones
//     setInputText("");
//     setSelectedSpace([]);
//     setRegNumber(inputText)
//     handleOnClose();
//   };

//   const handleOnChange = (e) => {
//     setInputText(e.target.value);
//   };

//   const handleOptionOnChange = (e) => {
//     setSelectedSpace(e.target.value); // `value` is an array when using `Select` with `multiple`
//   };

//   const handleOnSubmit = (e) => {
//     e.preventDefault();
//     handleSave();
//   };
 

//   return (
//     <>
//       <div className="background_img">
//         <div className="header1">
//           <div className="Back">
//             <Link to="/Parking">
//               <Button variant="contained"><b>Go BACK</b></Button>
//             </Link>
//           </div>
//           <div className="lot">
//             <h1><b>Parking Lot</b></h1>
//           </div>
//           <div className="Register">
//             <Button variant="contained" color="success" className="bt" onClick={handleOnClick}><b>+ NEW CAR REGISTRATION</b></Button>
//           </div>
//         </div>

//         <Box
//           sx={{
//             display: 'flex',
//             flexWrap: 'wrap',
//             '& > :not(style)': {
//               m: 3,
//               width: 250,
//               height: 128,
//               color: 'white',
//               textAlign: 'center',
//               mt: 10,
//               ml: 10,
//               cursor: 'pointer'
//             },
//           }}
//         >
//           {data.map((space) => (
//             <Paper
//               key={space}
//               elevation={20}
//               sx={{ bgcolor: savedSpace.includes(space) ? 'green' : 'black' }}
             
//             >
//               <h1><b>Park {space}</b></h1>
//               { savedSpace.includes(space) && <Button onClick={(index)=>PayhandleOnClick(index)}>REGISTRATION</Button>}
//             </Paper>
//           ))}
//         </Box>
//       </div>
      
//       <Dialog sx={{ width: '300px', height: '500px', marginLeft: '600px', marginTop: '120px' }}
//         open={open} onClose={handleOnClose}
//       >
//         <form onSubmit={handleOnSubmit}>
//           <DialogTitle>
//             <b>{"Parking Space Form"}</b>
//           </DialogTitle>
//           <DialogContent>
//             <FormControl sx={{ width: '180px', overflow: 'hidden' }}>
//               <InputLabel>Select Parking Spaces</InputLabel>
//               <Select
//                 multiple
//                 value={selectedSpace}
//                 onChange={handleOptionOnChange}
//                 renderValue={(selected) => selected.join(', ')}
//                 variant="standard"
//               >
//                 {data.map((option) => (
//                   <MenuItem key={option} value={option}>
//                     {option}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>

//             <TextField
//               label="Car Registration No."
//               variant="standard"
//               value={inputText}
//               onChange={handleOnChange}
//               fullWidth
//               margin="normal"
//             />
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleOnClose}><b>Cancel</b></Button>
//             <Button type="submit"><b>Save</b></Button>
//           </DialogActions>
//         </form>
//       </Dialog>

        
//       <Dialog sx={{ width: '300px', height: '500px', marginLeft: '600px', marginTop: '120px' }}
//         open={PayOpen}  onClose={payhandleOnClose}
//       >
  
//           <DialogTitle>
//             <b>{"UNRagistation Car"}</b>
//           </DialogTitle>
//           <DialogContent>
//            <Typography><b>RAGISTATION No.{regNumber}</b></Typography>
//            <Typography><b>YOER PARKING TIME</b></Typography>
//            <Typography><b>YOUR PARKING Fee</b></Typography>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={payhandleOnClose}><b>Cancel</b></Button>
//             <Button type="Payment"><b>Payment</b></Button>
//           </DialogActions>
//       </Dialog>
//     </>
//   );
// }

// export default Parking_Lot;
import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Dialog from '@mui/material/Dialog';
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from '@mui/material/DialogContent';
import DialogActions from "@mui/material/DialogActions";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';  
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Typography } from "@mui/material";

function Parking_Lot() {
  const location = useLocation();
  const data = location.state?.data || [];
  const [open, setOpen] = useState(false);
  const [PayOpen, setPayOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [selectedSpace, setSelectedSpace] = useState([]);
  const [savedSpace, setSavedSpace] = useState([]);
  const [spaceToRegNumberMap, setSpaceToRegNumberMap] = useState({});
  const [spaceToTimeMap, setSpaceToTimeMap] = useState({});
  const [currentSpace, setCurrentSpace] = useState(null);
  const [currentRegistration, setCurrentRegistration] = useState("");
  const [currentRegistrationTime, setCurrentRegistrationTime] = useState(null);

  useEffect(() => {
    let interval;
    if (PayOpen && currentRegistrationTime) {
      interval = setInterval(() => {
        setCurrentRegistrationTime(prev => new Date(prev)); // Update current time
      }, 1000); // Update every second
    }
    return () => clearInterval(interval); // Cleanup on unmount or when PayOpen changes
  }, [PayOpen, currentRegistrationTime]);

  const handleOnClick = () => {
    setOpen(true);
  };

  const PayhandleOnClick = (space) => {
    setCurrentSpace(space);
    setCurrentRegistration(spaceToRegNumberMap[space] || "Not Registered");
    setCurrentRegistrationTime(spaceToTimeMap[space] || new Date()); // Set current time if not found
    setPayOpen(true);
  };

  const handleOnClose = () => {
    setOpen(false);
  };

  const payhandleOnClose = () => {
    setPayOpen(false);
  };

  const handleSave = () => {
    if (!inputText || selectedSpace.length === 0) {
      alert("Please fill in the car registration number and select parking spaces.");
      return;
    }

    console.log('Car Registration No:', inputText);
    console.log('Selected Parking Spaces:', selectedSpace);

    // Save the selected spaces and registration number
    setSavedSpace((prevSavedSpace) => [...new Set([...prevSavedSpace, ...selectedSpace])]);

    // Update the mapping of spaces to registration numbers and registration times
    const newSpaceToRegNumberMap = { ...spaceToRegNumberMap };
    const newSpaceToTimeMap = { ...spaceToTimeMap };
    
    const now = new Date(); // Current time
    
    selectedSpace.forEach(space => {
      newSpaceToRegNumberMap[space] = inputText;
      newSpaceToTimeMap[space] = now;
    });
    
    setSpaceToRegNumberMap(newSpaceToRegNumberMap);
    setSpaceToTimeMap(newSpaceToTimeMap);

    setInputText("");
    setSelectedSpace([]);
    handleOnClose();
  };

  const handleOnChange = (e) => {
    setInputText(e.target.value);
  };

  const handleOptionOnChange = (e) => {
    setSelectedSpace(e.target.value); // `value` is an array when using `Select` with `multiple`
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleSave();
  };

  const getElapsedTime = (startTime) => {
    if (!startTime) return { minutes: 0, seconds: 0 };
    
    const start = new Date(startTime);
    const now = new Date();
    const elapsedMs = now - start;
    
    const elapsedSeconds = Math.floor(elapsedMs / 1000);
    const minutes = Math.floor(elapsedSeconds / 60);
    const seconds = elapsedSeconds % 60;

    return { minutes, seconds };
  };

  const calculateParkingFee = (startTime) => {
    if (!startTime) return 0;

    const { minutes } = getElapsedTime(startTime);
    const hours = Math.ceil(minutes / 60); // Round up to the nearest hour
    return hours * 5; // $5 per hour
  };

  const handlePayment = () => {
    // Perform payment logic here (e.g., call an API, update state, etc.)
    console.log('Payment successful');

    // Clear the parking data
    const updatedSavedSpace = savedSpace.filter(space => space !== currentSpace);
    setSavedSpace(updatedSavedSpace);

    // Remove the space from the registration and time maps
    const newSpaceToRegNumberMap = { ...spaceToRegNumberMap };
    const newSpaceToTimeMap = { ...spaceToTimeMap };
    
    delete newSpaceToRegNumberMap[currentSpace];
    delete newSpaceToTimeMap[currentSpace];
    
    setSpaceToRegNumberMap(newSpaceToRegNumberMap);
    setSpaceToTimeMap(newSpaceToTimeMap);

    // Close the payment dialog
    payhandleOnClose();
  };

  return (
    <>
      <div className="background_img">
        <div className="header1">
          <div className="Back">
            <Link to="/Parking">
              <Button variant="contained"><b>Go BACK</b></Button>
            </Link>
          </div>
          <div className="lot">
            <h1><b>Parking Lot</b></h1>
          </div>
          <div className="Register">
            <Button variant="contained" color="success" className="bt" onClick={handleOnClick}><b>+ NEW CAR REGISTRATION</b></Button>
          </div>
        </div>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 3,
              width: 250,
              height: 128,
              color: 'white',
              textAlign: 'center',
              mt: 10,
              ml: 10,
              cursor: 'pointer'
            },
          }}
        >
          {data.map((space) => (
            <Paper
              key={space}
              elevation={20}
              sx={{ bgcolor: savedSpace.includes(space) ? 'green' : 'black' }}
            >
              <h1><b>Park {space}</b></h1>
              { savedSpace.includes(space) && (
                <Button onClick={() => PayhandleOnClick(space)}>REGISTRATION</Button>
              )}
            </Paper>
          ))}
        </Box>
      </div>
      
      <Dialog
        sx={{ width: '300px', height: '500px', marginLeft: '600px', marginTop: '120px' }}
        open={open} onClose={handleOnClose}
      >
        <form onSubmit={handleOnSubmit}>
          <DialogTitle>
            <b>{"Parking Space Form"}</b>
          </DialogTitle>
          <DialogContent>
            <FormControl sx={{ width: '180px', overflow: 'hidden' }}>
              <InputLabel>Select Parking Spaces</InputLabel>
              <Select
                multiple
                value={selectedSpace}
                onChange={handleOptionOnChange}
                renderValue={(selected) => selected.join(', ')}
                variant="standard"
              >
                {data.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Car Registration No."
              variant="standard"
              value={inputText}
              onChange={handleOnChange}
              fullWidth
              margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleOnClose}><b>Cancel</b></Button>
            <Button type="submit"><b>Save</b></Button>
          </DialogActions>
        </form>
      </Dialog>

      <Dialog
        sx={{ width: '300px', height: '500px', marginLeft: '600px', marginTop: '120px' }}
        open={PayOpen} onClose={payhandleOnClose}
      >
        <DialogTitle>
          <b>{"UNREGISTER Car"}</b>
        </DialogTitle>
        <DialogContent>
          <Typography><b>REGISTRATION No.: {currentRegistration}</b></Typography>
          <Typography><b>YOUR PARKING SPACE: {currentSpace}</b></Typography>
          <Typography>
            <b>
              YOUR PARKING TIME: {getElapsedTime(currentRegistrationTime).minutes} minutes {getElapsedTime(currentRegistrationTime).seconds} seconds
            </b>
          </Typography>
          <Typography><b>YOUR PARKING Fee: ${calculateParkingFee(currentRegistrationTime)}</b></Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={payhandleOnClose}><b>Cancel</b></Button>
          <Button onClick={handlePayment}><b>Payment</b></Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Parking_Lot;
