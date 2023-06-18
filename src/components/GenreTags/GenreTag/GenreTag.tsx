import {FC} from "react";

interface IProps {
    genre: number;
}

const GenreTag: FC<IProps> = () => {
    return (
        <div>
            {/*<Link to={`/genres/${id}?${name}`} state={{id: genre.id.toString(), name: name}}>{name}</Link>*/}
        </div>
    );
};

export default GenreTag;