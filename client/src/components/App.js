import React from 'react';
import { Link } from 'react-router-dom';

export class App extends React.Component {
    render() {
        return (
            
            <div className="container-fluid">


                <nav className="navbar navbar-light bg-light">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active"><Link to="/home" className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link to="/addTeacher" className="nav-link">Add Teacher</Link></li>
                        <li className="nav-item"><Link to="/addStudent" className="nav-link">Add Student</Link></li>
                        <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                    </ul>
                </nav>


                {this.props.children}
            </div >
        );
    }
}
export default { App };