import { Link } from 'react-router-dom';

export const Page404 = () => {
	return (
		<div className="session">
			<div className="session__headers">
				<h1>Error 404:</h1>
				<h2>It seems this page does not exist</h2>
				<Link to="/">
					{' '}
					<h3>Click here to go HOME</h3>
				</Link>
			</div>
		</div>
	);
};
