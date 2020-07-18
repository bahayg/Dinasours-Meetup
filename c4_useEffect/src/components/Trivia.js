import React, { useState, useEffect } from 'react';
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
    )

}

export default Trivia;
