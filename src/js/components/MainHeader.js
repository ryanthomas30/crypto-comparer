import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import '../../css/MainHeader.css';

class MainHeader extends Component {
	render() {
		return (
			<div>
				<Menu style={{ borderRadius: '0px', height: '60px', paddingLeft: '12px', paddingRight: '12px',
					boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.12)' }} className='main-header' >
					<Container>
						<Menu.Item header >Crypto Compare</Menu.Item>
					</Container>
				</Menu>
			</div>
		);
	}
}

export default MainHeader;
