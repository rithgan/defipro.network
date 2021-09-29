import Web3 from 'web3'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'

const modal = async () => {
	const providerOptions = {
		/* See Provider Options Section */
		metamask: {
			id: 'injected',
			name: 'Metamask',
			type: 'injected',
			check: 'isMetaMask',
		},
		walletconnect: {
			package: WalletConnectProvider, // required
			options: {
				infuraId: '0x1E6b54f079157E58CC9b116F924B384509b63F82', //will support the following Mainnet (1), Ropsten (3), Rinkeby(4), Goerli (5) and Kovan (42)
				network: 'mainnet',
				qrcodeModalOptions: {
					mobileLinks: [
						'rainbow',
						'metamask',
						'argent',
						'trust',
						'imtoken',
						'pillar',
					],
					desktopLinks: ['encrypted ink'],
				},
			},
		},
	}
	const web3Modal = new Web3Modal({
		network: 'bsctestnet', // optional
		cacheProvider: true, // optional
		providerOptions, // required
	})
	const provider = await web3Modal.connect()
	// Subscribe to accounts change
	provider.on('accountsChanged', (accounts) => {
		console.log(accounts)
	})

	// Subscribe to chainId change
	provider.on('chainChanged', (chainId) => {
		console.log(chainId)
	})

	// Subscribe to provider connection
	provider.on('connect', (info) => {
		console.log(info)
	})

	// Subscribe to provider disconnection
	provider.on('disconnect', (error) => {
		console.log(error)
	})

	let web3 = new Web3(provider)

	return web3
}

export default modal
