
# react-global-state-lib
[![package version](https://img.shields.io/npm/v/react-global-state-lib.svg?style=flat-square)](https://npmjs.org/package/react-global-state-lib)
[![package downloads](https://img.shields.io/npm/dm/react-global-state-lib.svg?style=flat-square)](https://npmjs.org/package/react-global-state-lib)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/react-global-state-lib.svg?style=flat-square)](https://npmjs.org/package/react-global-state-lib)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Global state using Context &amp; Hooks APIs

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com).

```sh
$ npm install react-global-state-lib
$ # OR
$ yarn add react-global-state-lib
```

## Usage

```js
import React, { Component } from 'react'

import initGlobalState from 'react-global-state-lib'


const {GlobalStateProvider, useGlobalState} = initGlobalState({
	count: 1, // initial state
})

function Counter() {
	const [global, setGlobalState] = useGlobalState()

	return <h1>{global.count}</h1>
}

function IncrementBtn() {
	const [global, setGlobalState] = useGlobalState()

	return (
		<button type="button" onClick={() => setGlobalState({count: global.count + 1})}>
			+
		</button>
	)
}

function App() {
	return (
		<GlobalStateProvider>
			<Counter />
			<Counter />
			<Counter />
			<IncrementBtn />
		</GlobalStateProvider>
	)
}

export default App
```

## Contribute

1. Fork it and create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am "Add some feature"`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request

## License

MIT © [tiaanduplessis](https://github.com/tiaanduplessis)
