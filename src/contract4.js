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
	let uint256 = 100000000000000000000
	console.log(typeof uint256.toString())
	// let val = uint256.toString()
	let val0 = uint256.toString()
	let val = Web3.utils.toWei(val0)
	console.log(val)
	let response = await bfmContract.methods
		.approve('0x35E58aAa00DD758049093ED7076478f5094c6d8A', val)
		.send({
			from: fromAddr,
			// gasLimit: 500000,
			// value: 0,
		})
		.then((res) => res.status)

	console.log('res:' + response)
	return response
}
