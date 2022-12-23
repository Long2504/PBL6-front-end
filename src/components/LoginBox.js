
import { AiOutlineClose } from "react-icons/ai";

const LoginBox = ({open,onClose}) => {
	const OVERLAY_STYLES = {
		position: "fixed",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: "rgba(0, 0, 0, 0.7)",
		zIndex: 1000,
	};

	const MODAL_STYLES = {
		position: "fixed",
        height: '200px',
		top: "20%",
		left: "30%",
		right: "30%",
		padding: "5px 5px 0 5px",
        backgroundColor: "white",
		ZIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
	};
    const STYLE_BTN = {
        backgroundColor:'white',
        cursor: 'pointer',
        borderRadius: '3px',
        display: 'flex',
        alignItems: 'center',
        border: '1px black solid',
        position: 'absolute',
        right: '5px',
        top: '5px'

    }

	if (!open) return null;
	return (
		<div style={OVERLAY_STYLES}>
			<div style={MODAL_STYLES}>
                <button onClick={onClose} style={STYLE_BTN}>
                    <AiOutlineClose size={"30px"} />
                </button>
                <h1 style={{textAlign: 'center'}}>Vui lòng đăng nhập</h1>
            </div>
		</div>
	);
};

export default LoginBox;
