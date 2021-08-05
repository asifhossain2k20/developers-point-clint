import React from 'react';

const BookingListTable = ({bookings}) => {
    return (
        <div>
                  <table className="table table-borderless">
        <thead>
            <tr>
            <th className="text-secondary text-left" scope="col">Sr No</th>
            <th className="text-secondary" scope="col">Name</th>
            <th className="text-secondary" scope="col">Service</th>
            <th className="text-secondary" scope="col">Status</th>
            </tr>
        </thead>
        <tbody>
            {
              bookings.map((order, index) => 
                    
                <tr>
                    <td>{index + 1}</td>
                    <td>{order.name}</td>
                    <td>{order.service}</td>
                    {
                    order.status==='Done'?<div>
                        <td style={{color:"green"}}>{order.status}</td>
                    </div>:<div>
                        <td style={{color:"red"}}>{order.status}</td>
                    </div>
                    
                    }
                    
                </tr>
                )
            }
        </tbody>
    </table>
        </div>
    );
};

export default BookingListTable;