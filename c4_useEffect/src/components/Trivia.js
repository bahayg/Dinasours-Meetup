import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './trivia.css'

const API_URL = "https://opentdb.com/api.php?amount=30&category=17&difficulty=easy"

const Trivia = () => {
    const [triviaResults, setTriviaResults ] = useState ([]);

    useEffect(() => {
        fetch(API_URL)
        .then(resp => resp.json())
        .then(json => 
            {
            setTriviaResults(json.results)
        }
        )
    }, []);

    return (
        <>
        <Jumbotron>
            <h1>Welcome to Science Quiz!</h1>
            <p>
                Fun way of learning! {'\n'} You can learn more about science and nature through this website by answering the trivia questions.  
            </p>
        </Jumbotron>
        
        <div>
            {triviaResults.map(trivia => (
                <div>
                <p id="question">{trivia.question} </p>
                <p>{trivia.incorrect_answers.map(incorrectAns => (
                    <p>{incorrectAns}</p>
                ))} </p>
                <p>{trivia.correct_answer}</p>
                </div>
            ))}
        </div>
        </>
    )

}

export default Trivia;
