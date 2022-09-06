// @flow
import { Link } from 'react-router-dom';

export const Home = () => {
	return (
		<div className="session">
			<div className="session__headers">
				<h1>Welcome to the Big Food Quiz!</h1>
				<Link to="/login">
					<h3>Login to your user</h3>
				</Link>
				<Link to="/register">
					<h3>Register if you're new</h3>
				</Link>
				<Link to="/dashboard">
					<h3>Or play as a guest</h3>
				</Link>
			</div>
		</div>
	);
};
