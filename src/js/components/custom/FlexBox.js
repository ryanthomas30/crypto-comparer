import React, { Component } from 'react';
import PropTypes from 'prop-types';

const mapping = {
	start: 'flex-start',
	end: 'flex-end',
	between: 'space-between',
	small: '12px',
	medium: '24px',
	large: '48px'
};

const wrapMap = (b) => {
	return b ? 'wrap' : 'nowrap';
};

const map = (input) => {
	if (input in mapping) {
		return mapping[input];
	}
	return input;
};

class FlexBox extends Component {
	render() {
		let { direction, justify, align, wrap,
			padding, paddingLeft, paddingRight, paddingTop, paddingBottom,
			margin, marginLeft, marginRight, marginTop, marginBottom } = this.props;
		/* Sets defaults if prop is undefined */
		const flexDirection = map(direction);
		const justifyContent = map(justify);
		const alignItems = map(align);
		const	flexWrap = wrapMap(wrap);
		/* PADDING */
		padding = map(padding);
		paddingLeft = map(paddingLeft);
		paddingRight = map(paddingRight);
		paddingTop = map(paddingTop);
		paddingBottom = map(paddingBottom);

		/* MARGIN */
		margin = map(margin);
		marginLeft = map(marginLeft);
		marginRight = map(marginRight);
		marginTop = map(marginTop);
		marginBottom = map(marginBottom);

		/* Merges props with style object */
		const finalStyling = Object.assign({
			display: 'flex', flexDirection, justifyContent, alignItems, flexWrap,
			padding, paddingLeft, paddingRight, paddingTop, paddingBottom,
			margin, marginLeft, marginRight, marginTop, marginBottom
		}, this.props.style);

		return (
			<div style={finalStyling}>
				{this.props.children}
			</div>
		);
	}
}

FlexBox.propTypes = {
	direction: PropTypes.string
};

FlexBox.defaultProps = {
	direction: 'column',
	justify: 'start',
	align: 'center',
	wrap: 'wrap'
};

export default FlexBox;
