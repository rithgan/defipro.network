import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const Farms = () => {
	return (
		<>
			<Box>
				<Card>
					<CardHeader title="Your Farms"></CardHeader>
					<CardContent>
						<CardContent>
							<Typography variant="body3" component="p">
								BNB to Harvest:
							</Typography>
							<Typography variant="body2" color="text.secondary">
								0.00000000 BNB
							</Typography>
							<Typography variant="body3" color="text.secondary">
								$ 0.00000000
							</Typography>
						</CardContent>
						<CardContent>
							<Button variant="contained">Harvest</Button>
						</CardContent>
					</CardContent>
					<CardContent>
						<CardContent>
							<Typography variant="body3" component="p">
								BNB in Wallet:
							</Typography>
							<Typography variant="body2" color="text.secondary">
								0.00000000 BNB
							</Typography>
							<Typography variant="body3" color="text.secondary">
								$ 0.00000000
							</Typography>
						</CardContent>
						<CardContent>
							<Button variant="contained">History</Button>
						</CardContent>
					</CardContent>
				</Card>
			</Box>
		</>
	)
}

export default Farms
