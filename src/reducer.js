export const initialState={
    basket:[],
};
export const getBasketTotal =(basket) => 
    basket?.reduce((amount, item)=> item.price +amount,0);


const reducer = (state,action) => {
    
    switch(action.type){
        case "ADD_TO_BASKET":
            return{
                ...state,
                basket: [...state.basket, action.item],
            };
        // case "REMOVE_FRM_BASKET":
        //     return{
        //         basket.filter(item => item.id != action.id)
        //     }
        default : return state;
    }
};
export default reducer;