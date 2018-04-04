import React, { Component } from 'react';
import Expo from 'expo';

export default class Game extends Component {
	render () {
		return (
			<Expo.GLView onContextCreate={this.onGLViewContextCreate}/>
		);
	}

	onGLViewContextCreate = (gl) => {
	}
}
