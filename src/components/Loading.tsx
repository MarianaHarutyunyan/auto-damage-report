import React from "react";
import styled from 'styled-components';

const LoadingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Loading = () => {
    return (
        <LoadingContainer>
            <h2>Loading...</h2>
        </LoadingContainer>
    )
};