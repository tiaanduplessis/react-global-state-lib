import React from 'react'
import { render, cleanup } from 'react-testing-library'

import 'jest-dom/extend-expect'

import initGlobalState from '../'

afterEach(cleanup)

test('should be defined', () => {
  expect(initGlobalState).toBeDefined()
  expect(initGlobalState().GlobalStateProvider).toBeDefined()
})

test('should provide state', () => {
  const { GlobalStateProvider, useGlobalState } = initGlobalState({
    count: 100 // initial state
  })

  const CountConsumer = () => {
    const [global] = useGlobalState()

    return <div>My count is: {global.count}</div>
  }

  const tree = (
    <GlobalStateProvider>
      <CountConsumer />
    </GlobalStateProvider>
  )

  const { getByText } = render(tree)
  expect(getByText(/^My count is: /)).toHaveTextContent('My count is: 100')
})
