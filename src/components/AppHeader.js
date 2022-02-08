import React from "react"

import compnayLogo from "../assets/relevel.jpeg"

import "./styles.css"

export default class AppHeader extends React.Component{
    render(){
        return(
            <div className = "appTitleContainer" >
                    <img className = "logoImage" src= {compnayLogo} />
                    <text className = "appTitleText">Relevel Trello</text>
                </div>
        )
    }
}