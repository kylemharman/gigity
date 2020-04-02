import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

import { loginUser } from "../actions/authActions";
import Input from "../components/forms/Input";
import FormButton from "../components/forms/FormButton";
import ErrorMessage from "../components/forms/ErrorMessage";

import { FormContainer } from "../components/forms/Forms_Styles";
import { ContainerCenter } from "../styles/GlobalStyles";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/dashboard"); // push user to dashboard when they login
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
    };
    render() {
        const { errors } = this.state;
        return (
            <ContainerCenter>
                <FormContainer>
                    <h4>
                        <b>Login</b> below
                    </h4>
                    <p>
                        Don't have an account?{" "}
                        <Link to="/register">Register</Link>
                    </p>

                    <form noValidate onSubmit={this.onSubmit}>
                        <Input
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                            id="email"
                            type="email"
                            placeholder="Email"
                            className={classnames("", {
                                invalid: errors.email || errors.emailnotfound
                            })}
                        />
                        {errors.email || errors.emailnotfound ? (
                            <ErrorMessage>
                                {errors.email}
                                {errors.emailnotfound}
                            </ErrorMessage>
                        ) : null}

                        <Input
                            onChange={this.onChange}
                            value={this.state.password}
                            error={errors.password}
                            id="password"
                            type="password"
                            placeholder="Password"
                            className={classnames("", {
                                invalid:
                                    errors.password || errors.passwordincorrect
                            })}
                        />
                        {errors.password || errors.passwordincorrect ? (
                            <ErrorMessage>
                                {errors.password}
                                {errors.passwordincorrect}
                            </ErrorMessage>
                        ) : null}

                        <FormButton type="submit">Login</FormButton>
                    </form>
                </FormContainer>
            </ContainerCenter>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
