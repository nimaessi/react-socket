//Test API wss =>  wss://polkadot.webapi.subscan.io/socket
//Binance API => wss://fstream.binance.com
const requestSocket = () => {

    const ws = new WebSocket('wss://polkadot.webapi.subscan.io/socket');
    ws.onopen = function (event) {
      console.log('connection is open!');
      //for binance api => ws.send(JSON.stringify({method: 'SUBSCRIBE', params: ['!ticker@arr']})); 
    }
    return ws;
}
export default requestSocket;