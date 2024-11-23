import { Component } from 'react';
import PropTypes from 'prop-types';
import Information from './Information';
import Field from './Field';

export class GameLayout extends Component {
	render() {
		const { restartGame } = this.props;
		return (
			<div className="flex flex-col items-center justify-center h-screen">
				<div className="mb-4">
					<Information />
					<button
						onClick={restartGame}
						className="font-bold text-xl mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 hover:scale-110 transition-transform transition duration-200"
					>
						Начать заново
					</button>
				</div>
				<Field />
			</div>
		);
	}
}

GameLayout.propTypes = {
	restartGame: PropTypes.func.isRequired,
};
