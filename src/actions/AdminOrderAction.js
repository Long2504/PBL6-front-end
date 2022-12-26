import * as Type from "../contants/ActionType";

export const fetchOrderAction = (data) => {
	return {
		type: Type.ORDER_LIST_SUCCESS,
		orders: data,
	};
};

export const confirmOrderAction = (data)=>{
	return {
		type: Type.ORDER_PUSH_SUCCESS,
		orders: data
	}
}
