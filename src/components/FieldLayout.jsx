import { Component } from 'react';

export class FieldLayout extends Component {
	render() {
		const { field, onCellClick } = this.props;
		return (
			<div className="grid grid-cols-3 gap-2 bg-gray-100 p-5 rounded-lg shadow-lg">
				{field.map((cell, index) => (
					<button
						key={index}
						className="font-bold w-20 h-20 bg-purple-600 text-white text-3xl flex items-center justify-center rounded-lg shadow-md hover:bg-purple-700 hover:scale-110 transition-transform transition duration-200"
						onClick={() => onCellClick(index)}
					>
						{cell}
					</button>
				))}
			</div>
		);
	}
}
