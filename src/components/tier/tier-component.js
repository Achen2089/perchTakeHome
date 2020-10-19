import React, { Component } from 'react';
import './tier-component-style.css'

import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'


// componenet of a tier
export class Tier extends React.Component {
    // stores info on if tier needs to be edited 
    state = {
        value: this.props.fromRate,
        isInEditMode: false
    }
    
    changeEditMode = () => {
        this.setState({
            isInEditMode: !this.state.isInEditMode
        })
    }
    updateComponentValue = () => {
        this.setState({
            isInEditMode: false,
            value: this.refs.textInput.value
        })
    }
    // renders the input box 
    renderEditView = () => {
        return <div>
            <br/>
            <InputGroup className = "form-inline">
                <FormControl
                    type = "text"
                    defaultValue = {this.props.fromRate} 
                    ref = "textInput"
                />
                <InputGroup.Append>
                    <Button variant="primary" onClick = {this.updateComponentValue}>Save</Button>
                    <Button variant="secondary" onClick = {this.changeEditMode}>Cancel</Button>
                </InputGroup.Append>
            </InputGroup>
            <br/>
        </div>
    }
    //renders default and saved information
    renderDefaultView = () => {
        return <div onDoubleClick = {this.changeEditMode}>
            <p className = 'input-color'><small>{this.state.value}</small></p>
        </div>
    }

    render(){
        return this.state.isInEditMode ?
        this.renderEditView() :
        this.renderDefaultView()  
    }
}