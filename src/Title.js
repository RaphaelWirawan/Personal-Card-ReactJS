import React from 'react';
import styled from "styled-components";

export default function Title() {

    const Container = styled.div`
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        height: 28vh;
        margin-bottom: 2vh;
    `;

    const Img = styled.img`
        height: 16vh;
        border-radius: 50%;
        filter: grayscale(80%);
    `;

    const Name = styled.h3`
        font-size: 25px;
        font-weight: 900;
    `;

    const Position = styled.h6`
        font-size: 15px;
        font-weight: 600;
    `;

    return (
        <Container>
            <Img src="/face2zoom.jpg" />
            <Name>Alessandro Raphael Wirawan</Name>
            <Position>Hobbyist Software Engineer</Position>
        </Container>
    )
}
