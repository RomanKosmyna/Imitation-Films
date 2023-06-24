import {FC} from "react";

import styles from "./MovieProductionCompanies.module.css";
import MovieProductionCompany from "./MovieProductionCompany/MovieProductionCompany";

interface ICompanies {
    companies: ICompany[];
}

interface ICompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

const MovieProductionCompanies: FC<ICompanies> = ({companies}) => {

    return (
        <>
            {companies.length !== 0 && (
                <div className={styles.companiesContainer}>
                    {companies?.map((company) => (
                        <MovieProductionCompany key={company.id} company={company}/>
                    ))}
                </div>
            )}
        </>
    );
};

export default MovieProductionCompanies;