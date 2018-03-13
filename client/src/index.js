import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/home/home';
import { AddTeacher } from './components/addTeacher/AddTeacher';
import { AddStudent } from './components/addStudent/AddStudent';
import { About } from './components/about/AboutPage';

ReactDOM.render(
    <Router>
        <div>
            <Route path="/" component={App} />
            <Route path="/home" exact component={HomePage} />
            <Route path="/addTeacher" component={AddTeacher} />
            <Route path="/addStudent" component={AddStudent} />
            <Route path="/about" component={About} />
        </div>
    </Router>,
    document.getElementById('root'));