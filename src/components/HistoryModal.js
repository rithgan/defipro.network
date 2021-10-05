import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { getTotalUserDeposit, getEarnedBnb } from '../contract'
import PropTypes from 'prop-types'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: 'white',
}

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}

const tableCellStyle = {
  fontSize: '1.25rem',
}
export default function HistoryModal({ earnedBNB, total }) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  //   const [earnedBNB, setReferral] = React.useState(0)
  //   const [total, setTotal] = React.useState(0)
  //
  //   let totalDeposit = getEarnedBnb().then((res) => setTotal(res))
  //
  //   let totalReferral = getTotalUserDeposit().then((res) => setReferral(res))

  const rows = [
    createData('History', 0, 0),
    // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    // createData('Eclair', 262, 16.0, 24, 6.0),
    // createData('Cupcake', 305, 3.7, 67, 4.3),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
  ]
  return (
    <div>
      <span style={{ height: 'fit-content' }} onClick={handleOpen}>
        History
      </span>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h2" component="h2"> */}
          {/*   History */}
          {/* </Typography> */}
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}> */}
          {/*   Duis mollis, est non commodo luctus, nisi erat porttitor ligula. */}
          {/* </Typography> */}
          <AppBar position="static">
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, fontSize: '1.5rem', padding: '1rem' }}
              >
                HISTORY
              </Typography>
            </Toolbar>
          </AppBar>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={tableCellStyle} align="center">
                    Total Deposit
                  </TableCell>
                  {/* <TableCell>Dessert (100g serving)</TableCell> */}
                  <TableCell sx={tableCellStyle} align="center">
                    Total Earnings
                  </TableCell>
                  {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell> */}
                  {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    {/* <TableCell component="th" scope="row"> */}
                    {/*   {row.name} */}
                    {/* </TableCell> */}
                    <TableCell
                      sx={tableCellStyle}
                      component="th"
                      scope="row"
                      align="center"
                    >
                      {row.calories}
                    </TableCell>
                    <TableCell sx={tableCellStyle} align="center">
                      {row.fat}
                    </TableCell>
                    {/* <TableCell align="right">{row.carbs}</TableCell> */}
                    {/* <TableCell align="right">{row.protein}</TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Modal>
    </div>
  )
}

HistoryModal.propTypes = {
  earnedBNB: PropTypes.string,
  total: PropTypes.string,
}
