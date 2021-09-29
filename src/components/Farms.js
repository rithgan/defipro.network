import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { harvestContract } from '../contract'
import modal from '../modal'

const theme = createTheme({
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
	},
})

const Farms = () => {
	const harvest = async () => {
		let web3 = await modal()
		let fromAddr = await web3.eth.getAccounts().then((response) => response[0])
		fromAddr !== '' ? harvestContract(fromAddr) : null
	}
	return (
		<>
			<ThemeProvider theme={theme}>
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
									sx={{ fontWeight: '500', fontSize: '1.25rem' }}
									variant="body2"
									color="text.secondary"
								>
									0.00000000 BNB
									<Button
										onClick={harvest}
										sx={{ marginLeft: '.5rem' }}
										variant="contained"
									>
										Harvest
									</Button>
								</Typography>
								<Typography variant="body3" color="text.secondary">
									$ 0.00000000
								</Typography>
							</CardContent>
							<CardContent>
								<Typography variant="body3" component="p">
									BNB to Wallet:
								</Typography>
								<Typography
									sx={{ fontWeight: '500', fontSize: '1.25rem' }}
									variant="body2"
									color="text.secondary"
								>
									0.00000000 BNB
									<Button sx={{ marginLeft: '.5rem' }} variant="contained">
										History
									</Button>
								</Typography>
								<Typography variant="body3" color="text.secondary">
									$ 0.00000000
								</Typography>
							</CardContent>
						</CardContent>
					</Card>
				</Box>
			</ThemeProvider>
		</>
	)
}

export default Farms
