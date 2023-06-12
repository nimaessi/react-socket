import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import MyNavBar from '../../module/NavBar';
import DataTable from '../../module/DataTable';
import { setData, fetchFail } from '../../features/network/networkSlice';
import { useDispatch } from 'react-redux';
import requestSocket from '../../api/socketReq';

const Home = () => {

  const dispatch = useDispatch();
  useEffect(() =>{
    const ws = requestSocket();
      ws.onmessage = (event) => {
        dispatch(setData(JSON.parse(event.data)));
      };
      ws.onerror = () => {
        dispatch(fetchFail('An error occurred'));
      }
  },[]);

  return (
    <>
      <MyNavBar/>
      <Container className = 'd-flex align-items-center justify-content-center'>
        <DataTable/>
      </Container>
    </>
  )
}

export default Home