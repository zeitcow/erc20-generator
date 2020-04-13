pragma solidity ^0.6.0;

import "../access/Roles.sol";

contract RolesMock is Roles {

    function setRoleAdmin(bytes32 roleId, bytes32 adminRoleId) public {
        _setRoleAdmin(roleId, adminRoleId);
    }

    function setupRole(bytes32 roleId, address account) public {
        _setupRole(roleId, account);
    }
}
