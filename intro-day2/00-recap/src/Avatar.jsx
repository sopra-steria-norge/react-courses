import React from "react"

const Avatar = ({ name, imageUrl }) => {
    return <div className="avatar">
        <img className="profilepic" src={imageUrl} />
        <p className="name">{name}</p>
    </div>
}

export default Avatar
