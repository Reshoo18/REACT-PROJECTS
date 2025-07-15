import React, { useState } from 'react'

export default function About() {
    const [myStyle,setMyStyle]=useState({
        color: 'black',
        backgroundColor : 'white',
        
    })
    const [btnText,setBtnText]=useState("Enable dark mode")
     const toggleStyle=()=>{
        if(myStyle.color === "black"){
        setMyStyle({color: 'white',
        backgroundColor : 'black',
        border: '1px solid white'})

        setBtnText("Enable Light Mode")

        }
        

        else{setMyStyle({color: 'black',
        backgroundColor : 'white'})
        setBtnText("Enable Dark Mode")

                 }
    }
       
  return (
    <div classNameName="container" style={myStyle}>
        <h1 classNameName= "my-2">About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong>Analyze your text</strong> 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextUtils gives you a way to analyze your text quickly and efficiently. be it word count,or character count
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong>Free to use</strong> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       TextUTils is a free character counter toot that provides instant character count & word count statistics for a given text. TextUtils report the number of words and characters. thus it is suitable for writinhg text with word/ character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <strong>Browser compatible</strong> 
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        This word counter software works in any web browser  such as Chrome ,Firefox,Internet Explorer,Safari,Opera.it 
        suits to count character in facebook,blog,books,excel document,pdf document,essay,etc.
      </div>
    </div>
  </div>
</div>
    </div>
  )
}