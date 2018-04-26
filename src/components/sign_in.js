import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { signIn } from '../actions';
import Card from './card';
import RenderInput from './render_input';

class SignIn extends Component {
    handleSignIn(values) {
        console.log('Sign In Info:', values);
        this.props.signIn(values);
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <Card title="SIGN IN">
                <form onSubmit={handleSubmit(this.handleSignIn.bind(this))}>
                    <Field name="email" label="Email" component={RenderInput} />
                    <Field name="password" label="Password" type="password" component={RenderInput} />
                    <button className="btn">Sign In</button>
                </form>
            </Card>
        );
    };
};

function validate(values) {
    const { email, password } = values;
    const errors = {};

    if (!email) errors.email = 'Please enter your email';
    if (!password) errors.password = 'Incorrect password';

    return errors;
}

SignIn = reduxForm({
    form: 'sign-in',
    validate
})(SignIn);

export default connect(null, { signIn })(SignIn);
