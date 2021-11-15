import Web3 from 'web3'
import modal from './modal'
import bfmTokenabi from './bfmTokenabi'

//BFM token

const token = '0x4C2ddAD14226B0DAf56b97E3121a56B3d2B3f95F' //prod
const tokenabi = bfmTokenabi

let tokenBFM = async () => {
	let web3 = await modal()
	let bfmToken = new web3.eth.Contract(tokenabi, token)
	return bfmToken
}

//BFM functions
export const approveContractBfm = async (value, fromAddr) => {
	let bfmContract = await tokenBFM()
	console.log(bfmContract.methods)
	console.log(fromAddr)
	let uint256 = 100000000000000000000
	console.log(typeof uint256.toString())
	// let val = uint256.toString()
	let val0 = uint256.toString()
	let val = Web3.utils.toWei(val0)
	console.log(val)
	let response = await bfmContract.methods
		.approve('0x11d4d0b5a63D77d9F0e405364c26De7eca239F02', val)
		.send({
			from: fromAddr,
			// gasLimit: 500000,
			// value: 0,
		})
		.then((res) => res.status)

	console.log('res:' + response)
	return response
}

export const checkApproveStatusBfm = async (fromAddr) => {
	let bfmContract = await tokenBFM()
	let response = await bfmContract.methods
		.allowance(fromAddr, '0x11d4d0b5a63D77d9F0e405364c26De7eca239F02')
		.call()
		.then((res) => res)
	console.log(response)
	return response
}

export const getTotalWithdrawalBfm = async () => {
	let bfmContract = await tokenBFM()

	let web3 = await modal()

	let fromAddr = await web3.eth.getAccounts().then((response) => response[0])
	let result = await bfmContract.methods

		.balanceOf(fromAddr)
		.call()
		.then((res) => res)
	// let result = web3.eth.getBalance(fromAddr).then((res) => res)

	return result
}
