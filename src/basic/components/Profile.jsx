import React from 'react';
import ProfileImg from './ProfileImg';

export default function Profile({img, name, title, isNew}) {
    return (
        <div className='profile'>
            <ProfileImg img={img} isNew={isNew}/>
            <h1>{name}</h1>
            <p>{title}</p>
        </div>
    );
}