import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import { Tier } from '../tier/tier-component'

// Component for a level
export class Level extends React.Component {
    // stores current number of tiers for a level
    // stores tiers to be rendered 
    state = {
        currTier: 0,
        tiers: [ ]
    }
    // append a tier to tiers in state based on certain conditions
    appendTier = () => {
        // This code is commented out because trigger for first tier in level should not appear
        // if not than this code can be commented in with some adjustments
        
        // if (this.props.currLevel == 1 && this.state.currTier == 0){
        //     this.setTier(
        //         <div>
        //             <p>Trigger</p>
        //             <Tier fromRate = "None"/>
        //         </div>)
        // }
        if(this.state.currTier == 0 && this.props.currLevel != 1){
            this.setTier(
            <div>
                <p>Trigger</p>
                <Tier fromRate = "Threshold: "/>
                <Tier fromRate = {"Level: " + this.props.currLevel}/>
            </div>)
     
        }
        else{
            if(this.props.currLevel == 1) {this.state.currTier++};
            this.setTier(
                <div>
                    <p>Tier {this.state.currTier}</p>
                    <Tier fromRate = "From $_ "/>
                    <Tier fromRate = "Rate _%"/>
                </div>)
        }
    }
    //sets information for tier
    setTier = (tier) => {
        this.setState({
            tiers: [
                ...this.state.tiers,
                tier]
        });
        {this.state.currTier++}
    }
    render () {
        return (
            <div>
                {this.state.tiers.map(tier => tier)}
                <Button variant="link" onClick={() => this.appendTier()}>Add Tier</Button>
                <br/> <br/>
            </div>
        );
    }
}