import {ArrowUpIcon} from "@heroicons/react/24/solid";
import {useEffect, useState} from "react";

import './ButtonScrollToTop.css';

const ButtonScrollToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <div className={'scrollContainer'}>
            {showButton === true && <button className={'scrollUp'} onClick={scrollToTop}><ArrowUpIcon/></button>}
        </div>
    )
}
export {ButtonScrollToTop};