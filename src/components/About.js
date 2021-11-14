import React, {useState} from 'react'

export default function About() {
    
    const [myStyle, setStyle] = useState({
        color: 'white',
        backgroundColor: 'black'
        
    })

    const [btnState, setBtnState] = useState("Enable Dark Mode")
    
    let toggleStyle = () =>{
        if(myStyle.color === 'white'){
            setStyle({
                color: 'black',
                backgroundColor : 'white',
                
            })
            setBtnState("Enable Dark Mode");
        } else{
            setStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '2px solid grey'
            })
            setBtnState("Disable Dark Mode");
        }
    }

    return (
        <div className = "container">
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" style={myStyle} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
            <button type="button" onClick={toggleStyle} className= "btn btn-primary my-3">{btnState}</button>
            </div>
            
        </div>
    );
}

