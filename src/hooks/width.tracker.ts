import {useEffect, useState} from "react";

export function useTrackWidth()  {
    const [innerWidth, setInnerWidth] = useState<number>(0);

    useEffect(() => {
        const handleWidth = () => {
            setInnerWidth(window.innerWidth);
        }

        handleWidth();

        window.addEventListener("resize", handleWidth);

        return () => {
            window.removeEventListener("resize", handleWidth);
        }
    },[])
    return innerWidth;
}