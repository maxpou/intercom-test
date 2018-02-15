[![Build Status](https://travis-ci.org/maxpou/intercom-test.svg?branch=master)](https://travis-ci.org/maxpou/intercom-test) [![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

# Intercom Test: Customer Records

## Installation & running

Requirements: [Node >= 7.10.1](http://node.green/#ES2017-features-async-functions) (usage of async/await functions) and NPM.

1. `npm install`: install dev dependencies
2. `node bin/main.js`: execute program *with defaults arguments*

## Commands

* Main endpoint came with severals options:

```bash
$ node bin/main.js --help

  Usage: main [options]


  Options:

    -f, --file [fileUrl]      customer file url (default: https://gist.githubusercontent.com/brianw/19896c50afa89ad4dec3/raw/6c11047887a03483c50017c1d451667fd62a53ca/gistfile1.txt)
    -d, --distance [fileUrl]  distance (default: 100)
    -h, --help                output usage information

```

* `npm run lint`: lint code according to [standard.js style](https://standardjs.com/)
* `npm test`: run test suite
