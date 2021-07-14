//SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.0;

import "./ERC721Tradeable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title Creature
 * Creature - a contract for my non-fungible creatures.
 */
contract Creature is ERC721Tradeable {
    constructor(address _proxyRegistryAddress)
        ERC721Tradeable("Creature", "OSC", _proxyRegistryAddress)
    {}

    function baseTokenURI() override public pure returns (string memory) {
        return "https://creatures-api.opensea.io/api/creature/";
    }

    function contractURI() public pure returns (string memory) {
        return "https://creatures-api.opensea.io/contract/opensea-creatures";
    }

      /**
   * Override isApprovedForAll to whitelist proxy accounts
   */
    function isApprovedForAll(
        address _owner,
        address _operator
    ) public override virtual view returns (bool isOperator) {
        // Use 0x58807baD0B376efc12F5AD86aAc70E78ed67deaE as the whitelisted address for ERC721's.
        if (_operator == address(0x58807baD0B376efc12F5AD86aAc70E78ed67deaE)) {
            return true;
        }
        
        return ERC721.isApprovedForAll(_owner, _operator);
    }
}