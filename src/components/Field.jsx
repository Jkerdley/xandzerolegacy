import { Component } from 'react';
import { connect } from 'react-redux';
import { FieldLayout } from './FieldLayout';
import { checkWinner } from './Utils/CheckWinner';
import { SET_DRAW, setField, SET_GAME_ENDED, setCurrentPlayer } from '../actions';

class Field extends Component {
	handleCellClick = (index) => {
		const { currentState, dispatch } = this.props;

		if (!this.canMakeMove(index, currentState)) {
			return;
		}

		const newField = [...currentState.field];
		newField[index] = currentState.currentPlayer;

		dispatch(setField(newField));

		if (checkWinner(newField, currentState.currentPlayer)) {
			dispatch(SET_GAME_ENDED);
		} else {
			this.switchPlayer(currentState.currentPlayer);
		}

		if (this.isDraw(newField) && !checkWinner(newField, currentState.currentPlayer)) {
			dispatch(SET_DRAW);
		}
	};

	canMakeMove(index, currentState) {
		return currentState.field[index] === '' && !currentState.isGameEnded;
	}

	isDraw(newField) {
		return newField.every((cell) => cell !== '');
	}

	switchPlayer(currentPlayer) {
		const nextPlayer = currentPlayer === 'X' ? 'O' : 'X';
		this.props.dispatch(setCurrentPlayer(nextPlayer));
	}

	render() {
		const { field } = this.props.currentState;
		return <FieldLayout field={field} onCellClick={this.handleCellClick} />;
	}
}

const mapStateToProps = (state) => ({
	currentState: state,
});

export default connect(mapStateToProps)(Field);
