/* In this file, we are going to make a function that is going to essentially automate
the process of creating a Context */

import React, { useReducer } from 'react';
/* We are going to pass in here the 3 things that need to be customized anytime we
create a Context "reducer, actions, initialState".*/
export default (reducer, actions, initialState) => {
  /* NOTE: reducer = blogReducer, actions = addBlogPost, initialState = [] */
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // NOTE: actions === { addBlogPost: (dispatch) => { return () => {} } }
    /* actions is going to be an object that has a key of "addBlogPost:"  and
    that is going to be a function that expects to be called with "dispatch"
    and then inside of the function we return a function("() => {}").

    We're going to loop that the action object and for every key(i.e "addBlogPost"),
    we're going to the take the function, we're going to call it with the "dispatch"
    argument, and that is going to give us back that function("() => {}"). That
    function is what we are going to pass down into our "value" prop and it's essentially
    going to let all of our child components make changes to our state object*/
    const boundActions = {};
    for (let key in actions) {
      // key === 'addBlogPost'
      // boundActions[key] === boundActions.addBlogPost
      // actions[key](dispatch) === (dispatch) => { return () => {} }
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
