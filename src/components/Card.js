import React from "react";

const Card = (props) => {
    const {
        id,
        name,
        email
    } = props;
    return (
        <div className={"bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5"}>
            <img alt={"Robot here"} src={`https://robohash.org/${id}`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;