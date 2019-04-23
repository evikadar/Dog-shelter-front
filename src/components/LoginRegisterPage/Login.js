import React from "react";


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            password1: '',
            username: this.props.username,
            loggedIn: this.props.loggedIn,
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

        fetch('http://localhost:8080/login', options)
            .then(response => response.json())
            .then((result) => {
                this.redirectAfterLogin(result);
            })
            .catch(error => this.setState({error}));

    }

    redirectAfterLogin(authenticationIsSuccessful) {
        if (authenticationIsSuccessful) {
            this.props.handleLogin(this.state.username);
            this.props.history.push({
                pathname: '/dogs',
            });
        } else {
            this.props.history.push({
                pathname: '/login',
            });
        }
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card-group">
                            {this.createLoginCard()}
                            {Login.createSignupCard()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    createLoginCard() {
        return (
            <div className="card p-4">
                <div className="card-body">
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <form method="post" onSubmit={this.handleSubmit}>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                <i className="icon-user"/>
                                                </span>
                            </div>
                            <input name="username"
                                   onChange={this.handleChange}
                                   className="form-control"
                                   type="text"
                                   placeholder="Username"/>
                        </div>
                        <div className="input-group mb-4">
                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                <i className="icon-lock"/>
                                                </span>
                            </div>
                            <input name="password1" onChange={this.handleChange} className="form-control"
                                   type="password"
                                   placeholder="Password"/>
                        </div>
                        <div className="row">
                            <div className="col6">
                                <button className="btn btn-primary px-4" type="submit">Login</button>

                            </div>

                        </div>
                    </form>
                </div>
            </div>

        )
    }


    static createSignupCard() {
        return (
            <div className="card text-white bg-primary py-5">
                <div className="card-body text-center">
                    <div>
                        <h2>Sign up</h2>
                        <p>Register as a shelter to find new home for your pets or sign up as a future pet owner!</p>
                        <a className="btn btn-primary active mt-3" role="button" href="/register">Register Now!</a>
                    </div>
                </div>
            </div>
        )
    }


}

export default Login;
