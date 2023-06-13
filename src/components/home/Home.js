import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import MyNavBar from '../../module/NavBar';
import DataTable from '../../module/DataTable';
import { setData, fetchFail, selectNetwork } from '../../features/network/networkSlice';
import { useDispatch, useSelector } from 'react-redux';
import requestSocket from '../../api/socketReq';
import Error from '../../module/Error';

const Home = () => {

  const dispatch = useDispatch();
  const network = useSelector(selectNetwork);
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
        {network.error ? <Error message = {'An error occurred'} /> : <DataTable />}
      </Container>
    </>
  )
}

export default Home