import React from 'react'

const App = () => <>
    <Avatar name="Kitty" imageUrl="https://images.unsplash.com/photo-1572590285030-0ae6a4715671?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&h=300&q=60" />
    <Avatar name="Doggo" imageUrl="https://images.unsplash.com/photo-1524698604136-5a02fb1f7ec9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&h=300&q=60" />
    <Avatar name="Nice" imageUrl="https://picsum.photos/200?1" />
    <Avatar name="Random" imageUrl="https://picsum.photos/200?2" />
    <Avatar name="Photos" imageUrl="https://picsum.photos/200?3" />
    <Avatar name="With" imageUrl="https://picsum.photos/200?4" />
    <Avatar name="Random" imageUrl="https://picsum.photos/200?5" />
    <Avatar name="Content" imageUrl="https://picsum.photos/200?6" />
    <Picsum />
    <Picsum id={64} width={200} height={100} blur={1} />
    <Picsum id={100} width={200} height={200} blur={5} grayscale={true} />
</>

const Avatar = ({ name, imageUrl }) => {
    return <div className="avatar">
        <img className="profilepic" src={imageUrl} />
        <p className="name">{name}</p>
    </div>
}

const Picsum = ({ id=0, width=200, height=150, grayscale=false, blur=0 }) => {
    const params = []
    blur > 0 && params.push(`blur=${blur}`)
    grayscale && params.push('grayscale')
    return <img src={`https://picsum.photos/id/${id}/${width}/${height}?${params.join('&')}`} />
}

export default App
