const defaultOptionsOnlyForDev = {
    initializedOptions: ["A1", "B3", "C5"],
    onComplete: (positions: string[]) => {
        console.log('onComplete worked!', positions);
    },
    onPositionChange: (positions: string[]) => {
        console.debug('onPositionChange worked!', positions)
    },
    onInit: () => {
        console.debug('_Effector Initialization_')
    }
};

export default defaultOptionsOnlyForDev;