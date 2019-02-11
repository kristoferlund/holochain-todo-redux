const reducer = (state, action) => {
  const savedListIndex = state.lists.findIndex(
    item => item.list_addr === action.payload.list_addr
  )
  switch (action.type) {
    case 'HOLOCHAIN_WEBSOCKET_CONNECTED': {
      return {
        ...state,
        connected: true
      }
    }

    case 'test-instance/lists/main/create_list_SUCCESS': {
      if (savedListIndex == -1) {
        return {
          ...state,
          lists: [...action.payload, ...state.lists]
        }
      } else {
        return {
          ...state,
          lists: [
            ...state.lists.slice(0, savedListIndex),
            ...action.payload,
            ...state.lists.slice(savedListIndex + 1)
          ]
        }
      }
    }

    case 'test-instance/lists/main/add_item_SUCCESS': {
      return {
        ...state,
        list_items: [...action.payload, ...state.list_items]
      }
    }

    default:
      return state
  }
}

export default reducer
