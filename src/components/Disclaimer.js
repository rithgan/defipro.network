import React from 'react'
import { Box, Card, CardHeader, CardContent, Typography } from '@mui/material'
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
	},
})

const Disclaimer = () => {
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
						<CardHeader
							sx={{ paddingBottom: '0px' }}
							title="Read before use"
						></CardHeader>
						<CardContent sx={{ paddingTop: '0px' }}>
							<Typography>
								The principal deposit cannot be withdrawn, the only return users
								can get are daily dividends and referral rewards. Payments is
								possible only if contract balance have enough BNB. Please
								analyze the transaction history and balance of the smart
								contract before investing. High risk - high profit, DYOR
							</Typography>
						</CardContent>
					</Card>
				</Box>
			</ThemeProvider>
		</>
	)
}

export default Disclaimer
