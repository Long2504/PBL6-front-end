
import { AiOutlineClose } from "react-icons/ai";

const LoginBox = () => {
	const OVERLAY_STYLES = {
		marginTop: '40px',
		marginLeft: '2vw',
		marginBottom: '40px',
		padding: '20px 30px',
		display: 'flex',
		justifyContent: 'center',
		alignItems:'center',
		backgroundColor: 'white',
		boxShadow:' 0px 0px 16px -8px rgba(0, 0, 0, 0.68)',
		width:'100%',
		height:'600px'
		
	};




	return (
		<div style={OVERLAY_STYLES}>
        	<h1 style={{textAlign: 'center'}}>Vui lòng đăng nhập</h1>

		</div>
	);
};

export default LoginBox;
