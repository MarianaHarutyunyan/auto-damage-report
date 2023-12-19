import React, { FC } from "react";
import styled from "styled-components";

interface ReportButtonProps {
    onPositionChange: (positions: string[]) => void;
    options: string[];
}

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledButton = styled.button`
    width: 600px;
    padding: 20px 0px;
    background-color: #1a237e;
    color: #fff;
    font-size: 30px;
    border-radius: 10px;
    border: 1px solid transparent;
    cursor: pointer;
`

export const ReportButton: FC<ReportButtonProps> = ({ onPositionChange, options }) => {
    return (
        <ButtonContainer>
            <StyledButton onClick={() => onPositionChange(options)}>
                Rapporto danni
            </StyledButton>
        </ButtonContainer>
    )
}