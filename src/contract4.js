import Web3 from 'web3'
import modal from './modal'
import bfmTokenabi from './bfmTokenabi'

//BFM token

const token = '0xd8e0e965b94C565f13b106F408D27ad7abfab698' //development
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
	let uint256 = 1000000000000000000s
	console.log(typeof uint256.toString())
	// let val = uint256.toString()
	let val0 = uint256.toString()
	let val = Web3.utils.toWei(val0)
	console.log(val)
	let response = await bfmContract.methods
		.approve('0xecFf8a0bf363F34bDBF71E528b680E0432eb307b', val)
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
		.allowance(fromAddr, '0xecFf8a0bf363F34bDBF71E528b680E0432eb307b')
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
