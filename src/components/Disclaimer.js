import React from 'react'
import { Box, Card, CardHeader, CardContent, Typography } from '@mui/material'

const Disclaimer = () => {
	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<Card>
					<CardHeader title="Read before use"></CardHeader>
					<CardContent>
						<Typography>
							The principal deposit cannot be withdrawn, the only return users
							can get are daily dividends and referral rewards. Payments is
							possible only if contract balance have enough BNB. Please analyze
							the transaction history and balance of the smart contract before
							investing. High risk - high profit, DYOR
						</Typography>
					</CardContent>
				</Card>
			</Box>
		</>
	)
}

export default Disclaimer
