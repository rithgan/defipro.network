import React from 'react'
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
		MuiInputBase: {
			styleOverrides: {
				input: {
					padding: '0px',
				},
			},
		},
	},
})

const Affiliate = () => {
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
						<CardHeader title="Affiliate Program"></CardHeader>
						<CardContent>
							<Typography>1 LVL (your invited user) - 7%</Typography>
							<Typography>2 LVL (user invited by your 1 lvl) - 3%</Typography>
							<Typography>3 LVL - 1.5%</Typography>
							<Typography>4 LVL - 1%</Typography>
							<Typography>5 LVL - 0.5%</Typography>
						</CardContent>
						<div style={{ padding: '16px' }}>
							<Paper
								component="form"
								sx={{
									borderRadius: '16px',
									background: '#f5f5f5',
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
									Your personal link:
								</Typography>

								{/* <TextField id="outlined-basic" variant="outlined"></TextField> */}
								{/* <Button variant="contained">Copy</Button> */}
								<InputBase
									sx={{
										flex: 1,
										background: 'white',
										p: '10px',
										borderRadius: '4px',
									}}
									placeholder="Referall link"
									inputProps={{ 'aria-label': 'search google maps' }}
								/>
								<Button
									sx={{ p: '10px' }}
									aria-label="menu"
									variant="contained"
								>
									Copy
								</Button>
							</Paper>
						</div>
						<CardContent>
							<Typography sx={{ marginTop: '0', marginBottom: '1rem' }}>
								Invited users: 0
							</Typography>
							<Typography sx={{ marginTop: '0', marginBottom: '1rem' }}>
								Total Earnings: 0 BNB
							</Typography>
						</CardContent>
					</Card>
				</Box>
			</ThemeProvider>
		</>
	)
}

export default Affiliate
