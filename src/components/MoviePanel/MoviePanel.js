import React, {Component} from 'React';
import mockData2 from '../../mockData2';
import Image from '../Image';
import Title from '../Title';
import Description from '../Description';
import Tagline from '../Tagline';
import MovieVote from '../MovieVote';
import './MoviePanel.css';

class MoviePanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            poster_path,
            title,
            overview,
            tagline,
            vote_average
        } = this.props;

        return (
            <div className = 'moviePanel-wrapper'>
                <div className = 'moviePanel-column-left'>
                <Image src = {poster_path} alt = {title} />
                </div>
                <div  className = 'moviePanel-column-right'>
                    <div className = 'moviePanel-oneline'>
                        <Title title = {title} />
                        <MovieVote vote = {vote_average} />
                    </div>
                    <Tagline tagline = {tagline} />
                    <Description desc = {overview} />
                </div>
            </div>
        )
    }
}

export default MoviePanel;
