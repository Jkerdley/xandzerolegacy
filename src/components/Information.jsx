import { Component } from 'react';
import { connect } from 'react-redux';
import { InformationLayout } from './InformationLayout';
import { selectCurrentPlayer, selectIsDraw, selectIsGameEnded } from '../selectors';

class Information extends Component {
	render() {
		const { currentPlayer, isGameEnded, isDraw } = this.props;
		return <InformationLayout currentPlayer={currentPlayer} isGameEnded={isGameEnded} isDraw={isDraw} />;
	}
}

const mapStateToProps = (state) => ({
	currentPlayer: selectCurrentPlayer(state),
	isGameEnded: selectIsGameEnded(state),
	isDraw: selectIsDraw(state),
});

export default connect(mapStateToProps)(Information);
