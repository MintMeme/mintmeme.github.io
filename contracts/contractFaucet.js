var contractFaucet = new web3.eth.Contract(
[
    {
	"inputs": [],
	"stateMutability": "nonpayable",
	"type": "constructor"
	},
    {
	"inputs": [],
	"name": "amount",
	"outputs": [
	    {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
		}
	    ],
	"stateMutability": "view",
	"type": "function"
	},
    {
	"inputs": [
	    {
		"internalType": "address",
		"name": "recipient",
		"type": "address"
		}
	    ],
	"name": "claimZombie",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
	},
    {
	"inputs": [
	    {
		"internalType": "address",
		"name": "",
		"type": "address"
		}
	    ],
	"name": "lockTime",
	"outputs": [
	    {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
		}
	    ],
	"stateMutability": "view",
	"type": "function"
	},
    {
	"inputs": [],
	"name": "name",
	"outputs": [
	    {
		"internalType": "string",
		"name": "",
		"type": "string"
		}
	    ],
	"stateMutability": "view",
	"type": "function"
	},
    {
	"inputs": [],
	"name": "zombie",
	"outputs": [
	    {
		"internalType": "address",
		"name": "",
		"type": "address"
		}
	    ],
	"stateMutability": "view",
	"type": "function"
	}
], "0xa78f4c29dd4d4dfa1124cbcfe72da230f80879c8");