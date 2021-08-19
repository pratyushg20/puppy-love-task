import React, { Component } from 'react';
import Login from './components/LoginComponent';
import Home from './components/HomeComponent';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "John Doe",
            hearts_received: 3
        };
    }

    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/signin" component={Login} />
                    <Route path="/home" component={() => <Home hearts_received={this.state.hearts_received} user={this.state.name} />} />
                    <Redirect to="/signin" />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
