import React, { Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Landing from "./Landing";
import Dashboard from "./DashBoard";
import SurveyNew from "./surveys/SurveyNew";

import Header from "./Header";


class App extends Component{
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                        <Header />
                        <Route exact path="/" component={Landing}></Route>
                        <Route exact path="/surveys" component={Dashboard}></Route>
                        <Route exact path="/surveys/new" component={SurveyNew}></Route>
                </BrowserRouter>
            </div>
        );
    }

}

export default connect(null, actions)(App);