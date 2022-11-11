import React from 'react'
// Each seat block is taken from input and displayed as such.
const Table = ({block}) => {
    return (
        <div>
            <table className='table-auto space-x-2 border-2'>
                <tbody>
                    {
                        block.map((rows) => {
                           return (
                            <div>
                                <TableRow rows={rows} />
                            </div>
                           )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

const TableRow = ({rows}) => {
    return (
        <tr>
            {rows.map(col => {return <td><div className='ml-1 mr-1'>{col}</div></td>})}
        </tr>
    )
}


export default Table