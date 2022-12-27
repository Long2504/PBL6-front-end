import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
	return (
		<div className="container" style={{paddingTop:'60px',marginBottom:'100px'}} >
			<div className="row">
				<div className="col-md-6 mx-auto mt-5">
					<div
						className="payment"
						style={{
							border: "1px solid #f2f2f2",
							height: "280px",
							borderRadius: "20px",
							background: "#fff",
						}}
					>
						<div className="payment_header" style={{
                                	   background:'rgba(255,102,0,1)',
                                	   //background:'#33db5ac4',
                                       padding:'20px',
                                       borderRadius:'20px 20px 0px 0px'
                            }}>
							<div className="check" style={{
                                	   margin:'0px auto',
                                       width:'50px',
                                       height:'50px',
                                       borderRadius:'100%',
                                       background:'#fff',
                                       display:'flex',
                                       alignItems:'center',
                                       justifyContent:'center'

                            }} >
								<FaCheck style={{
                                    verticalAlign:'middle',
                                    lineHeight:'50px',
                                    fontSize:'30px',
                                }}/>
							</div>
						</div>
						<div className="content"style={{textAlign:'center'}}>
							<h1 style={{
                                fontSize:'25px',
                                paddingTop:'25px',
                                paddingBottom:'50px'
                            }}>Payment Success !</h1>
							<Link to={'/'} style={{
                                        width:'200px',
                                        height:'35px',
                                        color:'#fff',
                                        borderRadius:'30px',
                                        padding:'5px 10px',
                                        background:'rgba(255,102,0,1)',
                                        transition:'all ease-in-out 0.3s',
                            }}>Go to Home</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaymentSuccess;
