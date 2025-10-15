import React from 'react'

const Card = (props) => {
    // props is a form of object
    console.log(props)
  return (
    <div>
      <div className="card">
        <img src={props.img} alt="" />
        <h1>{props.user} </h1>
        <p>Lorem ipsum dolor  deleniti suscipit fuga quam dolorum sint. Earum itaque velit molestias, laudantium tenetur quo enim fugiat debitis?</p>
        <button>view profile</button>
      </div>
    </div>
  )
}

export default Card
