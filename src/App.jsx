import Die from "./components/Die"
import "./App.css"
import Confetti from "react-confetti"
import React, {
	useState,
} from 'react';
function ranNum() {
	return Math.ceil(Math.random() * 6)
	
}


function Title() {
	return ( 
		<div className = "Title" >
			<h2> Tenzies </h2> 
			<p> 
				Roll until all dice are the same. Click each die to freeze it at its current value between rolls. 
			</p> 
		</div>
	)
}


function Button(props) {
	return ( 
		<div className = "Button" >
			<button 
			onClick = {props.handleClick}>
				{props.tenzies ? "reset game" : "roll"}
			</button> 
		</div>
	)
}






export default function App() {
	const [tenzies, setTenzies] = useState(false)
	const [diceArray, setDiceArray] = useState([
		{on: false, value: 1, id: 1},
		{on: false, value: 1, id: 2},
		{on: false, value: 1, id: 3},
		{on: false, value: 1, id: 4},
		{on: false, value: 1, id: 5},

		{on: false, value: 1, id: 6},
		{on: false, value: 1, id: 7},
		{on: false, value: 1, id: 8},
		{on: false, value: 1, id: 9},
		{on: false, value: 1, id: 10},

	])
	React.useEffect(()=>{
		let truth = 0;
		for(let i = 0; i < diceArray.length; i++){
			if(diceArray[i].on){
				if(diceArray[0].value == diceArray[i].value){
					truth++;
				}
			}
			if(truth == 10){
				
				setTenzies(true)
			}
		}
	}, [diceArray])

	// React.useEffect(() => {
	// 	allNewDice();
	// }, []);	
	function allNewDice() {
		if(tenzies){
			setDiceArray(prevDice => {
				setTenzies(false)
				return prevDice.map(x => (x.on && {...x, on: false, value: ranNum() }));
			});
			console.log("tenzies is true!!!")
		}else{
			setDiceArray(prevDice => {
				return prevDice.map(x => (x.on ? { ...x } : { ...x, value: ranNum() }));
			});
			console.log("it shouldnt be true")
		}
	}



	function toggle(id) {	
        setDiceArray(prevDice => {
            return prevDice.map(die =>{
                return (die.id === id ? {...die, on: !die.on} : die)
                
            })
        })


	}

	let dices = diceArray.map(x => {
		return(
			<Die 
				key={x.id}
				id={x.id}
				on={x.on}
				value={x.value}

				handleClick={toggle}
			/>
		)
	})



	return ( 
		<main>
			{tenzies && <Confetti />}
			<Title />
			<div className="Dice">
				{dices}
			</div>
			<Button 
				handleClick={allNewDice}
				tenzies={tenzies}
			/>
		</main>
	)
}