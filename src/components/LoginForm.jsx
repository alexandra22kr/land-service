import React, { Component } from 'react';
import axios from 'axios';


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { login: '', password: '' };

        this.onChangeLogin = this.onChangeLogin.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        axios.post(`https://jsonplaceholder.typicode.com/users`, { data })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })

        this.setState({ login: '', password: '' });
    }


    onChangePassword(event) {
        this.setState({ password: event.target.value });
    }

    onChangeLogin(event) {
        this.setState({ login: event.target.value });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h2>Авторизація</h2>
                <label htmlFor="login"> Користувач:</label>
                <input type="text" name="login" placeholder="Введіть логін" value={this.state.login} onChange={this.onChangeLogin} />
                <label htmlFor="password"> Пароль:</label>
                <input type="password" name="password" placeholder="Введіть пароль" value={this.state.password} onChange={this.onChangePassword} />
                <button type="submit">Увійти</button>
            </form>
        );
    }
}

export default LoginForm;