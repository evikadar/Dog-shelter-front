import React from "react";


class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {username: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({username: event.target.username})
    }

    handleSubmit(event) {
        alert("Username was " + this.state.username || '');
        console.log("Consi here Username was " + this.state.username || '');
        event.preventDefault();
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
                <form onSubmit={this.handleSubmit}>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                        <span className="input-group-text">
                        <i className="icon-user"></i>
                        </span>
                        </div>
                        <input className="form-control" type="text" value={this.state.username} onChange={this.handleChange} placeholder="Username"></input>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">@</span>
                        </div>
                        <input className="form-control" type="text" placeholder="Email"></input>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                        <span className="input-group-text">
                        <i className="icon-lock"></i>
                        </span>
                        </div>
                        <input className="form-control" type="password" placeholder="Password"></input>
                    </div>
                    <div className="input-group mb-4">
                        <div className="input-group-prepend">
                        <span className="input-group-text">
                        <i className="icon-lock"></i>
                        </span>
                        </div>
                        <input className="form-control" type="password" placeholder="Repeat password"></input>
                    </div>
                    {this.registerAs()}
                    <button className="btn btn-block btn-success" type="button">Create Account</button>
                </form>
            </div>
        )

    }

    registerAs() {
        return (
            <div className="input-group mb-4">
                <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="registerAs1" name="registerAs"
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