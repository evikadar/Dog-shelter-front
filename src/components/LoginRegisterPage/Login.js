import React from "react";

class Login extends React.Component {
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
        return(
            <div className="card p-4">
                <div className="card-body">
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                <i className="icon-user"></i>
                                                </span>
                        </div>
                        <input className="form-control" type="text" placeholder="Username"></input>
                    </div>
                    <div className="input-group mb-4">
                        <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                <i className="icon-lock"></i>
                                                </span>
                        </div>
                        <input className="form-control" type="password"
                               placeholder="Password"></input>
                    </div>
                    <div className="row">
                        <div className="col6">
                            <button className="btn btn-primary px-4" type="button">Login</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

    createSignupCard() {
        return(
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
