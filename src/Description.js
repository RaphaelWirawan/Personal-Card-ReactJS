import React from 'react';
import styled from "styled-components";

export default function Description() {

    const Description = styled.p`
        font-weight:100;
        font-size: 15px;
        text-align: center;
    `;

    return (
        <div>
            <Description>I'm an aspiring software engineer with an undying passion for programing. I love making things that are minimalist and is aesthetically pleasing.</Description>
        </div>
    )
}
