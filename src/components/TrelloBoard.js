import React, {Component} from "react";
import { connect } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import AppHeader from "./AppHeader"
import Card from "./Card"

import "./styles.css"

class TrelloBoard extends React.Component {

    render() {
        return (
            <div className = "container" >
                <AppHeader/>
                <div className="cardContainer">
                    <Card 
                        cardId= {Math.floor(Math.random()*(100000))} 
                        description = "Please add a card here"
                    />
                    <Card 
                        cardId = {Math.floor(Math.random()*(100000))} 
                        description = "Card already added"
                    />
                </div>
            </div>
        )
    }
}



export default TrelloBoard;