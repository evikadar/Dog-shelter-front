import React from "react";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {username: '', password1: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update = (e) => {
        console.log(e.target.value);
        this.props.onUpdate(e.target.value);
        this.setState({userName: this.state.username});
    };

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
                this.setState({
                    username: this.state.username,
                    isLoaded: true,
                });

                this.redirectAfterLogin(result);
            })
            .then(this.update)
            .catch(error => this.setState({error}));

    }

    redirectAfterLogin(authenticationIsSuccessful) {
        if (authenticationIsSuccessful) {
            this.props.history.push({
                pathname: '/profile/' + this.state.username,
            });

        } else {
            this.props.history.push({
                pathname: '/dogs',
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
                            {this.createSignupCard()}
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
                                                <i className="icon-user"></i>
                                                </span>
                            </div>
                            <input name="username" onChange={this.handleChange} onSubmit={this.update} className="form-control" type="text"
                                   placeholder="Username"></input>
                        </div>
                        <div className="input-group mb-4">
                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                <i className="icon-lock"></i>
                                                </span>
                            </div>
                            <input name="password1" onChange={this.handleChange} className="form-control"
                                   type="password"
                                   placeholder="Password"></input>
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


    createSignupCard() {
        return (
            <div className="card text-white bg-primary py-5 d-md-down-none">
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
