import React  from 'react';

const UserCard = ({user})=>{
    return(
        <div className ='card'>
            <div className='card-body'>
                <img src={user.avatar_url}/>
                <h1>{user.name}</h1>
                <p>{user.company}</p>
                <p>user.bio</p>
                <p>{user.url}</p>
                <p>{user.followers}</p>
                <p>{user.following}</p>
        
            </div>

        </div>
    )
};

export default UserCard;