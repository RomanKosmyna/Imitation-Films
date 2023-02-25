import {ClimbingBoxLoader, GridLoader} from "react-spinners";
import {useEffect, useState} from "react";

const LoadingSpinner = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, [])

    return(
        <ClimbingBoxLoader
            color="#231b56"
            size={30}
        />
    )
};

export {LoadingSpinner};