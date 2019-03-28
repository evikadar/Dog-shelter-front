import React from "react";
import 'whatwg-fetch';
import {Redirect} from 'react-router-dom'


class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {username: '', password1: '', password2: '', email: '', redirect: false};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log(this.state);
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }


    handleSubmit(event) {
        event.preventDefault();
        console.log(JSON.stringify(this.state));
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
                .then(response => {
                    console.log(response);
                })
                .then(data => this.setState({username: this.state.username}))
                .catch(error => this.setState({error}));
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
                        <i className="icon-user"></i>
                        </span>
                        </div>
                        <input className="form-control" type="text" name="username"
                               onChange={this.handleChange}
                               placeholder="Username"></input>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">@</span>
                        </div>
                        <input className="form-control" type="text" name="email"
                               onChange={this.handleChange}
                               placeholder="Email"></input>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                        <span className="input-group-text">
                        <i className="icon-lock"></i>
                        </span>
                        </div>
                        <input className="form-control" type="password" name="password1"
                               onChange={this.handleChange}
                               placeholder="Password"></input>
                    </div>
                    <div className="input-group mb-4">
                        <div className="input-group-prepend">
                        <span className="input-group-text">
                        <i className="icon-lock"></i>
                        </span>
                        </div>
                        <input className="form-control" type="password" name="password2"
                               onChange={this.handleChange}
                               placeholder="Repeat password"></input>
                    </div>
                    {this.registerAs()}
                    <div>
                        <button className="btn btn-block btn-success" type="submit">Create Account</button>
                    </div>
                </form>
                <div></div>
            </div>

        )

    }

    registerAs() {
        return (
            <div className="input-group mb-4">
                <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio" defaultChecked={true} id="registerAs1" name="registerAs"
                           className="custom-control-input"></input>
                    <label className="custom-control-label text-muted" htmlFor="registerAs1">I Register As Pet
                        Shelter</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="registerAs2" name="registerAs"
                           className="custom-control-input"></input>
                    <label className="custom-control-label text-muted" htmlFor="registerAs2">I Register As Pet
                        Owner</label>
                </div>
            </div>
        )
    }
}


export default Register;