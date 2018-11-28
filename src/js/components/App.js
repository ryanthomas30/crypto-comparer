import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Header } from 'semantic-ui-react';
import { Bar, Pie } from 'nivo';

import MainHeader from './MainHeader';

import * as actions from '../actions';
// import * as actions from '../actions';

const styles = {
	mainContent: {
		margin: '48px',
		marginTop: '24px',
		padding: '48px',
		paddingTop: '24px'
	},
	label: {
		userSelect: 'none',
		cursor: 'pointer'
	}
};

class App extends Component {

	componentDidMount() {
		this.props.getCryptoData();
	}

	render() {
		const { ether, bitcoin } = this.props;
		const formatter = new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			minimumFractionDigits: 0
		});
		const barData = [
			{
				currency: 'BTC',
				price: Math.round(bitcoin.price)
			},
			{
				currency: 'ETH',
				price: Math.round(ether.price)
			}
		];
		const totalValue = Math.round(bitcoin.totalvolume24hto) + Math.round(ether.totalvolume24hto);
		const pieData = [
			{
				id: 'BTC',
				label: 'BTC',
				value: Math.round(bitcoin.totalvolume24hto)
			},
			{
				id: 'ETH',
				label: 'ETH',
				value: Math.round(ether.totalvolume24hto)
			}
		];
		const dog = () =>
			<div>
				Hello
			</div>;

		return (
			<div style={{ height: '100%', backgroundColor: '#FAFAFA' }} >
				<MainHeader />
				<div style={styles.mainContent} >
					<Header as='h1' >
						Price Comparison (USD)
					</Header>
					<Bar
						data={barData}
						width={window.innerWidth}
						height={800}
						keys={['price']}
						indexBy='currency'
						colors='nivo'
						colorBy='index'
						borderRadius={4}
						borderColor='inherit:darker(1.6)'
						labelSkipWidth={20}
						labelSkipHeight={17}
						labelTextColor='inherit:darker(1.6)'
						animate={true}
						motionStiffness={90}
						motionDamping={15}
						margin={{
							top: 48,
							right: 48,
							bottom: 48,
							left: 48
						}}
						padding={0.1}
						axisLeft={{
							tickSize: 5,
							tickPadding: 5,
							tickRotation: 0,
							legend: 'Price (USD)',
							legendOffset: -40
						}}
						axisBottom={{
							tickSize: 5,
							tickPadding: 5,
							tickRotation: 0,
							legend: 'Currency',
							legendPosition: 'middle',
							legendOffset: 32
						}}
					/>
					<Header as='h1' >
						Total Market Share (24h)
					</Header>
					<Pie
						data={pieData}
						width={window.innerWidth}
						height={800}
						innerRadius={0.5}
						padAngle={0.7}
						cornerRadius={4}
						margin={{
							top: 48,
							right: 48,
							bottom: 48,
							left: 48
						}}
						colors='nivo'
						colorBy='id'
						borderWidth={1}
						borderColor='inherit:darker(0.2)'
						enableRadialLabels={true}
						radialLabel={d => `${formatter.format(Math.round(d.value))}`}
						sliceLabel={d => `${d.id} (${Math.round(d.value / totalValue * 100)}%)`}
						slicesLabelsSkipAngle={10}
						slicesLabelsTextColor='#333333'
						animate={true}
						motionStiffness={90}
						motionDamping={15}
					/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	ether: state.crypto.ether,
	bitcoin: state.crypto.bitcoin
});

App.defaultProps = {
	ether: {},
	bitcoin: {}
};

export default connect(mapStateToProps, actions)(App);
