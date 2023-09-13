// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract LMAOToken is ERC20, Ownable {
    address public feeAddress;
    uint256 public feePercentage = 8;
    uint256 public precision = 10 ** uint256(decimals());

    constructor() ERC20("LMAOToken", "LMAO") {
        _mint(msg.sender, 1000000000 * precision);
        feeAddress = 0xD4C42e502669947139D736b693C97b82D4d01F48;
    }

    function transfer(
        address recipient,
        uint256 amount
    ) public override returns (bool) {
        uint256 preciseAmount = amount * precision;
        uint256 feeAmount = (amount * feePercentage * precision) / 100;

        super.transfer(feeAddress, feeAmount);
        super.transfer(recipient, (preciseAmount - feeAmount));
        return true;
    }
    function transferFrom(
    address sender,
    address recipient,
    uint256 amount
    ) public override returns (bool) {
        uint256 preciseAmount = amount * precision;
        uint256 feeAmount = (preciseAmount * feePercentage) / 100;
        super._transfer(sender, feeAddress, feeAmount);
        super._transfer(sender, recipient, preciseAmount - feeAmount);
        return true;
    }
}
