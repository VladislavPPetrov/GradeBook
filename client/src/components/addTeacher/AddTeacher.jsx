import React from 'react';

export class AddTeacher extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            teacher: {
                firstName: '',
                lastName: '',
                age: '',
                email: '',
                image: '',
                address: '',
                phoneNumber: '',

            },
            submitted: false
        }

        this.onDrop = this.onDrop.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onDrop(image){
        this.state({
            image: image,
        })
    }

    handleChange(event) {
        const { name, value } = event.target;
        console.log(event.target);
        const { teacher } = this.state;

        this.setState({
            teacher: {
                ...teacher,
                [name]: value
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { teacher } = this.state;
        if (teacher.firstName && teacher.lastName && teacher.age > 1) {
            alert(JSON.stringify(teacher));
        }
    }


    render() {
        const { teacher, submitted } = this.state;

        return (

            <div className="col-md-6 col-md-offset-3 jumbotron">
                <h2>Add Teacher</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !teacher.firstName ? ' has-error' : '')}>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" name="firstName" value={teacher.firstName} onChange={this.handleChange} />
                        {submitted && !teacher.firstName &&
                            <div className="help-block">First Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !teacher.lastName ? ' has-error' : '')}>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" name="lastName" value={teacher.lastName} onChange={this.handleChange} />
                        {submitted && !teacher.lastName &&
                            <div className="help-block">Last Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !teacher.age ? ' has-error' : '')}>
                        <label htmlFor="age">Age</label>
                        <input type="text" className="form-control" name="age" value={teacher.age} onChange={this.handleChange} />
                        {submitted && !(teacher.age > 0) &&
                            <div className="help-block">Teacher's age can't be less then 0</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !teacher.email ? ' has-error' : '')}>
                        <label htmlFor="age">Email</label>
                        <input type="text" className="form-control" name="email" value={teacher.email} onChange={this.handleChange} />
                        {submitted && !teacher.email &&
                            <div className="help-block">Email is required</div>
                        }
                    </div>

                     <div className={'form-group' + (submitted && !teacher.address ? ' has-error' : '')}>
                        <label htmlFor="address">Adress</label>
                        <input type="text" className="form-control" name="address" value={teacher.address} onChange={this.handleChange} />
                        {submitted && !teacher.adress &&
                            <div className="help-block">Address is required</div>
                        }
                    </div>

                    
                    <div className={'form-group' + (submitted && !teacher.phoneNumber ? ' has-error' : '')}>
                        <label htmlFor="phoneNumber">Phone number </label>
                        <input type="text" className="form-control" name="phoneNumber" value={teacher.phoneNumber} onChange={this.handleChange} />
                        {submitted && !teacher.phoneNumber &&
                            <div className="help-block">Phone number is required</div>
                        }
                    </div>

                    <div className="input-group mb-3">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" name="image"/>
                            <label className="custom-file-label" htmlFor="image">Choose file</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default { AddTeacher };