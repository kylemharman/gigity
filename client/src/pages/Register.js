import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

import { registerUser } from "../actions/authActions";

import Input from "../components/forms/Input";
import FormButton from "../components/forms/FormButton";
import ErrorMessage from "../components/forms/ErrorMessage";

import { FormContainer } from "../components/forms/Forms_Styles";
import { ContainerCenter } from "../styles/GlobalStyles";

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }

    componentWillReceiveProps(nextProps) {
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
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
        this.props.registerUser(newUser, this.props.history);
    };
    render() {
        const { errors } = this.state;
        return (
            <ContainerCenter>
                <FormContainer>
                    <h4>
                        <b>Register</b> below
                    </h4>
                    <p>
                        Already have an account? <Link to="/login">Log in</Link>
                    </p>

                    <form noValidate onSubmit={this.onSubmit}>
                        <Input
                            onChange={this.onChange}
                            value={this.state.name}
                            error={errors.name}
                            id="name"
                            type="text"
                            placeholder="Name"
                            className={classnames("", {
                                invalid: errors.name
                            })}
                        />
                        {errors.name && (
                            <ErrorMessage>{errors.name}</ErrorMessage>
                        )}

                        <Input
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                            id="email"
                            type="email"
                            placeholder="Email"
                            className={classnames("", {
                                invalid: errors.email
                            })}
                        />
                        {errors.email && (
                            <ErrorMessage>{errors.email}</ErrorMessage>
                        )}

                        <Input
                            onChange={this.onChange}
                            value={this.state.password}
                            error={errors.password}
                            id="password"
                            type="password"
                            placeholder="Password"
                            className={classnames("", {
                                invalid: errors.password
                            })}
                        />
                        {errors.password && (
                            <ErrorMessage>{errors.password}</ErrorMessage>
                        )}

                        <Input
                            onChange={this.onChange}
                            value={this.state.password2}
                            error={errors.password2}
                            id="password2"
                            type="password"
                            placeholder="Confirm Password"
                            className={classnames("", {
                                invalid: errors.password2
                            })}
                        />
                        {errors.password2 && (
                            <ErrorMessage>{errors.password2}</ErrorMessage>
                        )}

                        <FormButton type="submit">Sign up</FormButton>
                    </form>
                </FormContainer>
            </ContainerCenter>
        );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(mapStateToProps, { registerUser })(withRouter(Register));
