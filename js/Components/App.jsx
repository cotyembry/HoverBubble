import React from 'react';

import Parent from './Parent.jsx';

export default class App extends React.Component {
	render() {
		return (
			<div style={styles.root}>
				<div style={styles.child}></div>
			</div>
		)
	}
}

var styles = {
	root: {
		width: '100%',
		height: '100%',
		position: 'absolute',
	},
	child: {
		width: '200px',
		height: '200px',
		backgroundColor: 'yellow',
		left: '50%',
		top: '28px'
	}
}
