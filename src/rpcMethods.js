const geth = [
  { method: 'web3_clientVersion' },
  {
    method: 'web3_sha3',
    description:
      'Returns Keccak-256 (not the standardized SHA3-256) of the given data.',
    exampleParams: '["0x68656c6c6f20776f726c64"]',
    exampleResult:
      '"0x47173285a8d7341e5e972fc677286384f802f8ef42a5ec5f03bbfa254cb01fad"',
    descriptionParams: 'DATA - the data to convert into a SHA3 hash.',
    descriptionResult: 'DATA - The SHA3 result of the given string.'
  },
  { method: 'net_version' },
  { method: 'net_peerCount' },
  { method: 'net_listening' },
  { method: 'eth_protocolVersion' },
  { method: 'eth_syncing' },
  { method: 'eth_coinbase' },
  { method: 'eth_mining' },
  { method: 'eth_hashrate' },
  { method: 'eth_gasPrice' },
  { method: 'eth_accounts' },
  { method: 'eth_blockNumber' },
  {
    method: 'eth_getBalance',
    exampleParams: '["0xc94770007dda54cF92009BFF0dE90c06F603a09f", "latest"]'
  },
  {
    method: 'eth_getStorageAt',
    exampleParams:
      '["0x295a70b2de5e3953354a6a8344e616ed314d7251", "0x6661e9d6d8b923d5bbaab1b96e1dd51ff6ea2a93520fdc9eb75d059238b8c5e9", "latest"]'
  },
  {
    method: 'eth_getTransactionCount',
    exampleParams: '["0xc94770007dda54cF92009BFF0dE90c06F603a09f", "latest"]'
  },
  {
    method: 'eth_getBlockTransactionCountByHash',
    exampleParams:
      '["0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238"]'
  },
  { method: 'eth_getBlockTransactionCountByNumber', exampleParams: '["0xe8"]' },
  { method: 'eth_getUncleCountByBlockHash' },
  { method: 'eth_getUncleCountByBlockNumber' },
  { method: 'eth_getCode' },
  { method: 'eth_sign' },
  { method: 'eth_sendTransaction' },
  { method: 'eth_sendRawTransaction' },
  { method: 'eth_call' },
  { method: 'eth_estimateGas' },
  { method: 'eth_getBlockByHash' },
  { method: 'eth_getBlockByNumber' },
  { method: 'eth_getTransactionByHash' },
  { method: 'eth_getTransactionByBlockHashAndIndex' },
  { method: 'eth_getTransactionByBlockNumberAndIndex' },
  { method: 'eth_getTransactionReceipt' },
  { method: 'eth_pendingTransactions' },
  { method: 'eth_getUncleByBlockHashAndIndex' },
  { method: 'eth_getUncleByBlockNumberAndIndex' },
  { method: 'eth_getCompilers' },
  { method: 'eth_compileLLL' },
  { method: 'eth_compileSolidity' },
  { method: 'eth_compileSerpent' },
  { method: 'eth_newFilter' },
  { method: 'eth_newBlockFilter' },
  { method: 'eth_newPendingTransactionFilter' },
  { method: 'eth_uninstallFilter' },
  { method: 'eth_getFilterChanges' },
  { method: 'eth_getFilterLogs' },
  { method: 'eth_getLogs' },
  { method: 'eth_getWork' },
  { method: 'eth_submitWork' },
  { method: 'eth_submitHashrate' },
  { method: 'eth_getProof' },
  { method: 'db_putString' },
  { method: 'db_getString' },
  { method: 'db_putHex' },
  { method: 'db_getHex' },
  { method: 'shh_post' },
  { method: 'shh_version' },
  { method: 'shh_newIdentity' },
  { method: 'shh_hasIdentity' },
  { method: 'shh_newGroup' },
  { method: 'shh_addToGroup' },
  { method: 'shh_newFilter' },
  { method: 'shh_uninstallFilter' },
  { method: 'shh_getFilterChanges' },
  { method: 'shh_getMessages' }
];

const parity = [
  { method: 'parity_allTransactionHashes' },
  { method: 'parity_allTransactions' },
  { method: 'parity_call' },
  { method: 'parity_cidV0' },
  { method: 'parity_composeTransaction' },
  { method: 'parity_consensusCapability' },
  { method: 'parity_decryptMessage' },
  { method: 'parity_encryptMessage' },
  { method: 'parity_futureTransactions' },
  { method: 'parity_getBlockHeaderByNumber' },
  { method: 'parity_getBlockReceipts' },
  { method: 'parity_hardwarePinMatrixAck' },
  { method: 'parity_listOpenedVaults' },
  { method: 'parity_listStorageKeys' },
  { method: 'parity_listVaults' },
  { method: 'parity_localTransactions' },
  { method: 'parity_lockedHardwareAccountsInfo' },
  { method: 'parity_releasesInfo' },
  { method: 'parity_signMessage' },
  { method: 'parity_submitWorkDetail' },
  { method: 'parity_verifySignature' },
  { method: 'parity_versionInfo' },
  { method: 'parity_changeVault' },
  { method: 'parity_changeVaultPassword' },
  { method: 'parity_closeVault' },
  { method: 'parity_getVaultMeta' },
  { method: 'parity_newVault' },
  { method: 'parity_openVault' },
  { method: 'parity_setVaultMeta' },
  { method: 'parity_accountsInfo' },
  { method: 'parity_checkRequest' },
  { method: 'parity_defaultAccount' },
  { method: 'parity_generateSecretPhrase' },
  { method: 'parity_hardwareAccountsInfo' },
  { method: 'parity_listAccounts' },
  { method: 'parity_phraseToAddress' },
  { method: 'parity_postSign' },
  { method: 'parity_postTransaction' },
  { method: 'parity_defaultExtraData' },
  { method: 'parity_extraData' },
  { method: 'parity_gasCeilTarget' },
  { method: 'parity_gasFloorTarget' },
  { method: 'parity_minGasPrice' },
  { method: 'parity_transactionsLimit' },
  { method: 'parity_devLogs' },
  { method: 'parity_devLogsLevels' },
  { method: 'parity_chain' },
  { method: 'parity_chainStatus' },
  { method: 'parity_gasPriceHistogram' },
  { method: 'parity_netChain' },
  { method: 'parity_netPeers' },
  { method: 'parity_netPort' },
  { method: 'parity_nextNonce' },
  { method: 'parity_pendingTransactions' },
  { method: 'parity_pendingTransactionsStats' },
  { method: 'parity_registryAddress' },
  { method: 'parity_removeTransaction' },
  { method: 'parity_rpcSettings' },
  { method: 'parity_unsignedTransactionsCount' },
  { method: 'parity_enode' },
  { method: 'parity_mode' },
  { method: 'parity_nodeKind' },
  { method: 'parity_nodeName' },
  { method: 'parity_wsUrl' }
];

const clef = [
  {
    method: 'account_new',
    description: `Create new password protected account.

      The signer will generate a new private key, encrypts it according to web3 keystore spec and stores it in the keystore directory. The client is responsible for creating a backup of the keystore. If the keystore is lost there is no method of retrieving lost accounts.`,
    exampleResult: `{
    "id": 0,
    "jsonrpc": "2.0",
    "result": {
      "address": "0xbea9183f8f4f03d427f6bcea17388bdff1cab133",
      "url": "keystore:///my/keystore/UTC--2017-08-24T08-40-15.419655028Z--bea9183f8f4f03d427f6bcea17388bdff1cab133"
    }
  }`,
    descriptionResult: `address [string]: account address that is derived from the generated key
          url [string]: location of the keyfile`
  },
  {
    method: 'account_list',
    description: `List all accounts that this signer currently manages.`,
    exampleResult: `[
    {
      "address": "0xafb2f771f58513609765698f65d3f2f0224a956f",
      "type": "account",
      "url": "keystore:///tmp/keystore/UTC--2017-08-24T07-26-47.162109726Z--afb2f771f58513609765698f65d3f2f0224a956f"
    },
    {
      "address": "0xbea9183f8f4f03d427f6bcea17388bdff1cab133",
      "type": "account",
      "url": "keystore:///tmp/keystore/UTC--2017-08-24T08-40-15.419655028Z--bea9183f8f4f03d427f6bcea17388bdff1cab133"
    }
  ]`,
    descriptionResult: `array with account records:
  account.address [string]: account address that is derived from the generated key
  account.type [string]: type of the
  account.url [string]: location of the account`
  },
  {
    method: 'account_signTransaction',
    description:
      'Signs a transactions and responds with the signed transaction in RLP encoded form.',
    exampleParams: `[
    {
      "from": "0x1923f626bb8dc025849e00f99c25fe2b2f7fb0db",
      "gas": "0x55555",
      "gasPrice": "0x1234",
      "input": "0xabcd",
      "nonce": "0x0",
      "to": "0x07a565b7ed7d7a678680a4c162885bedbb695fe0",
      "value": "0x1234"
    }
  ]`,
    exampleResult: `{
    "raw": "0xf88380018203339407a565b7ed7d7a678680a4c162885bedbb695fe080a44401a6e4000000000000000000000000000000000000000000000000000000000000001226a0223a7c9bcf5531c99be5ea7082183816eb20cfe0bbc322e97cc5c7f71ab8b20ea02aadee6b34b45bb15bc42d9c09de4a6754e7000908da72d48cc7704971491663",
    "tx": {
      "nonce": "0x0",
      "gasPrice": "0x1",
      "gas": "0x333",
      "to": "0x07a565b7ed7d7a678680a4c162885bedbb695fe0",
      "value": "0x0",
      "input": "0x4401a6e40000000000000000000000000000000000000000000000000000000000000012",
      "v": "0x26",
      "r": "0x223a7c9bcf5531c99be5ea7082183816eb20cfe0bbc322e97cc5c7f71ab8b20e",
      "s": "0x2aadee6b34b45bb15bc42d9c09de4a6754e7000908da72d48cc7704971491663",
      "hash": "0xeba2df809e7a612a0a0d444ccfa5c839624bdc00dd29e3340d46df3870f8a30e"
    }
  }`,
    descriptionParams: `transaction object:
from [address]: account to send the transaction from
to [address]: receiver account. If omitted or 0x, will cause contract creation.
gas [number]: maximum amount of gas to burn
gasPrice [number]: gas price
value [number:optional]: amount of Wei to send with the transaction
data [data:optional]: input data
nonce [number]: account nonce
method signature [string:optional]
The method signature, if present, is to aid decoding the calldata. Should consist of methodname(paramtype,...), e.g. transfer(uint256,address). The signer may use this data to parse the supplied calldata, and show the user. The data, however, is considered totally untrusted, and reliability is not expected.`,
    descriptionResult: `signed transaction in RLP encoded form [data]`
  },
  {
    method: 'account_signData',
    description: 'Signs a chunk of data and returns the calculated signature.',
    exampleParams: `[
    "data/plain",
    "0x1923f626bb8dc025849e00f99c25fe2b2f7fb0db",
    "0xaabbccdd"
  ]`,
    exampleResult: `"0x5b6693f153b48ec1c706ba4169960386dbaa6903e249cc79a8e6ddc434451d417e1e57327872c7f538beeb323c300afa9999a3d4a5de6caf3be0d5ef832b67ef1c"`,
    descriptionParams: `content type [string]: type of signed data
text/validator: hex data with custom validator defined in a contract
application/clique: clique headers
text/plain: simple hex data validated by account_ecRecover
account [address]: account to sign with
data [object]: data to sign`,
    descriptionResult: `calculated signature [data]`
  },
  {
    method: 'account_signTypedData',
    description:
      'Signs a chunk of structured data conformant to EIP712 and returns the calculated signature.',
    exampleParams: `[
    "0xcd2a3d9f938e13cd947ec05abc7fe734df8dd826",
    {
      "types": {
        "EIP712Domain": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "version",
            "type": "string"
          },
          {
            "name": "chainId",
            "type": "uint256"
          },
          {
            "name": "verifyingContract",
            "type": "address"
          }
        ],
        "Person": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "wallet",
            "type": "address"
          }
        ],
        "Mail": [
          {
            "name": "from",
            "type": "Person"
          },
          {
            "name": "to",
            "type": "Person"
          },
          {
            "name": "contents",
            "type": "string"
          }
        ]
      },
      "primaryType": "Mail",
      "domain": {
        "name": "Ether Mail",
        "version": "1",
        "chainId": 1,
        "verifyingContract": "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC"
      },
      "message": {
        "from": {
          "name": "Cow",
          "wallet": "0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826"
        },
        "to": {
          "name": "Bob",
          "wallet": "0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB"
        },
        "contents": "Hello, Bob!"
      }
    }
  ]`,
    exampleResult: `"0x4355c47d63924e8a72e509b65029052eb6c299d53a04e167c5775fd466751c9d07299936d304c153f6443dfa05f40ff007d72911b6f72307f996231605b915621c"`,
    descriptionParams: `account [address]: account to sign with
data [object]: data to sign`,
    descriptionResult: `calculated signature [data]`
  },
  {
    method: 'account_ecRecover',
    description:
      'Derive the address from the account that was used to sign data with content type text/plain and the signature.',
    exampleParams: `[
    "data/plain",
    "0xaabbccdd",
    "0x5b6693f153b48ec1c706ba4169960386dbaa6903e249cc79a8e6ddc434451d417e1e57327872c7f538beeb323c300afa9999a3d4a5de6caf3be0d5ef832b67ef1c"
  ]`,
    exampleResult: `"0x1923f626bb8dc025849e00f99c25fe2b2f7fb0db"`,
    descriptionParams: `data [data]: data that was signed
signature [data]: the signature to verify`,
    descriptionResult: `derived account [address]`
  },
  {
    method: 'account_import',
    description:
      'Import a private key into the keystore. The imported key is expected to be encrypted according to the web3 keystore format.',
    exampleParams: `[
    {
      "address": "c7412fc59930fd90099c917a50e5f11d0934b2f5",
      "crypto": {
        "cipher": "aes-128-ctr",
        "cipherparams": {
          "iv": "401c39a7c7af0388491c3d3ecb39f532"
        },
        "ciphertext": "eb045260b18dd35cd0e6d99ead52f8fa1e63a6b0af2d52a8de198e59ad783204",
        "kdf": "scrypt",
        "kdfparams": {
          "dklen": 32,
          "n": 262144,
          "p": 1,
          "r": 8,
          "salt": "9a657e3618527c9b5580ded60c12092e5038922667b7b76b906496f021bb841a"
        },
        "mac": "880dc10bc06e9cec78eb9830aeb1e7a4a26b4c2c19615c94acb632992b952806"
      },
      "id": "09bccb61-b8d3-4e93-bf4f-205a8194f0b9",
      "version": 3
    }
  ]`,
    exampleResult: `{
    "address": "0xc7412fc59930fd90099c917a50e5f11d0934b2f5",
    "type": "account",
    "url": "keystore:///tmp/keystore/UTC--2017-08-24T11-00-42.032024108Z--c7412fc59930fd90099c917a50e5f11d0934b2f5"
  }`,
    descriptionParams: `account [object]: key in web3 keystore format (retrieved with account_export)`,
    descriptionResult: `imported key [object]:
key.address [address]: address of the imported key
key.type [string]: type of the account
key.url [string]: key URL`
  },
  {
    method: 'account_export',
    description:
      'Export a private key from the keystore. The exported private key is encrypted with the original passphrase. When the key is imported later this passphrase is required.',
    exampleParams: `[
    "0xc7412fc59930fd90099c917a50e5f11d0934b2f5"
  ]`,
    exampleResult: `{
    "address": "c7412fc59930fd90099c917a50e5f11d0934b2f5",
    "crypto": {
      "cipher": "aes-128-ctr",
      "cipherparams": {
        "iv": "401c39a7c7af0388491c3d3ecb39f532"
      },
      "ciphertext": "eb045260b18dd35cd0e6d99ead52f8fa1e63a6b0af2d52a8de198e59ad783204",
      "kdf": "scrypt",
      "kdfparams": {
        "dklen": 32,
        "n": 262144,
        "p": 1,
        "r": 8,
        "salt": "9a657e3618527c9b5580ded60c12092e5038922667b7b76b906496f021bb841a"
      },
      "mac": "880dc10bc06e9cec78eb9830aeb1e7a4a26b4c2c19615c94acb632992b952806"
    },
    "id": "09bccb61-b8d3-4e93-bf4f-205a8194f0b9",
    "version": 3
  }`,
    descriptionParams: `account [address]: export private key that is associated with this account`,
    descriptionResult: `exported key, see web3 keystore format for more information`
  }
];

export default {
  geth,
  parity,
  clef
};
