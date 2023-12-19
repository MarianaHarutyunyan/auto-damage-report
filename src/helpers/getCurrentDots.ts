export const getCurrentDots = (options: string[], circleId: string) => {
    let dots = [...options, circleId];
    if (options.includes(circleId)) {
        dots = options.filter((damagedPlace) => damagedPlace !== circleId);
    }
    return dots;
};
