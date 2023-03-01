# AirdropERC20
Contract AlanToken:
https://goerli.etherscan.io/address/0x88f5eb90a824E96DC265a87f7f5F65d53D963AAf
Contract Airdrope:
https://goerli.etherscan.io/address/0x78f1966e45fE8dfa9c15F8FD146E44A9324D1254
Transactions:
https://goerli.etherscan.io/tx/0x043f9baf1922e9c78da70ec3a06123878755023dd09f7acb505096cc18e9c03f to Yerasyl
https://goerli.etherscan.io/tx/0xd421bfeaba3a2e2af700301d688dddda4dc206f89320da733cd804618a314c9a to Dulat
Uniswap: https://goerli.etherscan.io/tx/0x8549ae5c1fcd4f7a97159c5e4ed523eb8750aa105ead8b05f288692e53bd4269
 

Remix:
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract AlanToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("AlanToken", "ALA") {
        _mint(msg.sender, initialSupply);
    }

    function decimals() public view virtual override returns (uint8) {
        return 0;
    }
}

// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Airdrop {
    ERC20 public token;

    constructor (ERC20 _token) {
        token = _token;
    }

    function airdrop(address[] memory recipients, uint256[] memory amounts) public {
        require(recipients.length == amounts.length, "Invalid airdrop parameters");

        for (uint256 i = 0; i < recipients.length; i++) {
            require(token.transferFrom(msg.sender, recipients[i], amounts[i]), "Failed to transfer tokens");
        }
    }
}

GitHub:
https://github.com/Papaz228/AirdropERC20
Render:
https://airdroperc20alantoken.onrender.com/airdrop.html
Transactions:
https://goerli.etherscan.io/tx/0xbaf726385ff75b2b680bbd12238e380f17eb11a64168148a3602c412a4b86825 to Ablai
https://goerli.etherscan.io/tx/0x093fe9f7fa82b330ae896f9d4ca95408423e0866a28d5d8fc6e9ccaa9e02ad73 to Angelina
 
 

