import React from "react"
import "./styles.css"


export default class Card extends React.Component{
    render(){
        return(
            <div class ="cardBox">
                <text class = "cardTitle" >
                    Ticket: {this.props.cardId}
                </text>
                <text class = "descriptionText">
                    {this.props.description}
                </text>
            </div>
        )
    }
}