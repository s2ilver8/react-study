import React from 'react';

export default function AppWrap() {
    return (
        <div>
            <NavBar>
                <Avatar
                    image='https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fCVFRCU5NCU4NCVFQiVBMSU5QyVFRCU5NSU4NCUyMCVFQyU4MiVBQyVFQyVBNyU4NHxlbnwwfHwwfHx8MA%3D%3D'
                    name='Bob'
                    size={200}
                />
                <p>멍멍</p>
            </NavBar>

            <NavBar>
                <p>강아지다.</p>
            </NavBar>
        </div>
    );
}

function NavBar({ children }) {
    return (
        <header style={{ backgroundColor: 'yellow' }}> {children} </header>
    );
}

function Avatar({ image, name, size }) {
    return (
        <div>
            <img
            src={image}
            alt={`${name}`}
            width={size}
            height={size}
            style={{ borderRadius: '50%' }}
            />
        </div>
    )
}

