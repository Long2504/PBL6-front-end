

export const cartReducer = (
    state = {
        error: '',
        loading: true,
        cartItems: []
    },
    action
) =>{
    switch(action.type){
        case 'CART_ADD_ITEM':
            const item = action.payload;
            const existItem = state.cartItems.find((x) => x.id === item.id);
            if(existItem){
                return{
                    ...state,
                    error: '',
                    cartItems: state.cartItems.map((x) =>
                        x.id === existItem.id ? {id: x.id, quatity: x.quatity + 1 }: x
                    ),
                };
            }
            else{
                return {...state, error: '', cartItems: [...state.cartItems,item]};
            }
        // case 'CART_REMOVE_ITEM':
        //     return{
        //         ...state,
        //         error: '',
        //         cartItems: state.cartItems.filter((x) => x.id !== action.payload.id),
        //     };
        default:
            return state;
    }
}