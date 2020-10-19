import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import { Plan } from './components/plan/plan-component'


class App extends Component{
    state = {
        currPlan: 1,
        plans: [ ]
    }

    // adds a new plan
    // increments currPlan and appends new plan in plans
    appendPlan = () => {
        this.setState({
            plans: [
                ...this.state.plans,
                <div>
                    <h1>Plan #{this.state.currPlan}</h1>
                    <Plan/>
                </div>
                ]
        });
        {this.state.currPlan++}
    }
    
    render(){
        return (
            <div className = 'App'>
                <div className = 'title-head'>
                    <h1 class= "display-4">"Multi-Level Marketing" Planner</h1>
                    <pre class = "tab"><small>    Double click light blue text to edit</small></pre>
                    <hr/>
                </div>
                <p></p>
                {/* maps all out all plans */}
                {this.state.plans.map(plan => plan)}
                {/* button that runs appendPlan() when clicked*/}
                <Button variant="secondary" size="lg" onClick={() => this.appendPlan()}>Add Plan</Button>
                <br/>

            </div>
        );
    };
}
  
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );
  