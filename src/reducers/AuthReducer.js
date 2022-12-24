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
        case Type.LOGOUT:
            console.log("out")
            localStorage.removeItem("user")
            return{
                logged: false,
            }
		default:
            if(!localStorage.getItem("user")){
                return state
            }
            else return{
                logged: true
            }
	}
};

export default authReducer;
