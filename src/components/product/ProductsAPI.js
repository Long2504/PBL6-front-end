import { Link } from "react-router-dom";
import styles from "../../assets/appstyle/product.module.css";
import { useDispatch, useSelector } from "react-redux";
import { pushCartAction } from "../../actions/CartAction";
import { useEffect, useState } from "react";
import Loading from "../LoadingBox";
import LoginBox from "../LoginBox";

let vietnamdognVN = Intl.NumberFormat("vi", {
	style: "currency",
	currency: "VND",
});

const ClassifyProduct = ({ classifyData, selectWeight, loadingCatelogy }) => {
	const [active, setActive] = useState([]);
	const arrActive = [];
	var listData = [];
	useEffect(() => {
		if (classifyData) {
			classifyData.forEach((element) => {
				let temp = new Array(element.attributes.length).fill(false);
				arrActive.push(temp);
			});
			setActive(arrActive);
		}
	}, [classifyData]);

	//console.log(active,"active")

	if (!loadingCatelogy) {
		const handleSelectWeightClick = (id, index, indexItem) => {
			if (active.length !== 0) {
				active[index][indexItem] = !active[index][indexItem];
				setActive(active);
			}
			selectWeight({
				index: index,
				id: id,
			});
		};
		const click = (index, indexItem) => {
			if(active) {
                if(active[index]){
                    if (active[index][indexItem]) return true;
                }
                else{
                    if (active[indexItem]) return true;
                }
			}
			return false;
		};

		const detail = (data, index) => {
			return data.map((item, indexItem) => {
				return (
					<button className={styles["name-classify"]}
						key={item.name}
						onClick={() => handleSelectWeightClick(item.id, index, indexItem)}
						style={{
							backgroundColor: click(index, indexItem)
								? "#008ECC"
								: "",
						}}
					>
						{item.name}
					</button>
				);
			});
		};
		listData = classifyData.map((data, index) => {
			return (
				<div className={styles["detail-item"]} key={data.id}>
					<div className={styles["title"]}>{data.name}</div>
					<div className={styles["list-atribute"]}>
						{detail(data.attributes, index)}
					</div>
				</div>
			);
		});
	} else {
		listData = <Loading />;
	}
	return (
		<div className={styles["classify"]}>
			<h2
				style={{
					marginTop: "15px",
					marginLeft: "20px",
					marginBottom: "15px",
				}}
			>
				Bộ lọc
			</h2>
			{listData}
		</div>
	);
};

const ListProduct = (props) => {
	const dispatch = useDispatch();
	const checkLogin = useSelector((state) => state.authReducer.logged);
	const [isOpen,setIsOpen] = useState(true)
	useEffect(()=>{
		if(checkLogin){
			setIsOpen(false)
		}
	},[checkLogin])
	
	const addToCartHandler = (productId) => {
		if(checkLogin){
			dispatch(pushCartAction({ id: productId }, "ADD"));
		}
		else{
			setIsOpen(true)
		}
	};

	let listData = [];
	if (props.productData.length !== undefined) {
		console.log(props.productData)
		var temp = []
		props.productData.forEach((x)=>{
			temp.push({
				"id": x.id,
				"name":x.name,
				"price":x.price,
				"brand":x.brand,
				"img":x.productImgs[0]
			})
		})
		console.log(temp)

		listData = props.productData.map((data) => {
			return (
				<div key={data.id} className={styles["product"]}>
					<div className={styles["product-container"]}>
						<Link className={styles["product-link-detail"]}
							to={`/product/${data.category.name.toString()}/${data.id.toString()}`}
						>
							<div className={styles["product-image"]}>
								<img
									src={data.productImgs[0]}
									alt=""
									style={{
										height: "100%",
										width: "100%",
										borderRadius: "15px",
									}}
								/>
							</div>
						</Link>
						{/* <div className={styles['btn-compare']}>
                            <input type="checkbox"/>
                            <span>Compare</span>
                        </div> */}
					</div>
					<div className={styles["infor-product"]}>
						<Link className={styles["product-link-detail"]}
							to={`/product/${data.category.name.toString()}/${data.id.toString()}`}
						>
							<div className={styles["caption"]}>
								<h2 className={styles["name-product"]}>{data.name}</h2>
							</div>
							<p className={styles["price-product"]}>
								{vietnamdognVN.format(data.price)}
							</p>
						</Link>
						<div className={styles["btn-addProduct"]}>
							<button onClick={()=>addToCartHandler(data.id)}>
								<p>Thêm vào giỏ hàng</p>
							</button>
						</div>
					</div>
				</div>
			);
		});
	} else {
		listData = <Loading />;
	}
	return <div className={styles["list-product"]}>
				{listData}
				{/* <LoginBox open={isOpen} onClose={()=>setIsOpen(false)}/> */}
			</div>;
};

const ProductsAPI = (props) => {
	const [selectedWeight, setSelectedWeight] = useState([]);
	const [list, setList] = useState(props.productData);
	const listLocal = props.productData;

	const handleSelectWeight = (value) => {
        //console.log(value,"value")
		if (value) {
			let arr = [];
			if (selectedWeight) {
				let check = true;
				selectedWeight.forEach((element) => {
					if (element.index === value.index) {
						check = false;
						if (element.id.some((id) => id === value.id)) {
							element.id = element.id.filter((id) => id !== value.id);
                            if(element.id.length === 0){
                                element = null
                                console.log("asdfas")
                            
                            }
						} else element.id.push(value.id);
					}
                    if(element){
                        arr.push(element);
                    }
				});
				if (check) {
					arr.push({
						index: value.index,
						id: [value.id],
					});
				}
			} else {
				arr.push({
					index: value.index,
					id: [value.id],
				});
			}
			setSelectedWeight(arr);
		}
	};
	const applyFilters = () => {
		let updatedList = listLocal;
		if (selectedWeight) {
			selectedWeight.forEach(
				(i) =>
					(updatedList = updatedList.filter((product) => {
						if (product.attributes.some((item) => i.id.includes(item.id))) {
							return product;
						}
					}))
			);
		}
		setList(updatedList);
	};
	useEffect(()=>{
	    applyFilters();
	},[selectedWeight])
	useEffect(() => {
		setList(props.productData);
	}, [props.productData]);


	const [clickDown,setClickDown] = useState(false)
	const [clickUp,setClickUp] = useState(false)




	const onclickDown = ()=>{
		setClickDown(!clickDown)
		if(list){
			if(clickDown){

				const listSort = list.sort((a, b) => {
					if (a.price > b.price) return -1;
					if (a.price < b.price) return 1;
					return 0;
				});
				setList(listSort)
			}
		}
	}

	const onclickUp = ()=>{
		setClickUp(!clickUp)
		if(list){
			if(clickUp){
				const listSort = list.sort((a, b) => {
					if (a.price < b.price) return -1;
					if (a.price > b.price) return 1;
					return 0;
				});
				setList(listSort)
			}
		}
	}
	useEffect(()=>{},[clickDown,clickUp])
	return (
		<div className={styles["list"]}>
			<ClassifyProduct
				loadingCatelogy={props.loadingCatelogy}
				classifyData={props.classifyData}
				selectWeight={handleSelectWeight}
			/>
			<div className={styles["sort"]}>
				<p>Sắp xếp theo</p>
				{/* <div>Bán chạy</div>
				<div>Mới về</div> */}
				<div className={styles["sort-down"]} style={{backgroundColor: clickDown ? '#008ECC' : null}} onClick={onclickDown}>Giá giảm dần</div>
				<div className={styles["sort-up"]} onClick={onclickUp}>Giá tăng dần</div>
			</div>
			<ListProduct productData={list} loadingProducts={props.loadingProducts} />
			<div className={styles["padination"]}>
				<a href="#">Previous</a>

				<a href="#">Next</a>
			</div>
		</div>
	);
};

export default ProductsAPI;
