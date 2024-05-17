import React from 'react';
import { useImmer } from 'use-immer';

export default function AppMentors() {
    const [person, updatePerson] = useImmer(initialPerson);
    const handleUpdate = () => {
        const prev = prompt(`whoes name do you want to change?`);
        const current = prompt(`what name do you want to change`)

        // Prev Code
        // setPerson(person => ({
        //     ...person,
        //     mentors: person.mentors.map((mentor) => {
        //         if(mentor.name === prev) {
        //             return { ...mentor, name: current };
        //         }
        //         return mentor;
        //     })
        // }))

        // Current Code
        updatePerson(person => {
            const mentor = person.mentors.find((mentor) => mentor.name === prev);

            mentor.name = current;
        })
    };

    const handleAdd = () => {
        const name = prompt(`Please Enter the name of the mentor you want to add`);
        const title = prompt(`Please Enter the title of the mentor you want to add`);

        // Prev Code
        // setPerson(person => ({
        //     ...person,
        //     mentors: [...person.mentors, {name, title}]
        // }))

        // Current Code
        updatePerson((person) => {
            person.mentors.push({name, title});
        })
    };

    const handleDelete = () => {
        const name = prompt(`Please Enter the name of the mentor you want to delete`);

        // Prev Code
        // setPerson(person => ({
        //     ...person,
        //     mentors: person.mentors.filter((mentor) => mentor.name !== name )
        // }))

        // Current Code
        updatePerson((person) => {
            // person.mentors.splice(person.mentors.indexOf(name), 1);

            person.mentors.splice(person.mentors.findIndex(m=> m.name === name), 1);
        })
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
            <button onClick={handleUpdate}>멘토 이름 바꾸기</button>
            <button onClick={handleAdd}>멘토 추가하기</button>
            <button onClick={handleDelete}>멘토 삭제하기</button>
        </div>
    );
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

