import React from 'react';

const Challenge1 = () => (
    <div>
        <h1>{user.name}</h1>
        <p>{user.location}</p>
        <p>{user.foodType}</p>
        <p>{user.age}</p>
        <p>{user.likes}</p>
        <h3>{user.twitterUsername}</h3>
        <img src={user.avatar} alt="Avatar"/>
    </div>
)

const user = {

    name: "Chris on Code",
   
    location: "Las Vegas",
   
    foodType: "Everything",
   
    age: 28,
   
    likes: "Coding into the wee hours of the morning",
   
    twitterUsername: "chrisoncode",
   
    avatar:
   
      "https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png"
   
   };

export default Challenge1
   
   