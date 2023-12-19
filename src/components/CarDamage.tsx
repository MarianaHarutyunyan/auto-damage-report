import React, { FC } from 'react';
import { ApplicationConfigsOptions } from '../types';
import useFetchCircles from '../hooks/useFetchCircles';
import { getCurrentDots } from '../helpers/getCurrentDots';
import { CircleTypes } from '../types/CircleTypes';
import { circles } from '../constants/circles';
import { Loading } from './Loading';
import { CarImage } from './CarImage';
import { Circle } from './Circle';
import { RapportoButton } from './RapportoButton';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    max-width: 800px;
    margin: 70px auto;
`

export const CarDamage: FC<ApplicationConfigsOptions> = ({ initializedOptions, onComplete, onPositionChange }) => {
    const { options, setIsCirclesLoading, isCirclesLoading } = useFetchCircles(initializedOptions);

    const handleCircleClick = (circleId: string) => {
        setIsCirclesLoading(true);
        const dots = getCurrentDots(options, circleId);
        onComplete(dots);
    };

    return isCirclesLoading ? (
        <Loading />
    ) : (
        <Container>
            <CarImage />
            {circles?.map((circle: CircleTypes) => {
                const isDamaged = options?.includes(circle.id);
                return (
                    <Circle
                        key={circle.id}
                        circle={circle}
                        isDamaged={isDamaged}
                        handleCircleClick={handleCircleClick} />
                )
            })}
            <RapportoButton onPositionChange={onPositionChange} options={options} />
        </Container>
    )
};