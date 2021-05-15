export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const SET_SHELF_ID = 'SET_SHELF_ID';
export const SET_GROUP_ID = 'SET_GROUP_ID';

const setSearchTerm = (term) => {
  return {
    type: "SET_SEARCH_TERM",
    searchTerm: term
  }
}

const setShelfId = (productId, shelfId) => {
  return {
    type: "SET_SHELF_ID",
    shelfId: shelfId,
    productId: productId
  }
}

const setGroupId = (productId, groupId) => {
  return {
    type: "SET_GROUP_ID",
    groupId: groupId,
    productId: productId
  }
}

export {
  setSearchTerm,
  setShelfId,
  setGroupId
}