import Web3 from 'web3'
import modal from './modal'
import busdTokenabi from './busdTokenabi'

//BUSD token

const token = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56' //prod
const tokenabi = busdTokenabi

let tokenBUSD = async () => {
	let web3 = await modal()
	let busdToken = new web3.eth.Contract(tokenabi, token)
	return busdToken
}

//BUSD functions
export const approveContract = async (value, fromAddr) => {
	let busdContract = await tokenBUSD()
	console.log(busdContract.methods)
	console.log(fromAddr)
	let uint256 = 100000000000000000000 //production amount
	// let uint256 = 100000 //test amount
	console.log(typeof uint256.toString())
	// let val = uint256.toString()
	let val0 = uint256.toString()
	let val = Web3.utils.toWei(val0)
	console.log(val)
	let response = await busdContract.methods
		.approve('0x35E58aAa00DD758049093ED7076478f5094c6d8A', val)
		.send({
			from: fromAddr,
			// gasLimit: 500000,
			// value: 0,
		})
		// .allowance(fromAddr, '0x35E58aAa00DD758049093ED7076478f5094c6d8A')
		// .call()

		.then((res) => res)

	console.log(response)
	return response
}

export const checkApproveStatus = async (fromAddr) => {
	let busdContract = await tokenBUSD()
	let response = await busdContract.methods

		.allowance(fromAddr, '0x35E58aAa00DD758049093ED7076478f5094c6d8A')
		.call()
		.then((res) => res)
	console.log(response)
	return response
}

export const getTotalWithdrawalBusd = async () => {
	let busdContract = await tokenBUSD()

	let web3 = await modal()

	let fromAddr = await web3.eth.getAccounts().then((response) => response[0])
	let result = await busdContract.methods

		.balanceOf(fromAddr)
		.call()
		.then((res) => res)
	// let result = web3.eth.getBalance(fromAddr).then((res) => res)

	return result
}
