import React, { useState } from 'react'
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
import { getTotalDeposit, getTotalUserDeposit } from '../contract1'

const ItemPaper = styled(Paper)(() => ({
	margin: '1rem',
	padding: '1.75rem',
	background: 'rgb(19, 20, 25)',
	color: '#fff',
	borderRadius: '16px',
	boxShadow: '0 0 8px 2px rgb(0 0 0 / 8%)',
}))
const BUSD = () => {
	const [total, setTotal] = useState(0)
	const [referral, setReferral] = useState(0)

	let totalDeposit = getTotalDeposit().then((res) => setTotal(res))
	let totalReferral = getTotalUserDeposit().then((res) => setReferral(res))
	return (
		<>
			{/* <Grid container spacing={4}> */}
			<Grid item sm={12} md={4} sx={{ marginTop: '16px' }}>
				<ItemPaper>
					<Typography variant="h5" sx={{ textAlign: 'center' }}>
						Total Value Deposited
					</Typography>
					<Typography variant="h5" sx={{ textAlign: 'center' }}>
						{(total / 1000000000000000000).toString().slice(0, 10)} BUSD
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
						{(referral / 1000000000000000000).toString().slice(0, 10)} BUSD
					</Typography>
				</ItemPaper>
			</Grid>
			<Grid item>
				<PoolCards token="BUSD" />
			</Grid>
			<Grid item xs={12} sm={12} md={4}>
				<Farms />
				<Stats />
			</Grid>
		</>
	)
}

export default BUSD
