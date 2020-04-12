## Sūrya's Description Report

### Files Description Table


|  File Name  |  SHA-1 Hash  |
|-------------|--------------|
| dist/BaseToken.dist.sol | d1db81da48657d37df5775fa0f5bbf59bc582c26 |


### Contracts Description Table


|  Contract  |         Type        |       Bases      |                  |                 |
|:----------:|:-------------------:|:----------------:|:----------------:|:---------------:|
|     └      |  **Function Name**  |  **Visibility**  |  **Mutability**  |  **Modifiers**  |
||||||
| **IERC20** | Interface |  |||
| └ | totalSupply | External ❗️ |   |NO❗️ |
| └ | balanceOf | External ❗️ |   |NO❗️ |
| └ | transfer | External ❗️ | 🛑  |NO❗️ |
| └ | allowance | External ❗️ |   |NO❗️ |
| └ | approve | External ❗️ | 🛑  |NO❗️ |
| └ | transferFrom | External ❗️ | 🛑  |NO❗️ |
||||||
| **ERC20Detailed** | Implementation | IERC20 |||
| └ | <Constructor> | Public ❗️ | 🛑  |NO❗️ |
| └ | name | Public ❗️ |   |NO❗️ |
| └ | symbol | Public ❗️ |   |NO❗️ |
| └ | decimals | Public ❗️ |   |NO❗️ |
||||||
| **Context** | Implementation |  |||
| └ | <Constructor> | Internal 🔒 | 🛑  | |
| └ | _msgSender | Internal 🔒 |   | |
| └ | _msgData | Internal 🔒 |   | |
||||||
| **SafeMath** | Library |  |||
| └ | add | Internal 🔒 |   | |
| └ | sub | Internal 🔒 |   | |
| └ | sub | Internal 🔒 |   | |
| └ | mul | Internal 🔒 |   | |
| └ | div | Internal 🔒 |   | |
| └ | div | Internal 🔒 |   | |
| └ | mod | Internal 🔒 |   | |
| └ | mod | Internal 🔒 |   | |
||||||
| **ERC20** | Implementation | Context, IERC20 |||
| └ | totalSupply | Public ❗️ |   |NO❗️ |
| └ | balanceOf | Public ❗️ |   |NO❗️ |
| └ | transfer | Public ❗️ | 🛑  |NO❗️ |
| └ | allowance | Public ❗️ |   |NO❗️ |
| └ | approve | Public ❗️ | 🛑  |NO❗️ |
| └ | transferFrom | Public ❗️ | 🛑  |NO❗️ |
| └ | increaseAllowance | Public ❗️ | 🛑  |NO❗️ |
| └ | decreaseAllowance | Public ❗️ | 🛑  |NO❗️ |
| └ | _transfer | Internal 🔒 | 🛑  | |
| └ | _mint | Internal 🔒 | 🛑  | |
| └ | _burn | Internal 🔒 | 🛑  | |
| └ | _approve | Internal 🔒 | 🛑  | |
| └ | _burnFrom | Internal 🔒 | 🛑  | |
| └ | _beforeTokenTransfer | Internal 🔒 | 🛑  | |
||||||
| **ERC20Capped** | Implementation | ERC20 |||
| └ | <Constructor> | Public ❗️ | 🛑  |NO❗️ |
| └ | cap | Public ❗️ |   |NO❗️ |
| └ | _beforeTokenTransfer | Internal 🔒 | 🛑  | |
||||||
| **ERC20Burnable** | Implementation | Context, ERC20 |||
| └ | burn | Public ❗️ | 🛑  |NO❗️ |
| └ | burnFrom | Public ❗️ | 🛑  |NO❗️ |
||||||
| **Address** | Library |  |||
| └ | isContract | Internal 🔒 |   | |
| └ | toPayable | Internal 🔒 |   | |
| └ | sendValue | Internal 🔒 | 🛑  | |
||||||
| **ERC165Checker** | Library |  |||
| └ | _supportsERC165 | Internal 🔒 |   | |
| └ | _supportsInterface | Internal 🔒 |   | |
| └ | _supportsAllInterfaces | Internal 🔒 |   | |
| └ | _supportsERC165Interface | Private 🔐 |   | |
| └ | _callERC165SupportsInterface | Private 🔐 |   | |
||||||
| **IERC165** | Interface |  |||
| └ | supportsInterface | External ❗️ |   |NO❗️ |
||||||
| **ERC165** | Implementation | IERC165 |||
| └ | <Constructor> | Internal 🔒 | 🛑  | |
| └ | supportsInterface | External ❗️ |   |NO❗️ |
| └ | _registerInterface | Internal 🔒 | 🛑  | |
||||||
| **IERC1363** | Interface | IERC20, IERC165 |||
| └ | transferAndCall | External ❗️ | 🛑  |NO❗️ |
| └ | transferAndCall | External ❗️ | 🛑  |NO❗️ |
| └ | transferFromAndCall | External ❗️ | 🛑  |NO❗️ |
| └ | transferFromAndCall | External ❗️ | 🛑  |NO❗️ |
| └ | approveAndCall | External ❗️ | 🛑  |NO❗️ |
| └ | approveAndCall | External ❗️ | 🛑  |NO❗️ |
||||||
| **IERC1363Receiver** | Interface |  |||
| └ | onTransferReceived | External ❗️ | 🛑  |NO❗️ |
||||||
| **IERC1363Spender** | Interface |  |||
| └ | onApprovalReceived | External ❗️ | 🛑  |NO❗️ |
||||||
| **ERC1363** | Implementation | ERC20, IERC1363, ERC165 |||
| └ | <Constructor> | Public ❗️ | 🛑  |NO❗️ |
| └ | transferAndCall | Public ❗️ | 🛑  |NO❗️ |
| └ | transferAndCall | Public ❗️ | 🛑  |NO❗️ |
| └ | transferFromAndCall | Public ❗️ | 🛑  |NO❗️ |
| └ | transferFromAndCall | Public ❗️ | 🛑  |NO❗️ |
| └ | approveAndCall | Public ❗️ | 🛑  |NO❗️ |
| └ | approveAndCall | Public ❗️ | 🛑  |NO❗️ |
| └ | _checkAndCallTransfer | Internal 🔒 | 🛑  | |
| └ | _checkAndCallApprove | Internal 🔒 | 🛑  | |
||||||
| **Ownable** | Implementation | Context |||
| └ | <Constructor> | Internal 🔒 | 🛑  | |
| └ | owner | Public ❗️ |   |NO❗️ |
| └ | isOwner | Public ❗️ |   |NO❗️ |
| └ | renounceOwnership | Public ❗️ | 🛑  | onlyOwner |
| └ | transferOwnership | Public ❗️ | 🛑  | onlyOwner |
| └ | _transferOwnership | Internal 🔒 | 🛑  | |
||||||
| **TokenRecover** | Implementation | Ownable |||
| └ | recoverERC20 | Public ❗️ | 🛑  | onlyOwner |
||||||
| **Roles** | Library |  |||
| └ | add | Internal 🔒 | 🛑  | |
| └ | remove | Internal 🔒 | 🛑  | |
| └ | has | Internal 🔒 |   | |
||||||
| **MinterRole** | Implementation | Context |||
| └ | <Constructor> | Internal 🔒 | 🛑  | |
| └ | isMinter | Public ❗️ |   |NO❗️ |
| └ | addMinter | Public ❗️ | 🛑  | onlyMinter |
| └ | renounceMinter | Public ❗️ | 🛑  |NO❗️ |
| └ | _addMinter | Internal 🔒 | 🛑  | |
| └ | _removeMinter | Internal 🔒 | 🛑  | |
||||||
| **OperatorRole** | Implementation | Context |||
| └ | <Constructor> | Internal 🔒 | 🛑  | |
| └ | isOperator | Public ❗️ |   |NO❗️ |
| └ | addOperator | Public ❗️ | 🛑  | onlyOperator |
| └ | renounceOperator | Public ❗️ | 🛑  |NO❗️ |
| └ | _addOperator | Internal 🔒 | 🛑  | |
| └ | _removeOperator | Internal 🔒 | 🛑  | |
||||||
| **BaseToken** | Implementation | ERC20Detailed, ERC20Capped, ERC20Burnable, ERC1363, MinterRole, OperatorRole, TokenRecover |||
| └ | <Constructor> | Public ❗️ | 🛑  | ERC20Detailed ERC20Capped |
| └ | mintingFinished | Public ❗️ |   |NO❗️ |
| └ | transferEnabled | Public ❗️ |   |NO❗️ |
| └ | mint | Public ❗️ | 🛑  | canMint onlyMinter |
| └ | transfer | Public ❗️ | 🛑  | canTransfer |
| └ | transferFrom | Public ❗️ | 🛑  | canTransfer |
| └ | finishMinting | Public ❗️ | 🛑  | onlyOwner canMint |
| └ | enableTransfer | Public ❗️ | 🛑  | onlyOwner |
| └ | removeOperator | Public ❗️ | 🛑  | onlyOwner |
| └ | removeMinter | Public ❗️ | 🛑  | onlyOwner |
| └ | _beforeTokenTransfer | Internal 🔒 | 🛑  | |


### Legend

|  Symbol  |  Meaning  |
|:--------:|-----------|
|    🛑    | Function can modify state |
|    💵    | Function is payable |
