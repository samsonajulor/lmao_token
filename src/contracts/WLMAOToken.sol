// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./interfaces/ILMAOToken.sol";
contract WLMAOToken is ERC20, Ownable {
    uint256 public precision = 10 ** uint256(decimals());
    address public LMAOTokenAddress = 0xB35B264b08322cc8A037762f778E5E4e2d3c1C2e;
    ILMAOToken public LMAOTokenContract;

    constructor() ERC20("WLMAOToken", "WLMAO") {
        _mint(msg.sender, 1000000000 * precision);
        LMAOTokenContract = ILMAOToken(LMAOTokenAddress);
    }

    function swapLMAOForWrappedLMAO(address sender, uint256 lmaotoken) public returns (bool) {
        require(LMAOTokenContract.transferFrom(sender, address(this), lmaotoken), "Transfer failed");
        _mint(sender, lmaotoken * precision);
        return true;
    }

    function swapWrappedLMAOForLMAO(address sender, uint256 wlmaotoken) public returns (bool) {
        require(balanceOf(sender) >= wlmaotoken * precision, "Insufficient balance");
        _burn(sender, wlmaotoken * precision);
        require(LMAOTokenContract.transfer(sender, wlmaotoken), "Transfer failed");
        return true;
    }
    function transferFrom(
    address sender,
    address recipient,
    uint256 amount
    ) public override returns (bool) {
        uint256 preciseAmount = amount * precision;
        super._transfer(sender, recipient, preciseAmount);
        return true;
    }

    function transfer(
        address recipient,
        uint256 amount
    ) public override returns (bool) {
        uint256 preciseAmount = amount * precision;
        super.transfer(recipient, preciseAmount);
        return true;
    }
}
