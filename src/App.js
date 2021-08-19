import React, { Component } from 'react';
import Login from './components/LoginComponent';
import Home from './components/HomeComponent';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user_details: {
                name: "John Doe",
                hearts_received: 5
            } 
        };
    }

    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/home" component={() => <Home user_details={this.state.user_details} />} />
                    <Redirect to="/login" />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
