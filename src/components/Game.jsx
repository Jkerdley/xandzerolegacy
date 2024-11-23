import { Component } from 'react';
import { connect } from 'react-redux';
import { RESTART_GAME } from '../actions';
import { GameLayout } from './GameLayout';

class Game extends Component {
	restartGame = () => {
		this.props.restartGame();
	};

	render() {
		return <GameLayout restartGame={this.restartGame} />;
	}
}

const mapDispatchToProps = (dispatch) => ({
	restartGame: () => dispatch(RESTART_GAME),
});

export default connect(null, mapDispatchToProps)(Game);
