import React, {useState} from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Leaderboard = () => {

    const [leaderboard, setLeaderboard] = useState([])
    const { data: attemptData, isLoading } = useQuery(["attempts"])
    const { data: userData } = useQuery(['allUsers'], () => axios('api/users').then(res => res.data))

    let scoreArray = userData?.map((user) => {
        //tallying score
        let totalScore = 0 
        user.attempts.forEach((attempt) => {
            totalScore = totalScore + attempt.score
        })
        let scoreData = {score: totalScore, userName: user.username, image: user.image_url}
        return  scoreData
    })


    if(isLoading){
        return <p className='fixed self-center' >Loading...</p>
    }

    return(
        <>
        <h1>Hello from Leaderboard</h1>
        <div className="tabs">
            <a className="tab tab-lifted">Tab 1</a> 
            <a className="tab tab-lifted tab-active">Tab 2</a> 
            <a className="tab tab-lifted">Tab 3</a>
        </div>
        </>
    )
}

export default Leaderboard