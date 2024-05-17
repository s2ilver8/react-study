import React, { useMemo, useReducer } from 'react';
import personReducer from './person-reducer';

export default function AppMentorsButton() {
    const [person, dispatch] = useReducer(personReducer, initialPerson);
    // dispatch: personReducer 를 호출함

    const handleUpdate = () => {
        const prev = prompt(`whoes name do you want to change?`);
        const current = prompt(`what name do you want to change`)

        dispatch({type: 'updated', prev, current})
    };

    const handleAdd = () => {
        const name = prompt(`Please Enter the name of the mentor you want to add`);
        const title = prompt(`Please Enter the title of the mentor you want to add`);

        dispatch({type: 'added', name, title})
    };

    const handleDelete = () => {
        const name = prompt(`Please Enter the name of the mentor you want to delete`);

        dispatch({type: 'deleted', name})
    };

    return (
        <div>
            <h1>
                {person.name}는 {person.title}
            </h1>
            <p> {person.name}의 멘토는: </p>
            <ul>
                {person.mentors.map((mentor, index) => (
                    <li key={index}>
                        {mentor.name} ({mentor.title})
                    </li>
                ))}
            </ul>
            <Button text='멘토 이름 바꾸기' onClick={handleUpdate}/>
            <Button text='멘토 추가하기' onClick={handleAdd}/>
            <Button text='멘토 삭제하기' onClick={handleDelete}/>
        </div>
    );
}

function Button( {text, onClick} ) {
    console.log('Button', text, 're-rendering!');
    
    const result = useMemo(() => calculateSomething(), []);
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: 'black',
                color: 'white',
                borderRadius: '20px',
                margin: '0.4rem'
            }}
        >
            {`${text} ${result}`}
        </button>
    )
}

function calculateSomething() {
    for (let i=0; i < 10000; i++) {
        console.log('💡');
    }
    return 10;
}

const initialPerson = {
    name: 'Lee',
    title: 'Junior Developer',
    mentors: [
        {
            name: 'Bob',
            title: 'Sinior Developer',
            id: `1`
        },
        {
            name: 'James',
            title: 'Sinior Developer',
            id: `2`
        }
    ]
};

