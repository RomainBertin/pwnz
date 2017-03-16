export var mediaReducer = (state = {}, action) => {
  switch(action.type) {
    case 'LOAD_DATA_BEGIN':
      return {
        ...state,
        selectedMediaId: 1,
        isLoading: true,
        data: [],
        selectedFolderIndex: 0,
        selectedFolderId: 1,
        isPopupOpen: false
      }
    case 'DATAS_LOADED':
      return {
        ...state,
        isLoading: false,
        data: action.data
      }
    case 'SET_SELECTED_FOLDER_IDX':
      return {
        ...state,
        selectedFolderIndex: action.selectedFolderIndex
      }
    case 'SET_SELECTED_FOLDER_ID':
      return {
        ...state,
        selectedFolderId: action.selectedFolderId,
        selectedFolderIndex: state.data.findIndex(
          folder => folder.id === action.selectedFolderId
        )
      }
    case 'SET_ZOOM_FACTOR':
      return {
        ...state,
        sizeFactor: action.sizeFactor
      }
    case 'SHOW_MEDIA':
      return {
        ...state,
        mediaId: action.mediaId,
        isPopupOpen: true
      }
    case 'HIDE_MEDIA':
      return {
        ...state,
        isPopupOpen: false
      }
    case 'CHANGE_SELECTED_MEDIA_ID':
        return {
          ...state,
          selectedMediaId: action.mediaId
        }
    default:
      return state;

  }

}

export var testReducer2 = (state = {}, action) => {

  return state
}
