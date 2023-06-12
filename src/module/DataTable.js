import React from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { selectNetwork } from '../features/network/networkSlice';


const DataTable = () => {
    
    const network = useSelector(selectNetwork);
  return (
    <Table className = 'mt-5 mb-5' responsive striped>
        <thead>
        <tr>
            <th>#</th>
            <th>Topic</th>
            <th>Time</th>
            <th>implName</th>
            <th>blockNum</th>
            <th>blockTime</th>
            <th>bootTime</th>
            <th>countAccount</th>
            <th>eraLength</th>
            <th>networkNode</th>
            <th>maxPolls</th>
        </tr>
        </thead>
        <tbody>
            {
            network.networkValue.map((item,index) => {
                return(
                    <tr>
                        <td key = {index}>{index+1}</td>
                        <td>{item.topic}</td>
                        <td>{item.time}</td>
                        <td>{item.content.implName}</td>
                        <td>{item.content.blockNum}</td>  
                        <td>{item.content.blockTime}</td>  
                        <td>{item.content.bootTime}</td>  
                        <td>{item.content.count_account}</td>
                        <td>{item.content.eraLength}</td>
                        <td>{item.content.networkNode}</td>
                        <td>{item.content.maxPools}</td>    
                </tr>
                )
            })
            }
        </tbody>
    </Table>
  )
}

export default DataTable;