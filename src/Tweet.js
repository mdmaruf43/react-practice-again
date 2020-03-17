import React from 'react'

const Tweets = (props) => {
    const {name, message} = props.testUser;
    return (
        <div className="tweet">
            <h3>{name}</h3>
            <p>{message}</p>
            <h3>Number of Likes</h3>
        </div>
    )
}

export default Tweets;