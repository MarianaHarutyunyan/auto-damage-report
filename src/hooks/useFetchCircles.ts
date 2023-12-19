import { useEffect, useState } from "react";
import { useUnit } from "effector-react";
import { circlesStore, getCircles } from "../store/store";

const useFetchCircles = (initializedOptions: string[]) => {
    const damagedPlaces: string[] = useUnit(circlesStore);
    const [isCirclesLoading, setIsCirclesLoading] = useState<boolean>(false);
    const [options, setOptions] = useState<string[]>(initializedOptions);

    useEffect(() => {
        getCircles();
        setOptions(damagedPlaces);

        return () => {
            setIsCirclesLoading(false);
        }
    }, [damagedPlaces.length]);

    return {
        isCirclesLoading,
        options,
        setIsCirclesLoading,
    };
};

export default useFetchCircles;