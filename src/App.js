import axios from 'axios'
import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceFive } from '@fortawesome/free-solid-svg-icons'
import "./_app.scss"
function App() {

  let [adviceData,adviceAssigner]=useState({
    data:null
  })
  let actualData
  useEffect(()=>{
    axios.get("https://api.adviceslip.com/advice")
    .then(res=>{
      adviceAssigner({
        data:res.data
      })
    })
    .catch(err=>{
      console.log(err)
    })
  },[])
  if(adviceData.data===null){
    return
  }else{
    actualData=adviceData.data
  }
  
  let adviceRefresh=()=>{
    window.location.reload(false);
  }

  return (
    <div className="App">
      <h1>Advice Generator!</h1>
      <div className="advice-wrapper">
        <h3>Advice # {actualData.slip.id}</h3>
        <p>{actualData.slip.advice}</p>
        <button onClick={adviceRefresh}><FontAwesomeIcon icon={faDiceFive}></FontAwesomeIcon></button>
      </div>
    </div>
  );
}

export default App;
