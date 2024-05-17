import React from 'react';
import styled, { css } from 'styled-components';


const Containter = styled.div`
    display: flex;
`;

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid #3c5b69;
    color: #b9eaff;
    margin: 0.1em;
    padding: 0.25em 1em;
    ${(props) =>
        props.primary &&
        css`
            background: #009cd5;
            color: white;
        `
    };
`;

export default function StyledComponent() {
    return (
        <Containter>
            <Button>Normal Button</Button>
            <Button primary>Primary Button</Button>
        </Containter>
    );
}

