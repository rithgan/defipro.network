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
import modal from '../modal'
import { theme } from './theme'
import HistoryModal from './HistoryModal'

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

const Farms = () => {
	const [toHarvest, setToHarvest] = useState(0)
	const [withdraw, setWithdraw] = useState(0)
	const [earnedBNB, setReferral] = useState(0)
	const [total, setTotal] = useState(0)

	let totalDeposit = getEarnedBnb().then((res) => setTotal(res))

	let totalReferral = getTotalUserDeposit().then((res) => setReferral(res))

	const harvest = async () => {
		let web3 = await modal()
		let fromAddr = await web3.eth.getAccounts().then((response) => response[0])
		fromAddr !== '' ? harvestContract(fromAddr) : null
	}
	let totalHarvest = getTotalUserEarnings().then((res) => setToHarvest(res))
	let totalWithdraw = getTotalWithdrawal().then((res) => setWithdraw(res))

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
									BNB to Harvest:
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
									BNB
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
									BNB to Wallet:
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
									{(withdraw / 1000000000000000000).toString().slice(0, 10)} BNB
									<Button
										sx={{
											marginLeft: '.5rem',
											borderRadius: '16px',
											color: '#fff',
										}}
										color="secondary"
										variant="contained"
									>
										<HistoryModal earnedBNB={earnedBNB} total={total} />
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

export default Farms
