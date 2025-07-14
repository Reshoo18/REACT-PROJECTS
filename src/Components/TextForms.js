import React,{useState} from 'react'

export default function TextForms(props) {
    
    const handleUpClick=()=>{
   //console.log("upper case is clicked" + text)
   let newText=text.toUpperCase();
   setText(newText)
   props.showAlert("converted to uppercase","success")
    }
    const handleClearText=()=>{
   //console.log("upper case is clicked" + text)
   let newText='';
   setText(newText)
   props.showAlert("All text is cleared","success")
    }
     const handleLoClick=()=>{
   //console.log("upper case is clicked" + text)
   let newText=text.toLowerCase();
   setText(newText)
   props.showAlert("converted to lowercase","success")
    }
     
    const handleOnChange=(event)=>{
   //console.log("Onchanged")
   setText(event.target.value);
    }
   const handleCopy=()=>{
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("All text are copied","success")
     }
     const handleExtraSpace=()=>{
        let newText =text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces are removed","success")
     }

const [text,setText]=useState('');
  return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
 
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="12"></textarea>
       </div>
       <button className="btn btn-primary M2-2" onClick={handleUpClick}>Convert to Uppercase</button>
       <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
       <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
       <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
       <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra space</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}