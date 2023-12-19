import React from "react";
import car from "../images/360_F_75218707_qj82dDV05WHYUC2klyPs1IJ2jNb8goBN.jpg";
import styled from "styled-components";

const StyledImage = styled.img`
    width: 100%;
    height: auto;
`;

export const CarImage = () => {
    return (
        <StyledImage
            src={car}
            alt="insurance-car-skeleton"
        />
    )
};
