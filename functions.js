// Faucet (JOKERS)
function claimJokers() {
    var content = "Sending transaction from: ";
    content += jokerMaster;
    $("#lang").html(content);
    var event = contractFaucet.methods.claimJoker(jokerMaster).send({ from: jokerMaster })
        .then(function (receipt) {
            console.log(receipt);
    var content = "Transaction sent!: ";
    content += JSON.stringify(receipt.transactionHash);
    $("#lang").html(content);
        });;
};

function lockTimeJ() {
    //var content = "Your address: ";
    //content += JokerMaster;
    //$("#lang1").html(content);
    var event = contractFaucet.methods.lockTime(jokerMaster).call()
        .then(function (result) {
    var content = "Unix_timestamp: ";
            alert(result);
    content += JSON.stringify(result.toString());
    $("#lang1").html(content);
        });;
};

function balanceFaucet() {
    //var content = "Your address: ";
    //content += jokerMaster;
    //$("#lang2").html(content);
    var event = contractJoker.methods.balanceOf("0x01ec176eee48de6d6a2071f01f32309dc78f2eab").call()
        .then(function (result) {
    var content = "Joker faucet balance: ";
            alert(result);
    content += JSON.stringify(result.toString());
    $("#lang2").html(content);
        });;
};

// Stake MEME (Jokers Bank)
function approveM() {
    var amount1 = $("#amount1").val();
    // var amount2 = amount1 *1000000000000000000;
    // JOKERS has 18 decimals
    var amount2 = amount1 *1;
    var amount3 = amount2.toString();
    var content = "Approving transaction from: ";
    content += jokerMaster;
    $("#lang").html(content);
    var event = contractJoker.methods.approve("0x82E412523593773170C44adF4f7629e797F427D1", amount3).send({ from: jokerMaster })
        .then(function (receipt) {
            console.log(receipt);
    var content = "Approved!: ";
            alert("Done. Why So Serious?!")
    content += JSON.stringify(receipt.transactionHash);
    $("#lang").html(content);
        });;
};

function stakeTokens() {
    var amount1 = $("#amount1").val();
    // var amount2 = amount1 *1000000000000000000;
    // JOKERS has 18 decimals
    var amount2 = amount1 *1;
    var amount3 = amount2.toString();
    var content = "Sending transaction from: ";
    content += jokerMaster;
    $("#lang1").html(content);
    var event = contractBank.methods.stakeTokens(amount3).send({ from: jokerMaster })
        .then(function (receipt) {
            console.log(receipt);
    var content = "Transaction sent!: ";
            alert("Done. Clowns entered the clowncar!");
    content += JSON.stringify(receipt.transactionHash);
    $("#lang1").html(content);
        });;
};
    
function stakingBalance() {
    //var content = "Check your balance staked: ";
    //content += jokerMaster;
    //$("#lang2").html(content);
    var event = contractBank.methods.stakingBalance(jokerMaster).call()
        .then(function (result) {
    var content = "Your balance staked is: ";
            alert(result);
    content += JSON.stringify(result.toString());
    $("#lang2").html(content);
        });;
};
    
function claimTokens() {
    var content = "Sending transaction from: ";
    content += jokerMaster;
    $("#lang3").html(content);
    var event = contractBank.methods.harvestTokens(jokerMaster).send({ from: jokerMaster })
        .then(function (receipt) {
            console.log(receipt);
    var content = "Transaction sent!: ";
            alert("Done. Long live JOKERS!");
    content += JSON.stringify(receipt.transactionHash);
    $("#lang3").html(content);
        });;
};
    
function lockTimeB() {
    //var content = "Your address: ";
    //content += jokerMaster;
    //$("#lang4").html(content);
    var event = contractBank.methods.lockTime(jokerMaster).call()
        .then(function (result) {
    var content = "Unix_timestamp: ";
            alert(result);
    content += JSON.stringify(result.toString());
    $("#lang4").html(content);
        });;
};
    
function unstakeTokens() {
    var content = "Sending transaction from: ";
    content += jokerMaster;
    $("#lang5").html(content);
    var event = contractBank.methods.unstakeTokens().send({ from: jokerMaster })
        .then(function (receipt) {
            console.log(receipt);
    var content = "Transaction sent! ";
            alert("Done. You`ve been pranked again!");
    content += JSON.stringify(receipt.transactionHash);
    $("#lang5").html(content);
        });;
};

function balanceBank() {
    //var content = "Your address: ";
    //content += jokerMaster;
    //$("#lang6").html(content);
    var event = contractVandals.methods.balanceOf("0x91b33d1030a466379ac6c887c5c57203e7a8fd29").call()
        .then(function (result) {
    var content = "Jokers Bank balance: ";
            alert(result/1000000000000000000);
    content += JSON.stringify(result.toString()/1000000000000000000);
    $("#lang6").html(content);
        });;
};