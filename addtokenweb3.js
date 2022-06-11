function addIconM() {
    web3 = new Web3(window.ethereum);
    const tokenAddress = '0xc277A0F8405dC5c45A55726955eb6C4d430D61c2';
    const tokenSymbol = 'MEME';
    const tokenDecimals = 18;
    const tokenImage = 'https://mintmeme.github.io/img/meme512.png';
    ethereum.request({
            method: 'wallet_watchAsset',
            params: {
            type: 'ERC20',
            options: {
                address: tokenAddress,
                symbol: tokenSymbol,
                decimals: tokenDecimals,
                image: tokenImage,
            },
            },
    });
};

function addIconZ() {
    web3 = new Web3(window.ethereum);
    const tokenAddress = '0x82e412523593773170c44adf4f7629e797f427d1';
    const tokenSymbol = 'CLOWN';
    const tokenDecimals = 0;
    const tokenImage = 'https://mintmeme.github.io/img/clown512.png';
    ethereum.request({
            method: 'wallet_watchAsset',
            params: {
            type: 'ERC20',
            options: {
                address: tokenAddress,
                symbol: tokenSymbol,
                decimals: tokenDecimals,
                image: tokenImage,
            },
            },
    });
};

function addIconV() {
    web3 = new Web3(window.ethereum);
    const tokenAddress = '0x2bc398fd147f7f3e8e093a43d188be3af5c59dcd';
    const tokenSymbol = 'JOKERS';
    const tokenDecimals = 18;
    const tokenImage = 'https://mintmeme.github.io/img/joker512.png';
    ethereum.request({
            method: 'wallet_watchAsset',
            params: {
            type: 'ERC20',
            options: {
                address: tokenAddress,
                symbol: tokenSymbol,
                decimals: tokenDecimals,
                image: tokenImage,
            },
            },
    });
};

function addIconU() {
    web3 = new Web3(window.ethereum);
    const tokenAddress = '0x7c75f7cda8674787c4d82b2222a9025ecdc1343f';
    const tokenSymbol = 'LOL';
    const tokenDecimals = 18;
    const tokenImage = 'https://mintmeme.github.io/img/lol512.png';
    ethereum.request({
            method: 'wallet_watchAsset',
            params: {
            type: 'ERC20',
            options: {
                address: tokenAddress,
                symbol: tokenSymbol,
                decimals: tokenDecimals,
                image: tokenImage,
            },
            },
    });
};