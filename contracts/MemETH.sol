// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenContract {

    event token_deposit(address Depositer, uint256 Amount);
    event upVoting(address indexed _voter, address _tknAddress);
    event downVoting(address indexed _voter, address _tknAddress);

    ERC20 Token;
    address _tknAddress;
    address payable memer;
    uint256 private _totalCustomer;

    mapping (address => uint256) upVotes;
    mapping (address => uint256) downVotes;
    mapping (address => mapping(address => bool)) isVoted;


    function deposit(uint256 _amount) public {
        require(_amount > 0, "Gas is not free");

        bool isPayed = Token.transferFrom(msg.sender, memer, _amount);
        require(isPayed, "Token couldn't enter");
        emit token_deposit(msg.sender, _amount);
    }

    function downVote() public {
        require(isVoted[msg.sender][_tknAddress] == false, "You've already voted for this meme!");
        downVotes[_tknAddress] += 1;
        isVoted[msg.sender][_tknAddress] = true;
    }


    function upVote() public {
        require(isVoted[msg.sender][_tknAddress] == false, "You've already voted for this meme!");
        upVotes[_tknAddress] += 1;
        isVoted[msg.sender][_tknAddress] = true;
    }
}