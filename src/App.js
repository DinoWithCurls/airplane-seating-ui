import React, {useState, useEffect} from 'react'
import TableView from './TableView';
export default function App() {
  const [passengers, setPassengers] = useState(0);
  const [blocks, setBlocks] = useState(0);
  const [inputBox, openInputBox] = useState(false);
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  const [count, setCount] = useState(0);
  const [seatsGrid, setSeatsGrid] = useState([]);
  //const [seatingArrangement, setSeatingArrangement] = useState([]);
  const onPressNext = () => {
    setCount(count => count + 1);
    let temp = [];
    temp.push(parseInt(columns))
    temp.push(parseInt(rows));
    setSeatsGrid([...seatsGrid, temp])
    console.log(seatsGrid)
  }
  // Fetch seating arrangement from api, to be displayed.
  const getSeatingArrangement = () => {
    try {
      const res =  fetch("http://127.0.0.1:5000/airplane-algo", {
        body: JSON.stringify({seatsGrid: [[3,2], [4,3], [2,3], [3,4]], passengers: 30}),
        mode: 'no-cors',
        headers: {"Content-Type": 'application/json'},
        method: 'POST'
      }).then(response => response.json()).then(json => {return json;})
    } catch(err) {
      console.log("error fetching data", err);
    }
  }
  return (
    <div className="bg-slate-400 flex w-screen h-screen">
      <div className="flex flex-col items-centerr">
        <h1 className="text-4xl font-bold mt-0">
          Airplane Seating Algorithm Visualisation
        </h1>
        <div className="flex flex-row">
          <div className="mr-2">Enter the number of passengers:</div>
          <input className="bg-inherit border-2 outline-none mr-2" onChange={(event) => setPassengers(event.target.value)}></input>
        </div>
        <div className="flex flex-row">
          <div className="mr-2">Enter the number of seating blocks:</div>
          <input className="bg-inherit border-2 outline-none mr-2" onChange={(event) => setBlocks(event.target.value)} ></input>
        </div>
        <button className='border-2 w-fit' onClick={() => openInputBox(val => !val)}>Enter the details</button>
        {blocks && blocks > 0 && inputBox && count < blocks? (
          <div className='flex flex-col justify-evenly'>
            <div className="flex flex-row">
              <div className="mr-2">Enter the number of columns for block {count+1}:</div>
              <input className="bg-inherit border-2 outline-none w-5" onChange={(event) => setColumns(event.target.value)} ></input>
            </div>
            <div className="flex flex-row">
              <div className="mr-2">Enter the number of rows for block {count+1}:</div>
              <input className="bg-inherit border-2 outline-none w-5" onChange={(event) => setRows(event.target.value)} ></input>
            </div>
            <button className='border-2 w-fit' onClick={onPressNext}>Next</button>
          </div>
        ): null}
        <button className='border-2 w-fit'>Submit</button>
        <div className='mt-5'>
          <div>The seating should look like: </div>
          <div className='w-full'>
            <TableView />
          </div>
        </div>
      </div>
      
    </div>
  );
}
