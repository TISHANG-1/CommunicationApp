import React from 'react' 
import {PieChart} from '@mui/x-charts/PieChart'

const Table = ({data}) => { 
  const { Sent , UniqueOpens , TotalClicks, unSubscribe } = data;  
  console.log(data) ;  
   
  return (
      <div className='display-graphs'>  
       <div> 
      <PieChart 
      series={[
          {
              data: [
                  { id: 0, value: UniqueOpens, label: 'Opened' },
                  { id: 1, value: Sent-UniqueOpens, label: 'Not Opened' },
                  
                ],
            },
        ]}
        width={400}
        height={200}
        />
        </div>
        <div> 
      <PieChart 
      series={[
          {
              data: [
                  { id: 0, value: TotalClicks, label: 'Total Click' },
                  { id: 1, value: Sent-TotalClicks, label: 'Not Clicked' },
                  
                ],
            },
        ]}
        width={400}
        height={200}
        />
        </div>
      </div>
  )
}

export default Table
