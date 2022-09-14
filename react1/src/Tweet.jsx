import React, {useState} from "react";

function Tweet(props) {
    const [likes, setLikes] = useState(0)

    const like = () => {
        setLikes(likes + 1)
    }

    const dislike = () => {
        setLikes(likes - 1)
    }

    return(
        <div className="tweet">
            <h3>{props.name}</h3>
            <p>{props.message}</p>
            <p>{likes} likes</p>
            <button onClick={like}>Like</button>
            <button onClick={dislike}>Dislike</button>
        </div>
    )
}

export default Tweet;