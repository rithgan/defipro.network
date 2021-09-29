import React, { useState } from 'react'
import { Box, Card, CardHeader, CardContent } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Button from '@mui/material/Button'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
// import AllInclusiveIcon from '@mui/icons-material/AllInclusive'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { stakeContract } from '../contract'
import modal from '../modal'

const levels = [0, 1, 2, 3]

const theme = createTheme({
	components: {
		MuiCardHeader: {
			styleOverrides: {
				title: {
					fontSize: '2rem',
					fontWeight: '500',
				},
			},
		},
		MuiTypography: {
			styleOverrides: {
				root: {
					lineHeight: '1.575',
					fontSize: '0.9rem',
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					margin: '0px !important',
				},
			},
		},
		MuiAccordionSummary: {
			styleOverrides: {
				root: {
					padding: '18px 16px',
				},
			},
		},
		MuiAccordionDetails: {
			styleOverrides: {
				root: {
					padding: '18px 16px',
					background: '#f5f5f5 !important',
				},
			},
		},
	},
})

const Pools = () => {
	const [level0Value, setLevel0Value] = useState('')
	const [level1Value, setLevel1Value] = useState('')
	const [level2Value, setLevel2Value] = useState('')
	const [level3Value, setLevel3Value] = useState('')
	const deposit = async (level) => {
		let value
		switch (level) {
			case 0:
				value = level0Value
				break
			case 1:
				value = level1Value
				break
			case 2:
				value = level2Value
				break
			case 3:
				value = level3Value
				break
			default:
				console.error('level is missing')
		}
		let web3 = await modal()
		let fromAddr = await web3.eth.getAccounts().then((response) => response[0])
		if (value >= 0.05 && fromAddr !== '') stakeContract(value, level, fromAddr)
	}
	return (
		<>
			<ThemeProvider theme={theme}>
				<Box
					sx={{
						flexGrow: 1,
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
						<CardHeader title="Stake BNB"></CardHeader>
						<CardContent sx={{ p: '18px 16px' }}>
							<Typography
								sx={{ display: 'inline-block', width: '32%', flexShrink: 0 }}
							>
								Days
							</Typography>
							<Typography
								sx={{
									display: 'inline-block',
									width: '33%',
									color: 'text.secondary',
								}}
							>
								%Daily
							</Typography>
							<Typography
								sx={{
									width: '33%',
									display: 'inline-block',
									color: 'text.secondary',
								}}
							>
								Total
							</Typography>
						</CardContent>

						{/* plan0 */}
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1bh-content"
								id="panel1bh-header"
							>
								<Typography sx={{ width: '33%', flexShrink: 0 }}>
									Forever
								</Typography>
								<Typography sx={{ width: '33%', color: 'text.secondary' }}>
									2%
								</Typography>
								<Typography sx={{ color: 'text.secondary' }}>
									<span>&nbsp;&nbsp;</span>∞
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography
									sx={{
										display: 'inline-block',
										width: '50%',
									}}
								>
									Total Earn: ∞
								</Typography>
								<Paper
									component="form"
									sx={{
										p: '2px 4px',
										display: 'inline-block',
										alignItems: 'center',
										width: 200,
									}}
								>
									<InputBase
										value={level0Value}
										onChange={(e) => setLevel0Value(e.target.value)}
										sx={{ ml: 1, flex: 1 }}
										placeholder="Enter BNB account"
										inputProps={{ 'aria-label': 'enter bnb amount' }}
									/>
								</Paper>
								<Button onClick={() => deposit(levels[0])} variant="contained">
									Stake
								</Button>
							</AccordionDetails>
						</Accordion>
						{/* plan1 */}
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1bh-content"
								id="panel1bh-header"
							>
								<Typography sx={{ width: '33%', flexShrink: 0 }}>40</Typography>
								<Typography sx={{ width: '33%', color: 'text.secondary' }}>
									4%
								</Typography>
								<Typography sx={{ color: 'text.secondary' }}>160%</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography
									sx={{
										display: 'inline-block',
										width: '50%',
									}}
								>
									Total Earn: 0 BNB
								</Typography>
								<Paper
									component="form"
									sx={{
										p: '2px 4px',
										display: 'inline-block',
										alignItems: 'center',
										width: 200,
									}}
								>
									<InputBase
										value={level1Value}
										onChange={(e) => setLevel1Value(e.target.value)}
										sx={{ ml: 1, flex: 1 }}
										placeholder="Enter BNB account"
										inputProps={{ 'aria-label': 'enter bnb amount' }}
									/>
								</Paper>
								<Button onClick={() => deposit(levels[1])} variant="contained">
									Stake
								</Button>
							</AccordionDetails>
						</Accordion>
						{/* plan2 */}
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1bh-content"
								id="panel1bh-header"
							>
								<Typography sx={{ width: '33%', flexShrink: 0 }}>60</Typography>
								<Typography sx={{ width: '33%', color: 'text.secondary' }}>
									3.5%
								</Typography>
								<Typography sx={{ color: 'text.secondary' }}>210%</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography
									sx={{
										display: 'inline-block',
										width: '50%',
									}}
								>
									Total Earn: 0 BNB
								</Typography>
								<Paper
									component="form"
									sx={{
										p: '2px 4px',
										display: 'inline-block',
										alignItems: 'center',
										width: 200,
									}}
								>
									<InputBase
										value={level2Value}
										onChange={(e) => setLevel2Value(e.target.value)}
										sx={{ ml: 1, flex: 1 }}
										placeholder="Enter BNB account"
										inputProps={{ 'aria-label': 'enter bnb amount' }}
									/>
								</Paper>
								<Button onClick={() => deposit(levels[2])} variant="contained">
									Stake
								</Button>
							</AccordionDetails>
						</Accordion>
						{/* plan3 */}
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1bh-content"
								id="panel1bh-header"
							>
								<Typography sx={{ width: '33%', flexShrink: 0 }}>90</Typography>
								<Typography sx={{ width: '33%', color: 'text.secondary' }}>
									3%
								</Typography>
								<Typography sx={{ color: 'text.secondary' }}>270%</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography
									sx={{
										display: 'inline-block',
										width: '50%',
									}}
								>
									Total Earn: 0 BNB
								</Typography>
								<Paper
									component="form"
									sx={{
										p: '2px 4px',
										display: 'inline-block',
										alignItems: 'center',
										width: 200,
									}}
								>
									<InputBase
										value={level3Value}
										onChange={(e) => setLevel3Value(e.target.value)}
										sx={{ ml: 1, flex: 1 }}
										placeholder="Enter BNB account"
										inputProps={{ 'aria-label': 'enter bnb amount' }}
									/>
								</Paper>
								<Button onClick={() => deposit(levels[3])} variant="contained">
									Stake
								</Button>
							</AccordionDetails>
						</Accordion>
					</Card>
				</Box>
			</ThemeProvider>
		</>
	)
}

export default Pools
