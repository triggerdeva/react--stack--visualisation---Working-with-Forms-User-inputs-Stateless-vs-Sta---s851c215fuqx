import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react';
import Element from './components/element';

function App() {
  const [arr,setArr]=useState([]);
  function push(){
    const inpt=document.getElementById('pushinpt').value;
    if(inpt!=''){
      setArr([inpt,...arr]);
    }
  }
  function pop(){
    if(arr.length==0) {
      document.getElementById('popinpt').value='';
      window.alert('Stack is empty');
      return;
    }
    document.getElementById('popinpt').value=arr[0];
    setArr(arr.filter((elem,index)=>{
      if(index!=0) return elem;
    }))
  }
  function top(){
    if(arr.length==0) {
      document.getElementById('topinpt').value='';
      window.alert('Stack is empty');
      return;
    }
    document.getElementById('topinpt').value=arr[0];
  }
  return (
    <div className="container">
      <h1 className="header">Stack</h1>
      <div className="row">
        <div className="col md-6 stack">
          {arr.map((val,index)=><Element key={`e${index}`} val={val}/>)}
        </div>
        <div className="col md-3 operation">
          <h2>Operations</h2>
          <div className="input-group push">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={push}>
              PUSH
            </button>
            <input type="text" className="form-control" id='pushinpt'/>
          </div>
          <div className="input-group pop">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={pop}>
              POP
            </button>
            <input type="text" disabled className="form-control" id='popinpt'/>
          </div>
          <div className="input-group top">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={top}>
              TOP
            </button>
            <input type="text" disabled className="form-control" id='topinpt'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
