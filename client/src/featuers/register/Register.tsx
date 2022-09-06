import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import  axios from 'axios';

const Register = () => {
	const [ error, setError ] = useState<string | null>(null);
	const [ authenticated, setAuthenticated ] = useState<boolean>(false);

	async function handleRegister(ev: any) {
		ev.preventDefault();
		try {
			const email = ev.target.elements.email.value;
			const username = ev.target.elements.username.value;
			const password = ev.target.elements.password.value;
            const rePassword = ev.target.elements.rePassword.value
            const { data } = await axios.post("/users/addUser" , {email, password, rePassword, username});
            sessionStorage.setItem("authenticated","true")
            setAuthenticated(true)
		} catch (error) {
			console.error(error);
		}
	}

	if (!authenticated) {
		return (
			<div className="session">
				<div className="session__headers">
					<h2>Register</h2>
					<form className="session__headers__Form" onSubmit={handleRegister}>
						<div className="input_wrapper">
							<div className="inputContainer">
								<input type="email" name="email" placeholder="email" required />
							</div>
                            <div className="inputContainer">
                                <input type="text" name="username" placeholder="username" required />
                            </div>
							<div className="inputContainer">
								<input type="password" name="password" placeholder="password" required />
							</div>
							<div className="inputContainer">
								<input type="password" name="rePassword" placeholder="Repeat Password" required />
							</div>
						</div>

						<button className='btn_submit' type="submit">SIGN UP</button>
					</form>
				</div>

				{error !== null ? <p className="error">{error}</p> : null}
			</div>
		);
	} else {
		return (
			<Navigate to="/dashboard"></Navigate>
		);
	}
};

export default Register;
