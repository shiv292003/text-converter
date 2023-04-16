import React, { useState } from "react";

export default function TextForm(props) {

  const handelUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase" , "success")
  };

  const handelLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase" , "success")
  };

  const handelOnChange = (event) => {
    // console.log("clicked");
    setText(event.target.value);
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Listen carefully" , "success")
  };

  const handelClearChange = () => {
    setText("");
    props.showAlert("Clear" , "success")
  };

  // below is my state
  const [text, setText] = useState("");

  

  return (
    <>
          <div className="container">
        <div className="container my-3" style={{color: props.Mode === 'light'?'black':'white'}}>
          

            <h1>{props.heading}</h1>
            <label htmlFor="MyBox" className="form-label">Example textarea</label>
            <textarea
              className="form-control"
              value={text}
              onChange={(handelOnChange)}
              id="MyBox"
              rows="8"
              style={{background :props.Mode === 'light'?'white':'grey' , color: props.Mode === 'light'?'black':'white'}}
            ></textarea>
            
            
            <button className="btn btn-primary my-3" onClick={handelUpClick}>
              click me to convet uppercase
            </button>

            <button
              className="btn btn-primary my-3 mx-2"
              onClick={handelLoClick}
            >
              click me to convet lowercase
            </button>

            <button
              className="btn btn-primary my-3 mx-2"
              onClick={handelClearChange}
            >
              Clear
            </button>

            <button
              onClick={speak}
              className="btn btn-primary mx-2 my-3"
            >
              Speak
            </button>
            
         
        </div>
      </div>

      <div className="container my-3" style={{color: props.Mode === 'light'?'black':'white'}}>
        <h3>Your Text summary</h3>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters{" "}
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read this text </p>
        <h3>Preview of your text</h3>
        <p>{text.length>0?text:"Enter something preview here"}</p>
      </div>
    </>
  );
}
