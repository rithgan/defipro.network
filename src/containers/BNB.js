import React, { useState, useEffect } from 'react'
import { Grid, Typography, Paper } from '@mui/material'
import Farms from '../components/Farms'
import PoolCards from '../components/PoolCards'
import Affiliate from '../components/Affiliate'
import Disclaimer from '../components/Disclaimer'
import Stats from '../components/Stats'
import Footer from '../components/Footer'
import {
	useTheme,
	ThemeProvider,
	createTheme,
	styled,
} from '@mui/material/styles'
import { getTotalDeposit, getTotalUserDeposit } from '../contract'
import axios from 'axios'

const ItemPaper = styled(Paper)(() => ({
	margin: '1rem',
	padding: '1.75rem',
	background: 'rgb(19, 20, 25)',
	color: '#fff',
	borderRadius: '16px',
	boxShadow: '0 0 8px 2px rgb(0 0 0 / 8%)',
}))
const BNB = () => {
	const [total, setTotal] = useState(0)
	const [referral, setReferral] = useState(0)

	let totalDeposit = getTotalDeposit().then((res) => setTotal(res))
	let totalReferral = getTotalUserDeposit().then((res) => setReferral(res))

	//var url = 'https://api.binance.com/api/v1/ticker/price?symbol=LTCBTC'

	//const proxyURL = 'https://cors-anywhere.herokuapp.com/'
	const [price, setPrice] = useState(0)

	useEffect(() => {
		axios
			// .get(
			// 	'https://api.bscscan.com/api?module=stats&action=busdprice&apikey=DS72VSGKID323BV1QFNHNCZPBFCYJ1S6YY'
			// )
			.get('https://api.binance.com/api/v1/ticker/price?symbol=BNBUSDP')
			.then((res) => setPrice(res.data.price))
			.catch((err) => console.log(err))
	}, [])
	console.log(price)
	return (
		<>
			{/* <Grid container spacing={4}> */}
			<Grid item sm={12} md={4} sx={{ marginTop: '16px' }}>
				<ItemPaper>
					<Typography variant="h5" sx={{ textAlign: 'center' }}>
						Total Value Deposited
					</Typography>
					<Typography variant="h5" sx={{ textAlign: 'center' }}>
						{(total / 1000000000000000000).toString().slice(0, 10)} BNB
					</Typography>
					<Typography
						variant="h6"
						sx={{ textAlign: 'center', color: '#c1c1c1' }}
					>
						{((price * total) / 1000000000000000000).toString().slice(0, 10)} $
					</Typography>
				</ItemPaper>
			</Grid>
			<Grid item sm={12} md={4} sx={{ marginTop: '16px' }}>
				<ItemPaper>
					<Typography variant="h5" sx={{ textAlign: 'center' }}>
						Total BFM Mint
					</Typography>
					<Typography variant="h5" sx={{ textAlign: 'center' }}>
						{((total / 1000000000000000000) * 5).toString().slice(0, 10)} BFM
					</Typography>
				</ItemPaper>
			</Grid>
			<Grid item sm={12} md={4} sx={{ marginTop: '16px' }}>
				<ItemPaper>
					<Typography variant="h5" sx={{ textAlign: 'center' }}>
						User Total Deposit
					</Typography>
					<Typography variant="h5" sx={{ textAlign: 'center' }}>
						{(referral / 1000000000000000000).toString().slice(0, 10)} BNB
					</Typography>
					<Typography
						variant="h6"
						sx={{ textAlign: 'center', color: '#c1c1c1' }}
					>
						{((price * referral) / 1000000000000000000).toString().slice(0, 10)}{' '}
						$
					</Typography>
				</ItemPaper>
			</Grid>
			<Grid item>
				<PoolCards token="BNB" />
			</Grid>
			<Grid item xs={12} sm={12} md={4}>
				<Farms token="BNB" />
				<Stats token="BNB" />
			</Grid>
			<Grid item xs={12} sm={12} md={8}>
				<Affiliate />
			</Grid>
		</>
	)
}

export default BNB
