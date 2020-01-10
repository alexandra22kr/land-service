import React, { Fragment, Component } from 'react';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';



class loginForm extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <LoginForm />
                <Footer />
            </Fragment>
        );
    }
}


export default loginForm;
