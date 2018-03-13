import React from 'react';

export class AddStudent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            student: {
                firstName: '',
                lastName: '',
                age: '',
                email: '',
                image: '',
            },
            submitted: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        const { name, value } = event.target;
        console.log(event.target);
        const { student } = this.state;

        this.setState({
            student: {
                ...student,
                [name]: value
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { student } = this.state;
        if (student.firstName && student.lastName && student.age > 1) {
            alert(JSON.stringify(student));
        }
    }


    render() {
        const { student, submitted } = this.state;

        return (

            <div className="col-md-6 col-md-offset-3 jumbotron">
                <h2>Add Student</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !student.firstName ? ' has-error' : '')}>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" name="firstName" value={student.firstName} onChange={this.handleChange} />
                        {submitted && !student.firstName &&
                            <div className="help-block">First Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !student.lastName ? ' has-error' : '')}>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" name="lastName" value={student.lastName} onChange={this.handleChange} />
                        {submitted && !student.lastName &&
                            <div className="help-block">Last Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !student.age ? ' has-error' : '')}>
                        <label htmlFor="age">Age</label>
                        <input type="text" className="form-control" name="age" value={student.age} onChange={this.handleChange} />
                        {submitted && !(student.age > 0) &&
                            <div className="help-block">Student's age can't be less then 0</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !student.email ? ' has-error' : '')}>
                        <label htmlFor="age">Email</label>
                        <input type="text" className="form-control" name="age" value={student.email} onChange={this.handleChange} />
                        {submitted && !student.email &&
                            <div className="help-block">Email is required</div>
                        }
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default { AddStudent };