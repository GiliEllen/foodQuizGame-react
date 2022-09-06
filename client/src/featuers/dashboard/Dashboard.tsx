import { useEffect, useState } from 'react';
import axios from 'axios';
import { Fact } from '../fact/Fact';

interface FactInfo {
	id: string;
	fact: string;
	factSrc: string;
	isTrue: boolean;
}

export const Dashboard = () => {
	const [ loggedUser, setloggedUser ] = useState("You're not Logged In");
	const [ factsArray, setFactsArray ] = useState([]);
	const [ startgame, setStartGame ] = useState(false);
	const [ correctAnswerCounter, setCorrectAnswerCounter ] = useState<number>(0);
	const [ answeredQuestions, setAnsweredQuestions ] = useState<number>(0);
	useEffect(() => {
		try {
			const getUser = async () => {
				const userID = sessionStorage.getItem('userID');
				if (!userID) return setloggedUser("You're not Logged In");
				const { data } = await axios.post('/users/getUser', { userID });
				if (!data) throw new Error('no data from server in dashboard useEfffect');
				const { userDB } = data;
				if (!userDB) throw new Error('no userDB found from server');
				setloggedUser(`You are logged in as: ${userDB.username}`);
			};
			const handleGetAllFacts = async () => {
				console.log('handeload');
				const { data } = await axios.get('/facts/getAllFacts');
				const { factsDBArray } = data;
				setFactsArray(factsDBArray);
			};
			getUser();
			handleGetAllFacts();
		} catch (error) {
			console.log(error);
		}
	}, []);

	function handleResetCounters() {
		setCorrectAnswerCounter(0);
		setAnsweredQuestions(0);
	}

	if (answeredQuestions === factsArray.length) {
		return (
			<div className="session">
				<div className="session__headers">
					<h1>{loggedUser}</h1>
					<h2>score: {correctAnswerCounter}</h2>
					<button className='btn_submit' onClick={handleResetCounters}>Play again?</button>
				</div>
			</div>
		);
	}

	return (
		<div className="dashboard">
			<div className="dashboard__gameInfo">
				<h1>{loggedUser}</h1>
				<h2>correct answers: {correctAnswerCounter}</h2>

				<div className="facts_container">
					<h2>Facts:</h2>
					{factsArray.map((fact: FactInfo) => (
						<Fact
							key={fact.id}
							fact={fact.fact}
							factSrc={fact.factSrc}
							isTrue={fact.isTrue}
							setCorrectAnswerCounter={setCorrectAnswerCounter}
							correctAnswerCounter={correctAnswerCounter}
							answeredQuestions={answeredQuestions}
							setAnsweredQuestions={setAnsweredQuestions}
						/>
					))}
				</div>
			</div>
		</div>
	);
};
