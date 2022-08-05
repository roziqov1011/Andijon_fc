import React, { Component, createContext } from 'react';

export const FC = createContext();

class Mode extends Component {
  state = {  } 
  render() { 
    return (
      <FC.Provider
        value={{
          ...this.state,
        }}
      >
        {this.props.children}
      </FC.Provider>
    );
  }
}
 
export default Mode;