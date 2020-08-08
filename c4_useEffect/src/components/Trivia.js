import React, { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
// import './trivia.css'

const API_URL = "https://opentdb.com/api.php?amount=30&category=17&difficulty=easy"

const Trivia = () => {
    const [loadedQuestions, setLoadedQuestions ] = useState ([]);

    useEffect(() => {
        fetch(API_URL)
        .then(resp => resp.json())
        .then(json =>
            // console.log(json.results) 
            {
            setLoadedQuestions(json.results)
        }
        )
    }, []);

    const question = () => {
        loadedQuestions.map(loadedQuestion => {
            let formattedQuestion ={
                question: loadedQuestion.question
            };
            let answerChoices = [ ...loadedQuestion.incorrect_answers];
            formattedQuestion.answer = Math.floor(Math.random()*3) + 1;
            answerChoices.splice(
                formattedQuestion.answer - 1,
                0,
                loadedQuestion.correct_answer
                );
                answerChoices.forEach((choice, index) => {
                    formattedQuestion['choice' + (index + 1)] = choice;
                })
                return formattedQuestion
        })}
    

    return (
        <>
        <Jumbotron>
            <h1>Welcome to Science Quiz!</h1>
            <p> Fun way of learning!  </p>
            <p> The best trivia application on Science and Nature. </p> 
        </Jumbotron>

        <div>
            <p>{console.log(question)}</p>
        </div>
        </>
    )
}

export default Trivia;
