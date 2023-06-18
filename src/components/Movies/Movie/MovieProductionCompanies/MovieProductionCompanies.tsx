import {FC} from "react";

import styles from "./MovieProductionCompanies.module.css";
import MovieProductionCompany from "./MovieProductionCompany/MovieProductionCompany";

interface ICompanies {
    companies: object;
}

const MovieProductionCompanies: FC<ICompanies> = ({companies}) => {

    return (
        <>
            {companies.length !== 0 && (
                <div className={styles.companiesContainer}>
                    {companies?.map(company => (
                        <MovieProductionCompany key={company.id} company={company}/>
                    ))}
                </div>
            )}
        </>
    );
};

export default MovieProductionCompanies;