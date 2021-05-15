import { SET_SEARCH_TERM, SET_GROUP_ID, SET_SHELF_ID } from '../action/index';

const initState = {
  initialProducts: require('../../data/products.json'),
  products: require('../../data/products.json'),
  shelfs: require('../../data/shelfs.json'),
  groups: require('../../data/product_groups.json'),
  searchTerm: '',
  selectedShelfs: require('../../data/products.json').map((item) => ({ [item.id]: item.shelf_id })),
  selectedGroups: require('../../data/products.json').map((item) => ({ [item.id]: item.product_group_id })),
}

const postsReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.searchTerm,
        products: !action.searchTerm ? state.initialProducts : state.products.lenght > 0 ? state.products.filter((productName) =>
          productName.name.toLowerCase().indexOf(action.searchTerm.toLowerCase()) !== -1)
          : state.initialProducts.filter((productName) =>
            productName.name.toLowerCase().indexOf(action.searchTerm.toLowerCase()) !== -1)
      }
    case SET_GROUP_ID:
      return {
        ...state,
        selectedGroups: state.selectedGroups.map((item) => { item[action.productId] = action.groupId; return item; })
      }
    case SET_SHELF_ID:
      return {
        ...state,
        selectedShelfs: state.selectedShelfs.map((item) => { item[action.productId] = action.shelfId; return item; })
      }
    default:
      return state;
  }
}

export default postsReducer