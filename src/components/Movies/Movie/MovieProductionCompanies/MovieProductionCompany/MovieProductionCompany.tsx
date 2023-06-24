import {FC} from "react";
import {imageBaseURL} from "../../../../../configs";

import styles from "./MovieProductionCompany.module.css";

interface ICompany {
    company: Company;
}

interface Company {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

const MovieProductionCompany: FC<ICompany> = ({company}) => {
    const {logo_path, name} = company;

    return (
        <>
            {logo_path !== null && (
                <div className={styles.companyLogo}>
                    <img src={imageBaseURL + logo_path} alt={name}/>
                </div>
            )}
        </>
    );
};

export default MovieProductionCompany;