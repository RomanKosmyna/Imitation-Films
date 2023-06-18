import {useEffect, useState} from "react";

export function useScrollTracker() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const saveScroll = () => {
            setScroll(window.scrollY);
        }

        if (typeof window !== "undefined") {
            window.addEventListener("scroll", saveScroll);
        }

        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("scroll", saveScroll);
            }
        }
    },[]);
    return scroll;
}