import {useEffect, useRef, useState} from "react";

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState('');
    const firstDebounce = useRef(true);

    useEffect(() => {
        if (value && firstDebounce.current) {
            setDebouncedValue(value);
            firstDebounce.current = false;
        }
    })
}