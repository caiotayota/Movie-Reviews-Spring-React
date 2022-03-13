import MovieStars from "components/MovieStars";
import './styles.css'

function MovieScore() {

    const score = 3.5;
    const count = 13;

    return (
        <div className="moviereviews-score-container">
            <p className="moviereviews-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars />
            <p className="moviereviews-score-count">{count} reviews</p>
        </div>
    );
}

export default MovieScore;