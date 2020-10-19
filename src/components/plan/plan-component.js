import React, { Component } from 'react';
import Button  from 'react-bootstrap/Button';
import { Level } from '../level/level-component'

//componenet for a plan
export class Plan extends React.Component {
    // current levels in plan
    // levels inside plan
    state = {
        currLevel: 1,
        levels: []
    }

    // add a level to plan 
    // increment currLevel and adds a level to levels 
    appendLevel = () => {
        this.setState({
            levels: [
                ...this.state.levels,
                <div>
                    <h5>Level {this.state.currLevel}</h5>
                    <Level currLevel = {this.state.currLevel}/>
                </div>
                ]
        });
        {this.state.currLevel++}
    }
    
    render(){
        return (
            <div>                
                {this.state.levels.map(level => level)}
                <Button variant="primary" onClick={() => this.appendLevel()}> Add Level </Button>
                <br/> <br/>
            </div>
        );
    }
}