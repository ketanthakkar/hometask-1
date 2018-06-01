import React, {Component} from 'React';
import { connect } from 'react-redux';

// components
import Image from './Image';
import Title from './Title';
import Description from './Description';
import Tagline from './Tagline';
import MovieVote from './MovieVote';

// styles
import '../styleModules/MoviePanel.css';

// action 
import getMovieById from '../actions/getMovieById';
import {CLEAN_MOVIE_BY_ID} from '../actions/actionsType';

class MoviePanel extends Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        this.props.clearStore();
    } 

    render() {
        let data = null
        if(this.props.movieInfo.movieById) {
            const {
                poster_path,
                title,
                overview,
                tagline,
                vote_average
            } = this.props.movieInfo.movieById;
    
            data =  (
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
        return data;
    }
}


const mapDispatchToProps = dispatch => {
    return {
      clearStore: () => dispatch({type:CLEAN_MOVIE_BY_ID}),
    }
}

const mapStateToProps = state => {
    return {
        movieInfo: state.getMovieById,
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MoviePanel);
