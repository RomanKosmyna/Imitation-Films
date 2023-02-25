import {Footer, Genres} from "../../components";

const GenresPage = () => {

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center',}}>
            <Genres/>
            <Footer/>
        </div>
);
};

export {GenresPage};