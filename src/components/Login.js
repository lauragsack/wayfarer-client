import React, { Component } from 'react';
import UserModel from '../models/user'

class Login extends Component {
    state = {
        email: "",
        password: "",
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        UserModel.login(this.state)
            .then(res => {
                this.props.setCurrentUser(res.data.data)
                this.props.history.push("/profile")
            })
            .catch(err => console.log(err))
        }

    render() {
        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <h4 className="mb-3">Log in</h4>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Email</label>
                                <input
                                    onChange={this.handleChange} className="form control form-control-lg"
                                    className="form control form-control-lg"
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={this.state.email}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    onChange={this.handleChange} className="form control form-control-lg"
                                    className="form control form-control-lg"
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={this.state.password}
                                />
                            </div>
                            <button className="btn btn-primary float-right" type="submit">Log in</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;
