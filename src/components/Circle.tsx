import React, { FC } from "react";
import { CircleTypes } from "../types/CircleTypes";
import styled from "styled-components";

interface CircleProps {
    circle: CircleTypes;
    isDamaged: boolean;
    handleCircleClick: (circleId: string) => void;
}

const StyledCircle = styled.div<{
    $left: number;
    $top: number;
    $damaged: boolean;
}>`
  position: absolute;
  left: ${(props) => `${props.$left}%`};
  top: ${(props) => `${props.$top}%`};
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => (props.$damaged ? "#ef6c00" : "#fff")};
  border: 4px solid black;
  cursor: pointer;
`;

export const Circle: FC<CircleProps> = ({ circle, isDamaged, handleCircleClick }) => {
    return (
        <StyledCircle
            $damaged={isDamaged}
            $left={circle.x}
            $top={circle.y}
            onClick={() => handleCircleClick(circle.id)}
        />
    );
};