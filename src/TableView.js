import React from 'react'
import Table from './Table'

// Dummy seating arrangement, based on the inputs seatsGrid=[[3,2], [4,3], [2,3], [3,4]], passengers=30
const dummyData = [[[19,25,1],[21,29,7]],[[2,26,27,3],[8,30,-1,9],[13,-1,-1,14]],[[4,5],[10,11],[15,16]],[[6,28,20],[12,31,22],[17,-1,23],[18,-1,24]]]

const TableView = ({seatingArrangement}) => {
    // Check if the there is a seatingArrangement provided or not. Display dummyData table on absence of input
    let airplaneSeats = (seatingArrangement && seatingArrangement.length > 0) ? seatingArrangement : dummyData;
    return (
        <div className='flex flex-row mt-10'>
            {
                airplaneSeats.map((block, idx) => {
                    return (<div className='ml-5 mr-2.5'>
                        <Table block={block} key={idx} />
                    </div>)
                })
            }
        </div>
    )
}

export default TableView