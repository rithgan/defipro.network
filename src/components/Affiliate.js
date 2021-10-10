import React, { useState, useEffect } from 'react'
import {
	Box,
	Card,
	CardHeader,
	CardContent,
	Typography,
	Paper,
	Button,
	// TextField,
	InputBase,
} from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import modal from '../modal'
import { theme } from './theme'
import '../styles/Styles.css'

const themeAffiliate = createTheme({
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
					fontSize: '2rem !important',
					fontWeight: '500',
				},
			},
		},
		MuiInputBase: {
			styleOverrides: {
				input: {
					padding: '0px',
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

const Affiliate = () => {
	const [referralUrl, setReferralUrl] = useState(
		`http://${window.location.host}?r=`
	)
	const [copy, setCopy] = useState('Copy')
	//
	// 	setReferralUrl(async () => {
	// 		let web3 = await modal()
	// 		let fromAddr = await web3.eth.getAccounts().then((response) => response[0])
	// 		return fromAddr
	// 	})
	useEffect(async () => {
		let web3 = await modal()
		let fromAddr = await web3.eth.getAccounts().then((response) => response[0])
		setReferralUrl(() => 'http://' + window.location.host + '?r=' + fromAddr)
	}, [referralUrl])
	window.onload = function () {
		setReferralUrl('')
	}
	return (
		<>
			{/* <ThemeProvider theme={theme}> */}
			<ThemeProvider theme={themeAffiliate}>
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
						<CardHeader title="Affiliate Program"></CardHeader>
						<CardContent>
							<Typography>1 LVL (your invited user) - 7%</Typography>
							<Typography>2 LVL (user invited by your 1 lvl) - 3%</Typography>
							<Typography>3 LVL - 2%</Typography>
							<Typography>4 LVL - 1%</Typography>
							<Typography>5 LVL - 1%</Typography>
						</CardContent>
						<div style={{ padding: '16px' }}>
							<Paper
								component="form"
								sx={{
									borderRadius: '16px',
									background: 'rgb(38, 39, 43)',
									p: '1rem',
									display: 'inline-block',
									alignItems: 'center',
									width: '100%',
									boxShadow: 'none',
								}}
							>
								<Typography
									sx={{
										marginBottom: '16px',
										fontSize: '1.3rem',
										fontWeight: '400',
									}}
								>
									Your personal link
								</Typography>

								{/* <TextField id="outlined-basic" variant="outlined"></TextField> */}
								{/* <Button variant="contained">Copy</Button> */}
								<InputBase
									value={referralUrl}
									sx={{
										flex: 1,
										background:
											'linear-gradient(rgb(97, 103, 116) 0%, rgb(64, 63, 76) 100%)',
										p: '10px',
										borderRadius: '4px',
										width: '80%',
									}}
									placeholder="Referral link"
									inputProps={{ 'aria-label': 'search google maps' }}
								/>
								<Button
									onClick={() => {
										navigator.clipboard.writeText(referralUrl)
										setCopy('Copied')
										setTimeout(() => {
											setCopy('Copy')
										}, 5000)
									}}
									// sx={{
									// 	p: '9px',
									// 	color: '#fff',
									// }}
									className="copy"
									aria-label="menu"
									variant="contained"
									color="secondary"
								>
									{copy}
								</Button>
							</Paper>
						</div>
						{/* <CardContent> */}
						{/* 	<Typography sx={{ marginTop: '0', marginBottom: '1rem' }}> */}
						{/* 		Invited users: 0 */}
						{/* 	</Typography> */}
						{/* 	<Typography sx={{ marginTop: '0', marginBottom: '1rem' }}> */}
						{/* 		Total Earnings: 0 BNB */}
						{/* 	</Typography> */}
						{/* </CardContent> */}
					</Card>
				</Box>
			</ThemeProvider>
			{/* </ThemeProvider> */}
		</>
	)
}

export default Affiliate
