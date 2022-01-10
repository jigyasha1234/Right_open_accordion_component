import './App.css';
import React,{useState} from 'react';

function App() {
  const [show, setShow]=useState(true)
  const handleOpen = () => {
    setShow(!show); // Toggle accordion
  };
  return (
    <div className="App">
      <h1>Accordion </h1>
      <div className="accordian">
      <div className="accordian-header" onClick={handleOpen}>
          <div>Accordion Header</div>
          <div className="sign">{show ? '-' : '+'}</div>
      </div>
      {show && (
    <span className="accordian-body">
      Lorem Ipsum is simply dummy text of the printing and type setting
      industry. Lorem Ipsum has been the industry's ever since the 1500s,
      when an unknown printer took a galley of type standard dummy text
      and scrambled it to make a type specimen book.
    </span>
)}
      </div>
    </div>
  );
}

export default App;
