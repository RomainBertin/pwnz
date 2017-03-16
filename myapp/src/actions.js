export const loadDatas = () => {
  return (dispatch) => {
    dispatch({type: 'LOAD_DATA_BEGIN'});
    fetch("/datas.json").then(feedback => feedback.json())
    .then(feedback => {
        dispatch({type: 'DATAS_LOADED', data: feedback})
    }).catch(err => {
      console.log(err)
    })
  }
}

export const setFolderSelectedId = (folderId) => {
  return {
    type: 'SET_SELECTED_FOLDER_ID',
    selectedFolderId: folderId
  }
}
