import React from "react"

const Avatar = ({ name, imageUrl, className }) => {
    return <div className={`avatar ${className}`}>
        <img className="profilepic" src={imageUrl} />
        <p className="name">{name}</p>
    </div>
}

export default Avatar;
