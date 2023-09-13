// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.9.0;
import "@openzeppelin/contracts/interfaces/IERC20.sol";

interface ILMAOToken is IERC20 {
     function transfer(
            address recipient,
            uint256 amount
        ) public override returns (bool);
      
      function transferFrom(
        address sender,
        address recipient,
        uint256 amount
        ) public override returns (bool);
}