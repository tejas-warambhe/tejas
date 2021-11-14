import React, {useState} from 'react'

export default function TextArea(props) {
    const upCase = () =>{
        console.log("This was fired");
        let myText = text.toUpperCase();
        setText(myText);
        props.showAlert("Your text was converted to uppercase", "success");
        
    }
    const lowCase = () =>{
        console.log("LowCase Was fired");
        let myText = text.toLowerCase();
        setText(myText);
        props.showAlert("Your text was converted to lowercase", "success");
    }
    
    const clearText = () =>{
        props.showAlert("Your text was cleared", "success");
        setText("");
    }

    const handleOnChange = (e) =>{
        setText(e.target.value);
    }

    const altText = () =>{
        let myText = text.split("");
        let count = 0;
       
        let final = myText.map((cur) =>{
            // let a = (count % 2 === 0 ? cur.toUpperCase : cur.toLowerCase);
            count++;
            if(count % 2 !== 0)
                return cur.toUpperCase();
            else
                return cur.toLowerCase();
        })
        props.showAlert("Your text was made alternative", "success");
        // let ans = myText.join("");
        setText(final.join(""));
    } 
    const copyText = () =>{
        let text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Your text was copied", "success");
    }

    const [text, setText] = useState("");
    return (
        <div>
           
           <div className="container">
           <div className="mb-3 my-5">
                <label htmlFor="exampleFormControlTextarea1" className="form-label"><h3  style={{color: (props.mode === 'dark') ? 'white' : 'black' }}><strong>{props.heading}</strong></h3></label>
                <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor: (props.mode === 'light') ? 'white' : '#d6feff', color: 'black' }} rows="8" value = {text} onChange={handleOnChange} placeholder="Start typing.."></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={upCase}>Convert To UpperCase</button>
            
            <button className="btn btn-primary mx-2" onClick={lowCase}>Convert To LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={altText}>Alternating Text</button>
            <button className="btn btn-primary mx-2" onClick={copyText}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>

            </div> 
            
            <div className="container my-3">
                <h2 style={{color: (props.mode === 'dark') ? 'white' : 'black' }}><b>Text Summary</b></h2>
                <p style={{color: (props.mode === 'dark') ? 'white' : 'black' }}>{text.split(" ").length} Words and {text.length} Characters</p>
                <p style={{color: (props.mode === 'dark') ? 'white' : 'black' }}>{0.008*text.split(" ").length} Minutes Read</p>

            </div>
            <div className="container my-3">
                <h2 style={{color: (props.mode === 'dark') ? 'white' : 'black' }}>
                    Preview
                    <br />
                    
                </h2>
                <p className="area" style={{color: (props.mode === 'dark') ? 'white' : 'black'}}>
                {text}
                </p>
            </div>

        </div>
    );
}