import "./Popup.css"
import Card from "../Card/Card"
import React, { useState } from 'react'
import Backdrop from "../Backdrop/Backdrop"


const Popup = (props) => {

    


    return (
        <Backdrop>
            <Card className="popup">
                <div className="popup-text">
                    <p>
                        {props.text}
                    </p>
                </div>
                <div className="popup-btn">
                    {props.showYesBtn&&<button className="ok-btn" onClick={props.onYes}>{props.yesText}</button>}
                   
                    <button onClick={props.onNo}>{props.noText}</button>

                </div>
            </Card>
        </Backdrop>)




}

export default Popup