import * as Type from "../contants/ActionType";

const authReducer = (
    state = {
        logged : false,
        loading: true,
    }, 
    action
) => {
	switch (action.type) {
		case Type.LOGIN:
			console.log(action.user);
			localStorage.setItem("user", JSON.stringify(action.user));
            console.log("OK LOGIN")
			return{
                logged: true,
                loading: false
            }
		default:
            return state
	}
};

export default authReducer;
