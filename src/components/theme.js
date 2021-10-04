import * as React from 'react'
import { createTheme } from '@mui/material/styles'
import { styled } from '@mui/material/styles'
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Typography,
  Paper,
  Grid,
  InputBase,
} from '@mui/material'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#0e40c3',
    },
  },
})

// const HeadingText = styled(Typography)(() => ({
//   textAlign: 'center',
//   fontSize: '1.875rem',
//   lineHeight: '2.225rem',
// }))
//
// const itemHeading = styled(`h4`)(() => ({
//   marginTop: '0px',
//   marginBottom: '0px',
//   marginLeft: '0.75rem',
//   paddingBottom: '0.35rem',
// }))
//
// const itemsection = styled(`section`)(() => ({
//   width: '100%',
//   padding: '0px !important',
// }))
//
// const item = styled(Card)(({ theme }) => ({
//   // ...theme.typography.body2,
//   paddingTop: '2rem',
//   paddingBottom: '2rem',
//   // textAlign: 'center',
//   color: theme.palette.text.secondary,
//   // display: 'flex',
// }))
//
// const itemContainer = styled(`div`)(({ theme }) => ({
//   display: 'flex',
// }))
//
// const itemContent = styled(CardContent)(({ theme }) => ({
//   flex: '1 1 0%',
//   textAlign: 'center',
//   padding: '0',
//   paddingBottom: '0 !important',
// }))
//
// const upperText = styled(Typography)(({ theme }) => ({
//   ...theme.typography.h5,
//   textAlign: 'center',
// }))
// const lowerText = styled(Typography)(({ theme }) => ({
//   ...theme.typography.body2,
//   textAlign: 'center',
// }))
//
// const itemInput = styled(InputBase)(() => ({
//   marginLeft: '0.75rem',
//   marginRight: '0.75rem',
//   // paddingLeft: '0.25rem',
//   // paddingRight: '0.25rem',
//   padding: '0.25rem 0.35rem',
//   background: '#f5f5f5 !important',
//   borderRadius: '4px',
// }))
//
// const itemButton = styled(Button)(() => ({}))
//
// export const HeadText = () => {
//   return <HeadingText />
// }
// export const ItemHeading = () => {
//   return <itemHeading />
// }
// export const ItemSection = () => {
//   return <itemsection />
// }
// export const Item = () => {
//   return <item />
// }
// export const ItemContainer = () => {
//   return <itemContainer />
// }
// export const ItemContent = () => {
//   return <itemContent />
// }
// export const UpperText = () => {
//   return <upperText />
// }
// export const LowerText = () => {
//   return <lowerText />
// }
// export const ItemInput = () => {
//   return <itemInput />
// }
// export const ItemButton = () => {
//   return <itemButton />
// }

// export default theme
