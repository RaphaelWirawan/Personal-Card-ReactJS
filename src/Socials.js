import React from 'react';
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';
import ReactTooltip from "react-tooltip";

export default function Socials() {

    const Container = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        height: 10vh;
        width: 50vh;
    `;

    const Icon = (props) => (
        <SocialIcon {...props} style={{ width: 32, height: 32 }} />
    )

    return (
        <Container>
            <Icon data-tip="RaphaelWirawan" url="http://github.com/RaphaelWirawan" bgColor="#474747" />
            <Icon data-tip="RaphaelWirawan" url="http://linkedin.com/in/RaphaelWirawan" />
            <Icon data-tip="RaphaelWirawan" url="http://instagram.com/RaphaelWirawan" bgColor="#e04c8f" />
            <Icon data-tip="alessandrowirawan@gmail.com" url="mailto:alessandrowirawan@gmail.com" />
            <Icon data-tip="089517805439" network="whatsapp" bgColor="#56d184" />
            <ReactTooltip />
        </Container>
    )
}
