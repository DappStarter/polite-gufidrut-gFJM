require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kiwi bottom trip fan recipe stereo snake good neck fringe general'; 
let testAccounts = [
"0x1b284efc0ee4f59f8db37cfbfeaa22384a9c3c2db79e34579473fd0489433cc3",
"0x07947bc58d11eecb6695525e9545b97c68b057e499c9ef5da71e13698aeec89f",
"0xa3d1956a83ef66a1cd4074b896c462445842261eea945c471ce2b61b4e3ccaad",
"0xe53e6e32adc078e4f1ffac40d581883618e6be82e63cb76ed244f3614b4c7435",
"0x993e872b67c4edadb6e643c822dd93196c8d42d97f680144d9a968955611085c",
"0x62dc146a117bd88d1cece63c91cce869468b2398353935477bbf52d79378244b",
"0xbac8b27eac9262542d69da11bd87f88046f12d22e03b8b349cf0bfd07e724063",
"0xff14ae9983f9b3a296a7e7f79134ac597de9c244da7134da85f39f351b0b0878",
"0xdf145b503dde74d5e0edc08027563e0d623704f4e359a413dc843c698eb374fc",
"0x152edb4c580e1d57e80f463e67ce26ee668217f7a3615dce31bf656f5aa3c648"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

