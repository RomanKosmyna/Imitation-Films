import GenreMenuMain from "./GenreMenuMain/GenreMenuMain";
import GenreMenuTop from "./GenreMenuTop/GenreMenuTop";
import {useAppSelector} from "../../../hooks";

import styles from "./GenreMenu.module.css";

interface IProps {
    activeGenre: string;
    setter: (value: string) => void;
}

const GenreMenu = ({activeGenre, setter}: IProps) => {
    const {genreMenu} = useAppSelector(state => state.toggleReducer);

    return (
        <>
            {genreMenu && (
                <div className={styles.GenreMenuContainer}>
                    <GenreMenuTop/>
                    <GenreMenuMain activeGenre={activeGenre} setter={setter}/>
                </div>
            )}
        </>
    );
};

export default GenreMenu;