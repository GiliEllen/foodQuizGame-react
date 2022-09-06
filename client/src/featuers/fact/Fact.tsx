import { useState } from 'react';

interface FactProps {
	fact: string;
	factSrc: string;
	isTrue: boolean;
	setCorrectAnswerCounter: Function;
	correctAnswerCounter: number;
	setAnsweredQuestions: Function;
	answeredQuestions: number;
}

export const Fact = ({ fact, factSrc, isTrue, setCorrectAnswerCounter, correctAnswerCounter, setAnsweredQuestions, answeredQuestions }: FactProps) => {
	const [ pressedBTN, setPressedBTN ] = useState<boolean>(false);
	const [backgroundColor, setBackgroundColor] = useState<string>("white")

	function handleClickedButton(ev: any) {
		console.log(ev.target.value);
		try {
			if (isTrue && ev.target.value === 'trueBTN') {
				console.log('correct!');
				setCorrectAnswerCounter(correctAnswerCounter + 1);
				setBackgroundColor("green")
			} else if (isTrue && ev.target.value === 'FalseBTN') {
				console.log('correct fact wrong answer');
				setBackgroundColor("red")
			} else if (!isTrue && ev.target.value === 'trueBTN') {
				console.log('the fact is wrong but you pressed true');
				setBackgroundColor("red")
			} else if (!isTrue && ev.target.value === 'FalseBTN') {
				console.log('correct answer for worng fact - point achived');
				setCorrectAnswerCounter(correctAnswerCounter + 1);
				setBackgroundColor("green")
			}
			setPressedBTN(true);
			setAnsweredQuestions(answeredQuestions + 1);
		} catch (error) {
			console.log(error);
		}
	}


	return (
		<div className='fact' style={{backgroundColor: backgroundColor}}>
			<img src={factSrc} />
			<h2>{fact}</h2>
			<div className='BTN_container'>
				<button
					style={{ display: pressedBTN ? 'none' : 'block'}}
					onClick={handleClickedButton}
					value="trueBTN"
				>
					True
				</button>
				<button
					style={{ display: pressedBTN ? 'none' : 'block'}}
					onClick={handleClickedButton}
					value="FalseBTN"
				>
					False
				</button>
			</div>
		</div>
	);
};
