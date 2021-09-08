import {
  LOAD_PRODUCTS,
  REMOVE_PRODUCT,
  ADD_PRODUCT,
  EDIT_PRODUCT
} from '../action_creators/actions';

const reducer = (state, action) => {
  
  switch(action.type){

    case LOAD_PRODUCTS:
      
    return {
      ...state,
      entities: action.payload.entities,
      result: action.payload.result
    }

    case REMOVE_PRODUCT: //just remove the product not the price
      
    break;

    case ADD_PRODUCT:
      let product = action.payload;
      let productId = state.result[state.result.length - 1] + 1;
      let priceKeys = Object.keys(state.entities.prices);

      let newPriceId =state.entities.prices[priceKeys.length].id + 1;
      let newProduct = {id: productId, name: product.name, prices: [newPriceId]};

      let productState = {...state.entities};
      productState.products[productId] = newProduct;
      productState.prices[newPriceId] = {id: newPriceId, price: parseInt(product.price), date: product.date}
      
      return {
        ...state,
        entities: productState,
        result: state.result.concat(productId)
      }

  

    case EDIT_PRODUCT: //modify both product and price via id
      let priceKeys1 = Object.keys(state.entities.prices);
      let newPriceId1 =state.entities.prices[priceKeys1.length].id + 1;
      
      let productProperties = action.payload;
      let myproduct = state.entities.products[productProperties.product_id];

      let productStateEdit = {...state.entities};
      productStateEdit.prices[newPriceId1] = {id: newPriceId1, price: parseInt(productProperties.price), date: productProperties.date}
      productStateEdit.products[productProperties.product_id] = {id: productProperties.product_id, name: productProperties.product, prices:[...myproduct.prices, newPriceId1] };
      
      

    return {
      ...state,
      entities: productStateEdit,
    }
  }
  
    return state
  }

export default reducer;