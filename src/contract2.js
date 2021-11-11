import Web3 from 'web3'
import modal from './modal'
import busdTokenabi from './busdTokenabi'

const token = '0xAC212351dC5E1d056D5a36E00A62BA748CbF694c' //development
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
	let uint256 = 1000000000000000
	console.log(uint256)

	busdContract.methods
		.approve('0x35E58aAa00DD758049093ED7076478f5094c6d8A', uint256)
		.send({
			from: fromAddr,
			// value: uint256,
		})
		.then((res) => console.log(res))
}
