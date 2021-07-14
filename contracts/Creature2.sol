//SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Creature2 is ERC721, Ownable {
    using Counters for Counters.Counter;
    using Strings for uint256;
    Counters.Counter private _tokenIds;
    mapping(uint256 => string) private _tokenURIs;
    constructor() ERC721("Creature2", "C2") {
    }

    function _setTokenURI(uint256 tokenId, string memory _tokenURI)
        internal
        virtual
    {
        _tokenURIs[tokenId] = _tokenURI;
    }

    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );
        string memory _tokenURI = _tokenURIs[tokenId];
        return _tokenURI;
    }

    function mint(address recipient, string memory uri)
        public
        returns (uint256)
    {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, uri);
        return newItemId;
    }
      
   /**
   * Override isApprovedForAll to whitelist proxy accounts
   */
    function isApprovedForAll(
        address _owner,
        address _operator
    ) public override view returns (bool isOperator) {
        // Use 0x58807baD0B376efc12F5AD86aAc70E78ed67deaE as the whitelisted address for ERC721's.
        if (_operator == address(0x58807baD0B376efc12F5AD86aAc70E78ed67deaE)) {
            return true;
        }
        
        return ERC721.isApprovedForAll(_owner, _operator);
    }
}
