const reducer = (state, action) => {
  if (action.type === 'test-instance/lists/main/create_list_SUCCESS') {
    return {
      ...state,
      lists: [
        {
          id: action.payload
        },
        ...state.lists
      ]
    }
  }
  return state
}

export default reducer
