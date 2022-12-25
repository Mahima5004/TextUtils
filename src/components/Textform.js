import React, {useState} from 'react'

function Textform(props) {
  const[mode, setMode]=useState({
     color: "black",
     backgroundColor:"white"
})
const[btn,setBtn]=useState("Enable Dark Mode");
const handleDisplayMode=(e)=>{
  e.preventDefault();
  if (mode.color==="black"){
    setMode({
      color:"white",
      backgroundColor:"black",
      border:"1px white solid"
    })
    setBtn("Enable Light Mode");
  }
  else{
    setMode({
      color:"black",
      backgroundColor:"white"
    })
    setBtn("Enable Dark Mode")
  }
}
  const handleUpper= (e) =>{
        e.preventDefault();//as in default button causes submission and refreshes the page
        console.log("Upper Case button pressed");
        let newText=text.toUpperCase();
        setText(newText);
   }
   const handleLower= (e) =>{
    e.preventDefault();//as in default button causes submission and refreshes the page
    console.log("Lower Case button pressed");
    let newText=text.toLowerCase();
    setText(newText);
}
    const handleClear= (e) =>{
      e.preventDefault();//as in default button causes submission and refreshes the page
      console.log("Clearing the text");
      let newText='';
      setText(newText);
    }
    const handleChange= (event) =>{
        console.log("On change");
        setText(event.target.value);
    }
  const [text ,setText]=useState("Enter your text here");
  
  return (
     <>
    <div>
    <form>
      <div className="mb-3">
         <h1 class={`text-${props.mode==="light" ?"dark":"light"}`}>{props.top}</h1>
         <textarea  style={mode} className="form-control" value={text} onChange={handleChange} id="mytext" rows="7"  />
      </div>
       <button  className="btn btn-primary" onClick={handleUpper}>Convert To Uppercase</button>
       <button  className="btn btn-primary mx-3" onClick={handleLower}>Convert To Lowercase</button>
       <button  className="btn btn-primary mx-3" onClick={handleClear}>Clear Text</button>
       <button  className="btn btn-primary mx-3" onClick={handleDisplayMode}>{btn}</button>
       
    </form>

    </div>
    <div className='container my-2' class={`text-${props.mode==="light" ?"dark":"light"}`}>
      <h2>Your text Summary</h2>
      <p>Your text has {(text.split(" ")).length} words and it has {text.length}</p>
      <p>You will take {0.08* text.split(" ").length} minutes to read your text</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>

  )
}

export default Textform
