import { Navigate } from 'react-router-dom';

import { useState } from 'react';
// import './login.scss';
import axios from 'axios';

const Login = () => {
	const [ error, setError ] = useState<string | null>(null);
	const [ newPage, setNewPage ] = useState<boolean>(false);
	const [ authenticated, setauthenticated ] = useState(false);

	async function handleLogin(ev: any) {
		ev.preventDefault();
		try {
			const email = ev.target.elements.email.value;
			const password = ev.target.elements.password.value;
			const { data } = await axios.post('/users/login', { email, password });
			const { success, userDB } = data;
			if (success) {
				setauthenticated(true);
				sessionStorage.setItem('authenticated', 'true');
				sessionStorage.setItem('userID', userDB._id);
			}
			success ? setNewPage(true) : setNewPage(false);
		} catch (error) {
			console.error(error);
		}
	}

	if (!newPage) {
		return (
			<div className="session">
				<div className="session__headers">
					<h2>Login</h2>
					<form className="session__headers__Form" onSubmit={handleLogin}>
						<div className="input_wrapper">
							<div className="inputContainer">
								<input type="email" name="email" placeholder="email" required />
							</div>
							<div className="inputContainer">
								<input type="password" name="password" placeholder="password" required />
							</div>
						</div>

						<button className="btn_submit" type="submit">
							SIGN IN
						</button>
					</form>
				</div>

				{error !== null ? <p className="error">{error}</p> : null}
			</div>
		);
	} else {
		return <Navigate to="/dashboard" />;
	}
};

export default Login;
