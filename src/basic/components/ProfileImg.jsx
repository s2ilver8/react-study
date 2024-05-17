import React from 'react';

export default function ProfileImg({img, isNew}) {
    return (
        <div className='avatar'>
            <img className='photo' src={img} alt='avatar'/>
            { isNew && <span className='new'>New</span>}
        </div>
    );
}