export const saveProductsState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('productsState', serializedState);
    } catch(err) {
        console.log(err);
    }
};

export const loadProductsState = async () => {

    try {            
        const serializedState = await localStorage.getItem('productsState');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);

    } catch (err) {
        return undefined;
    }
};

export const isLocalStorageEmpty = () => {
    return localStorage.getItem("productsState") === null;
}