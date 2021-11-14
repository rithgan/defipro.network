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
import { getTotalDepositBfm, getTotalUserDepositBfm } from '../contract3'
import { checkApproveStatusBfm } from '../contract4'
import modal from '../modal'

const ItemPaper = styled(Paper)(() => ({
	margin: '1rem',
	padding: '1.75rem',
	background: 'rgb(19, 20, 25)',
	color: '#fff',
	borderRadius: '16px',
	boxShadow: '0 0 8px 2px rgb(0 0 0 / 8%)',
}))
const BFM = () => {
	const [total, setTotal] = useState(0)
	const [referral, setReferral] = useState(0)
	const [approved, setApproved] = useState(false)

	let totalDeposit = getTotalDepositBfm().then((res) => setTotal(res))
	let totalReferral = getTotalUserDepositBfm().then((res) => setReferral(res))
	useEffect(async () => {
		let web3 = await modal()
		let fromAddr = await web3.eth.getAccounts().then((response) => response[0])
		if (window.web3) {
			checkApproveStatusBfm(fromAddr).then((res) =>
				res > 0 ? setApproved(true) : null
			)
		}
	}, [])
	return (
		<>
			{/* <Grid container spacing={4}> */}
			<Grid item sm={12} md={6} sx={{ marginTop: '16px' }}>
				<ItemPaper>
					<Typography variant="h5" sx={{ textAlign: 'center' }}>
						Total Value Deposited
					</Typography>
					<Typography variant="h5" sx={{ textAlign: 'center' }}>
						{(total / 1000000000000000000).toString().slice(0, 10)} BFM
					</Typography>
				</ItemPaper>
			</Grid>
			{/* <Grid item sm={12} md={4} sx={{ marginTop: '16px' }}> */}
			{/* 	<ItemPaper> */}
			{/* 		<Typography variant="h5" sx={{ textAlign: 'center' }}> */}
			{/* 			Total BFM Mint */}
			{/* 		</Typography> */}
			{/* 		<Typography variant="h5" sx={{ textAlign: 'center' }}> */}
			{/* 			{((total / 1000000000000000000) * 5).toString().slice(0, 10)} BFM */}
			{/* 		</Typography> */}
			{/* 	</ItemPaper> */}
			{/* </Grid> */}
			<Grid item sm={12} md={6} sx={{ marginTop: '16px' }}>
				<ItemPaper>
					<Typography variant="h5" sx={{ textAlign: 'center' }}>
						User Total Deposit
					</Typography>
					<Typography variant="h5" sx={{ textAlign: 'center' }}>
						{(referral / 1000000000000000000).toString().slice(0, 10)} BFM
					</Typography>
				</ItemPaper>
			</Grid>
			<Grid item>
				<PoolCards token="BFM" approved={approved} />
			</Grid>
			<Grid item xs={12} sm={12} md={4}>
				<Farms token="BFM" />
				<Stats token="BFM" />
			</Grid>
			<Grid item xs={12} sm={12} md={8}>
				<Affiliate />
			</Grid>
		</>
	)
}

export default BFM
