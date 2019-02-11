import React, { createContext, useContext, Component } from 'react'
import isEqual from 'react-fast-compare'

export default function initGlobalState(initialState = {}) {
  const StateContext = createContext()

  class GlobalStateProvider extends Component {
    state = initialState;

    shouldComponentUpdate(_, nextState) {
      return !isEqual(this.state, nextState)
    }

    render() {
      return (
        <StateContext.Provider
          value={[this.state, (...args) => this.setState(...args)]}
        >
          {this.props.children}
        </StateContext.Provider>
      )
    }
  }

  return {
    useGlobalState: () => useContext(StateContext),
    GlobalStateConsumer: StateContext.Consumer,
    StateContext,
    GlobalStateProvider
  }
}
