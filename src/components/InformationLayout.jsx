import { Component } from 'react';

export class InformationLayout extends Component {
	render() {
		const { currentPlayer, isGameEnded, isDraw } = this.props;
		let status = isDraw ? 'Ничья!' : isGameEnded ? `Победа: ${currentPlayer}` : `Ходит: ${currentPlayer}`;

		return <div className="text-2xl font-bold text-center">{status}</div>;
	}
}
