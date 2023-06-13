import React from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { selectNetwork } from '../features/network/networkSlice';
import { v4 as uuidv4 } from 'uuid';

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
                    <tr key = {uuidv4()}>
                        <td key = {index}>{index+1}</td>
                        <td key = {uuidv4()}>{item.topic}</td>
                        <td key = {uuidv4()}>{item.time}</td>
                        <td key = {uuidv4()}>{item.content.implName}</td>
                        <td key = {uuidv4()}>{item.content.blockNum}</td>  
                        <td key = {uuidv4()}>{item.content.blockTime}</td>  
                        <td key = {uuidv4()}>{item.content.bootTime}</td>  
                        <td key = {uuidv4()}>{item.content.count_account}</td>
                        <td key = {uuidv4()}>{item.content.eraLength}</td>
                        <td key = {uuidv4()}>{item.content.networkNode}</td>
                        <td key = {uuidv4()}>{item.content.maxPools}</td>    
                </tr>
                )
            })
            }
        </tbody>
    </Table>
  )
}

export default DataTable;