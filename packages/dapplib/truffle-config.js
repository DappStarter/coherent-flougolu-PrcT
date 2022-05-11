require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gloom kitten bone tooth finger deliver remain snow hunt private swift sudden'; 
let testAccounts = [
"0x19407671036e1e6c3c40108dff78fa8d5dab6c63c6feffe8537bb1c59b59b5c2",
"0xb2176cda311ea3f22846be50b8a47890995b0cf20e0e5f3c87af621fef275613",
"0xf561c2847cf45748e154697d290e5dfa1df09cc1b71bb71ac0efe5e4192b9201",
"0x2cb7de0baf8cd0a682bc9043413afc72e7e6bdf1aab14a04bb7de17b45165bcb",
"0xce604fa950a551261f998b6c7ed776acb9a98666a25c6deef4af8a3ad0714200",
"0xa160242a574c63446189a96dd9b2ba5c754b431d7819f8c4237f0bf953b06684",
"0x268d0228bcf700b0b8aab400167a29a0d957da82b2e526ce351205d96e17f7e6",
"0x60938b0c6a8ff7d825677b01342da0efd2fe457a06f77cb50e67acae1487e5ce",
"0x3255e8cd971ca5793d207e318527c60ca19923db7520b99342e38a81dad6ca23",
"0xadd8352192d01f2f3facd37b0b6858aa6ba556f558c0a6bd0042d473eb62dfe4"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


