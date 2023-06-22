import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {

  let [mail, setMail] = useState('')
  let [psw, setPsw] = useState('')
  let [num, setNum] = useState('')

  return (
    <div className="App">
      <input value={mail} onChange={e => setMail(e.target.value)} placeholder='mail' />
      <input value={psw} onChange={e => setPsw(e.target.value)} placeholder='password' />
      <input value={num} onChange={e => setNum(e.target.value)} placeholder='number' />
      <button onClick={() => {
        console.log('Clicked');

        axios.defaults.baseURL = 'http://192.168.31.150:5000';
        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';


        axios.get(`http://192.168.31.150:5000/register?mail=${mail}&psw=${psw}&num=${num}`)
          .then(response => console.log(response))
          .catch(error => console.log(error))


      }}>OK</button>
    </div >
  );
}

export default App;
