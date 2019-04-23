import React from "react";
import 'whatwg-fetch';


class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password1: '',
            password2: '',
            email: '',
            selectedO: 'asShelter',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }


    handleSubmit(event) {
        event.preventDefault();
        const options = {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        };
        if (this.state.password1 !== this.state.password2) {
            alert("Passwords don't match");
        } else {
            fetch('http://localhost:8080/register', options)
                .then(() => this.setState({username: this.state.username}))
                .catch(error => this.setState({error}));
            this.props.history.push('/login');
        }
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card mx-4">
                            {this.createRegisterCard()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    createRegisterCard() {
        return (
            <div className="card-body p-4">
                <form action={this.props.action} method="post" onSubmit={this.handleSubmit}>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                        <span className="input-group-text">
                        <i className="icon-user"/>
                        </span>
                        </div>
                        <input className="form-control" type="text" name="username"
                               onChange={this.handleChange}
                               placeholder="Username"/>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">@</span>
                        </div>
                        <input className="form-control" type="text" name="email"
                               onChange={this.handleChange}
                               placeholder="Email"/>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                        <span className="input-group-text">
                        <i className="icon-lock"/>
                        </span>
                        </div>
                        <input className="form-control" type="password" name="password1"
                               onChange={this.handleChange}
                               placeholder="Password"/>
                    </div>
                    <div className="input-group mb-4">
                        <div className="input-group-prepend">
                        <span className="input-group-text">
                        <i className="icon-lock"/>
                        </span>
                        </div>
                        <input className="form-control" type="password" name="password2"
                               onChange={this.handleChange}
                               placeholder="Repeat password"/>
                    </div>
                    <div className="input-group mb-4">
                        <div className="custom-control custom-radio custom-control-inline">
                            <input
                                type="radio"
                                value="asOwner"
                                checked={this.state.selectedO === "asOwner"}
                                onChange={this.handleRadioChange}
                            />
                            <label className="text-muted"> Register As Owner</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input
                                type="radio"
                                value="asShelter"
                                checked={this.state.selectedO === "asShelter"}
                                onChange={this.handleRadioChange}
                            />
                            <label className="text-muted"> Register As Shelter</label>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-block btn-success" type="submit">Create Account</button>
                    </div>
                </form>
            </div>
        )
    }

    handleRadioChange = changeEvent => {
        this.setState({
            selectedO: changeEvent.target.value,
        })
    }
}


export default Register;