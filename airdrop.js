var contractInstance;
async function connect() {
  if (window.ethereum) {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    window.web3 = new Web3(window.ethereum);
    const account = web3.eth.accounts;
    walletAddress = account.givenProvider.selectedAddress;
    console.log(`Wallet: ${walletAddress}`);
    document.getElementById("airdrop-button").style.display = "block";
    contractInstance = new web3.eth.Contract(abi, contractAddress);
  } else {
    console.log("No wallet");
  }
}
  
  const contractAddress = '0x78f1966e45fE8dfa9c15F8FD146E44A9324D1254';
  const abi = [
    {
      "inputs": [
        {
          "internalType": "contract ERC20",
          "name": "_token",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "recipients",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
        }
      ],
      "name": "airdrop",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "token",
      "outputs": [
        {
          "internalType": "contract ERC20",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];
    
  async function airdrop() {
  if (!walletAddress) {
  console.error("Please connect MetaMask first");
  return;
  }
  if (!contractInstance) {
    console.error("Please connect MetaMask and wait for the contract instance to be created");
    return;
  }
  var recipient = document.getElementById("recipient").value;
  var amount = document.getElementById("amount").value;
  
  if (!web3.utils.isAddress(recipient)) {
  console.error("Invalid recipient address");
  return;
  }
  
  if (!Number.isInteger(Number(amount)) || Number(amount) <= 0) {
  console.error("Invalid amount");
  return;
  }
  
  contractInstance.methods.airdrop([recipient], [amount]).send({ from: walletAddress })
  .then(function(receipt) {
  console.log(receipt);
  });
  }
