import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { ThemeProvider, createTheme, styled } from '@mui/material/styles'
import {
	harvestContract,
	getTotalUserEarnings,
	getTotalWithdrawal,
	getTotalUserDeposit,
	getEarnedBnb,
} from '../contract'
import {
	harvestContractBusd,
	getTotalUserEarningsBusd,
	// getTotalWithdrawalBusd,
	getTotalUserDepositBusd,
	getEarnedBusd,
} from '../contract1'
import {
	harvestContractBfm,
	getTotalUserEarningsBfm,
	// getTotalWithdrawalBfm,
	getTotalUserDepositBfm,
	getEarnedBfm,
} from '../contract3'
import { getTotalWithdrawalBusd } from '../contract2'
import { getTotalWithdrawalBfm } from '../contract4'
import modal from '../modal'
import { theme } from './theme'
import HistoryModal from './HistoryModal'
import PropTypes from 'prop-types'

const themeFarm = createTheme({
	...theme,
	components: {
		MuiTypography: {
			styleOverrides: {
				root: {
					lineHeight: '1.575',
					fontSize: '0.9rem',
				},
			},
		},
		MuiCardHeader: {
			styleOverrides: {
				title: {
					fontSize: '2rem',
					fontWeight: '500',
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					background: 'rgb(19, 20, 25) !important',
				},
			},
		},
	},
})

const Farms = ({ token }) => {
	const [toHarvest, setToHarvest] = useState(0)
	const [withdraw, setWithdraw] = useState(0)
	const [earnedBNB, setReferral] = useState(0)
	const [total, setTotal] = useState(0)

	let totalDeposit =
		token === 'BNB'
			? getEarnedBnb().then((res) => setTotal(res))
			: token === 'BUSD'
			? getEarnedBusd().then((res) => setTotal(res))
			: getEarnedBfm().then((res) => setTotal(res))

	let totalReferral =
		token === 'BNB'
			? getTotalUserDeposit().then((res) => setReferral(res))
			: token === 'BUSD'
			? getTotalUserDepositBusd().then((res) => setReferral(res))
			: getTotalUserDepositBfm().then((res) => setReferral(res))

	const harvest = async () => {
		let web3 = await modal()
		let fromAddr = await web3.eth.getAccounts().then((response) => response[0])
		fromAddr !== '' && token === 'BNB' ? harvestContract(fromAddr) : null
		fromAddr !== '' && token === 'BUSD' ? harvestContractBusd(fromAddr) : null
		fromAddr !== '' && token === 'Bfm' ? harvestContractBfm(fromAddr) : null
	}
	let totalHarvest =
		token === 'BNB'
			? getTotalUserEarnings().then((res) => setToHarvest(res))
			: token === 'BUSD'
			? getTotalUserEarningsBusd().then((res) => setToHarvest(res))
			: getTotalUserEarningsBfm().then((res) => setToHarvest(res))
	let totalWithdraw =
		token === 'BNB'
			? getTotalWithdrawal().then((res) => setWithdraw(res))
			: token === 'BUSD'
			? getTotalWithdrawalBusd().then((res) => setWithdraw(res))
			: getTotalWithdrawalBfm().then((res) => setWithdraw(res))

	return (
		<>
			{/* <ThemeProvider theme={theme}> */}
			<ThemeProvider theme={themeFarm}>
				<Box
					sx={{
						flexGrow: 1,
						// boxShadow: '0 0 8px 2px rgb(0 0 0 / 8%)',
						marginBottom: '16px',
						background: 'transparent',
					}}
				>
					<Card
						sx={{
							borderRadius: '16px',
							boxShadow: '0 0 8px 2px rgb(0 0 0 / 8%)',
						}}
					>
						<CardHeader title="Your Farms"></CardHeader>
						<CardContent sx={{ padding: '0px' }}>
							<CardContent>
								<Typography variant="body3" component="p">
									{token} to Harvest:
								</Typography>
								<Typography
									sx={{
										fontWeight: '500',
										fontSize: '1.25rem',
										marginTop: '0.2rem',
										display: 'flex',
										justifyContent: 'space-between',
									}}
									variant="body2"
									color="text.secondary"
								>
									{(toHarvest / 1000000000000000000).toString().slice(0, 10)}{' '}
									{token}
									<Button
										onClick={harvest}
										sx={{
											marginLeft: '.5rem',
											borderRadius: '16px',
											color: '#fff',
										}}
										variant="contained"
										color="secondary"
									>
										<span>Harvest</span>
									</Button>
								</Typography>
								{/* <Typography variant="body3" color="text.secondary"> */}
								{/* 	$ 0.00000000 */}
								{/* </Typography> */}
							</CardContent>
							<CardContent>
								<Typography variant="body3" component="p">
									{token} to Wallet:
								</Typography>
								<Typography
									sx={{
										fontWeight: '500',
										fontSize: '1.25rem',
										marginTop: '0.2rem',
										display: 'flex',
										justifyContent: 'space-between',
									}}
									variant="body2"
									color="text.secondary"
								>
									{(withdraw / 1000000000000000000).toString().slice(0, 10)}{' '}
									{token}
									<Button
										sx={{
											marginLeft: '.5rem',
											borderRadius: '16px',
											color: '#fff',
										}}
										color="secondary"
										variant="contained"
									>
										<HistoryModal token={token} />
									</Button>
								</Typography>
								{/* <Typography variant="body3" color="text.secondary"> */}
								{/* 	$ 0.00000000 */}
								{/* </Typography> */}
							</CardContent>
						</CardContent>
					</Card>
				</Box>
			</ThemeProvider>
			{/* </ThemeProvider> */}
		</>
	)
}

Farms.propTypes = {
	token: PropTypes.string,
}

export default Farms
