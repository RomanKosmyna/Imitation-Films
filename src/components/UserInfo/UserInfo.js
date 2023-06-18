import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useState} from "react";
import user from '../../images/obi.png';

import {
    ArrowRightOnRectangleIcon, ChevronDownIcon,
    ChevronLeftIcon,
    CogIcon
} from "@heroicons/react/24/solid";
import {MoonIcon, SunIcon} from "@heroicons/react/24/outline";

import {CSSTransition} from "react-transition-group";

import './UserInfo.css';

const UserInfo = () => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open)
        console.log(open)
    }
    return (
        <Navbar>
            <NavItem icon={<ChevronDownIcon/>} onClick={toggleOpen}>
                <DropdownMenu/>
            </NavItem>
        </Navbar>
    );
};

function Navbar(props) {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">{props.children}</ul>
        </nav>
    );
}

function NavItem(props) {
    const [open, setOpen] = useState(false);
    return (
        <li className="nav-item">
            <Link to={"#"} className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </Link>
            {open && props.children}
        </li>
    );
}

function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const isDarkMode = useSelector(state => state.theme);
    const dispatch = useDispatch();

    const toggleTheme = () => {
        dispatch({type: 'toggleDarkMode'})
    }

    function DropdownItem(props) {
        return (
            <Link to={"#"} className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </Link>
        );
    }
    return (
        <div className="dropdown">
            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                >
                <div className="menu">
                    <DropdownItem leftIcon={<img className={'user'} src={user} alt={'profile'}/>}>Tom Cruise</DropdownItem>
                    <DropdownItem
                        leftIcon={<CogIcon />}
                        rightIcon={<ChevronLeftIcon />}
                        goToMenu="settings">
                        Settings
                    </DropdownItem>
                    <DropdownItem leftIcon={<ArrowRightOnRectangleIcon/>}>Log out</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'settings'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                >
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ChevronLeftIcon/>}>
                        <h2>Theme Mode</h2>
                    </DropdownItem>

                    <div onClick={toggleTheme}>
                        <DropdownItem leftIcon={isDarkMode ? <SunIcon/> : <MoonIcon/>}>
                            Change Theme
                        </DropdownItem>
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
}

export {UserInfo};