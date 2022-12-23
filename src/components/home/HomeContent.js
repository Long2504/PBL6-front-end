import { Component } from "react";
import { useEffect, useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import styles from "../../assets/appstyle/main.module.css";

const HomeContent = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const slideLength = data.length;

	const [currentLatop,setCurrentLatop] = useState(0);
	const latopLength = dataLatop.length;


	const autoScroll = true;
	let slideInterval;
	let latopInterval;
	let intervalTime = 7000;
	let intervalLatopTime = 5000;

	const nextSlide = () => {
		setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
		console.log("next");
	};

	const prevSlide = () => {
		setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
		console.log("prev");
	};
	const nextLatop = () =>{
		setCurrentLatop(currentLatop === latopLength -1 ? 0 : currentLatop + 1);
	}
	const prevLatop = ()=>{
		setCurrentLatop(currentLatop === 0 ? latopLength - 1  : currentLatop - 1);
	}

	function auto() {
		slideInterval = setInterval(nextSlide, intervalTime);
		latopInterval = setInterval(nextLatop,intervalLatopTime)
	}

	useEffect(() => {
		setCurrentSlide(0);
		setCurrentLatop(0)
	}, []);

	useEffect(() => {
		if (autoScroll) {
			auto();
		}
		return () => clearInterval(slideInterval);
	}, [currentSlide,latopInterval]);


	return (
		<div className={styles["container"]}>
			<div className={styles["slider"]}>
				<GrFormPrevious
					className={styles["arrow"] + " " + styles["prev"]}
					onClick={prevSlide}
				/>
				<GrFormNext
					className={styles["arrow"] + " " + styles["next"]}
					onClick={nextSlide}
				/>
				{data.map((slide, index) => {
					return (
						<div key={index} className={styles["slide"]}>
							{index === currentSlide && <img src={slide.src} alt="slide" />}
						</div>
					);
				})}
			</div>
			<div className={styles["list-latop"]}>
				{/* <GrFormPrevious
					className={styles["arrowLaptop"] + " " + styles["prev"]}
					onClick={prevLatop}
				/>
				<GrFormNext
					className={styles["arrowLaptop"] + " " + styles["next"]}
					onClick={nextLatop}
				/> */}
				{dataLatop.map((latop,index)=>{
					return(
					<div className={styles["item"]} key={index}>
						<img src={latop.img}></img>
						<p style={{color: 'blue'}}>{latop.brand.name}</p>
						<p 
							style={
									{
										width: '200px',
										padding:'0 5px',
										overflow: 'hidden',
										whiteSpace: 'nowrap',
										textOverflow: 'ellipsis',
									}
								}
						>
							{latop.name.split("(")[0]}
						</p>
						<p style={{textAlign: 'center',color:'red',marginBottom: '30px'}}>{vietnamdognVN.format(latop.price)}</p>
					</div>
					)
				})}
				{/* {dataLatop.map((slide, index) => {
					return (
						<div key={index} className={styles["latop"]}>
							{index === currentLatop && <img src={slide.img} alt="slide" />}
						</div>
					);
				})} */}
			</div>
		</div>
	);
};

const data = [
	{
		src: "https://dlcdnwebimgs.asus.com/gain/AA39F748-8AA2-4B41-AE10-0FA4B590583A",
	},
	{
		src: "https://lh3.googleusercontent.com/uhFG93y3uzRI1Hb-NomRB4wgsVRytHcYyjCfYEs4Cievyl7sJRvvPQ-Z1OGkPPABkI4OlBf5VNkchz_4Un522DqQTXovjcRFtg=w1920-rw",
	},
	{
		src: "https://dlcdnwebimgs.asus.com/gain/EF9E42D5-55F8-4DCF-9965-8D8F2788D2FB/fwebp",
	},
	{
		src: "https://lh3.googleusercontent.com/I0OC2jKNm45L54zhuCyVz2SIjXDg6bl2Y8bi65miDTV9p_uI3_WwUT-epQov35UkZgwJ7VLaYln4Bj25ZxYZh387aO3n511O=w1920-rw",
	},
	{
		src: "https://dlcdnwebimgs.asus.com/gain/64B0F267-4834-4C76-BC12-ECEA2BAE0E67",
	},
	{
		src: "https://lh3.googleusercontent.com/2Xl-kUaXg7tyNTRUj-d6l_qSuqEowzAI6v67DGUaEGMQU9lOAkhMhx813M2z2VUjKUNcOaKNFEJCCerwwXMyJ4mlqxAYjXQ=w1920-rw",
	},
];


const dataLatop = [
    {
        "id": 84,
        "name": "Laptop ASUS TUF Gaming FX506LHB-HN188W 90NR03U2-M00B40 (15.6\" Full HD/Intel Core i5-10300H/8GB/512GB SSD/GTX 1650/Windows 11 Home/2.3kg)",
        "price": 18090000,
        "brand": {
            "id": 34,
            "name": "ASUS"
        },
        "img": "https://lh3.googleusercontent.com/bwD_cSPM5Q7uK44wdEumAc0tLwX9EvmfQsVsq-SinunOJP3178hWyx7DzPUt3_a3pqQPxLj3XpH55VqV1yiYHl5Jx0Hd1x0=rw"
    },
    {
        "id": 94,
        "name": "Laptop ASUS VivoBook 15X OLED A1503ZA-L1421W (15.6 inch Full HD/Intel Core i5-12500H/8GB/512GB SSD/Windows 11 Home/1.7kg)",
        "price": 19590000,
        "brand": {
            "id": 34,
            "name": "ASUS"
        },
        "img": "https://lh3.googleusercontent.com/w3XI8Xcv6olzCkvGfW_erWTadUaVVVs7vIOW5lrFktVO25IfuHjYziNPS64FqsqXvogI440FDd_juI93abW7H44oCmM363Ku=rw"
    },
    {
        "id": 104,
        "name": "Laptop ASUS TUF Gaming FX506HC-HN144W 90NR0724-M00FJ0 (15.6\" Full HD/ 144Hz/Intel Core i5-11400H/8GB/512GB SSD/RTX 3050/Windows 11 Home/2.3kg)",
        "price": 22590000,
        "brand": {
            "id": 34,
            "name": "ASUS"
        },
        "img": "https://lh3.googleusercontent.com/UScEzid490C_WH_PUk8ZivEId1Rz5jSXGRNZ1kx6uI883y7cIwa2-WbmWKc1Lbl4zlaA_pXqCzsM1OUM5HJNzjLyavZnH056=rw"
    },
    {
        "id": 114,
        "name": "Laptop HP VICTUS 16-e0168AX 4R0U6PA (16.1\" Full HD/ 144Hz/Ryzen 7 5800H/8GB/512GB SSD/RTX 3050Ti/Windows 11 Home SL/2.4kg)",
        "price": 20890000,
        "brand": {
            "id": 24,
            "name": "HP"
        },
        "img": "https://lh3.googleusercontent.com/eN-CzKl8pD9y4YBopvvahOg28oXDA_JiSKaooTUMv13XatPzFilVRjl47Oc_acVnVIZEenHH0NoLvSiOk8NKriSsthh-DUj9=rw"
    },
    {
        "id": 124,
        "name": "Laptop Asus Zenbook Flip 13 OLED UX363EA-HP726W (13.3inch Full HD/Intel Core i5-1135G7/8GB/512GB SSD/Windows 11 Home/1.3kg)",
        "price": 20690000,
        "brand": {
            "id": 34,
            "name": "ASUS"
        },
        "img": "https://lh3.googleusercontent.com/26DqrxGqF-BKa650zqC4Kh1R0E1_NAbu7vWMDrCtyqfCV6kha3Cq0bPz0L6YUFGtyWIiRdhsWHe80cXOY9KS1mxctxg2Jh_I=rw"
    },
    // {
    //     "id": 134,
    //     "name": "Laptop Lenovo Ideapad Slim 5 14ITL05 82FE016PVN (14\" Intel Core i5-1135G7/8GB/256GB SSD/Onboard/Windows 11 Home SL/1.4kg)",
    //     "price": 13690000,
    //     "brand": {
    //         "id": 14,
    //         "name": "Lenovo"
    //     },
    //     "img": "https://lh3.googleusercontent.com/I1xNahfBjq9G1gXevuQuV6EbhwGl1b94LxroSLT7ACIoa3WocnOGGb8_EcyUWBiSBortS-AmtvlWHlrpC7w53iYeVjFsHGQ=rw"
    // },
    // {
    //     "id": 144,
    //     "name": "Laptop ACER Aspire 5 A514-54-5127 NX.A28SV.007 (14\" Full HD/Intel Core i5-1135G7/8GB/512GB SSD/Onboard/Windows 11 Home SL/1.5kg)",
    //     "price": 14990000,
    //     "brand": {
    //         "id": 4,
    //         "name": "ACER"
    //     },
    //     "img": "https://lh3.googleusercontent.com/02orwFyiy7RcM8bLGmm8on1vJJU0nk3TXaTmLe8PS1tJce4wG6l7q3VrI48EDAfpzcLiL4EuGc3KseXLaFEX9fhK2WcpITaA=rw"
    // },
    // {
    //     "id": 154,
    //     "name": "Laptop Asus Zenbook 13 OLED UX325EA-KG656W (13.3inch Full HD/Intel Core i5-1135G7/8GB/512GB SSD/Windows 11 Home/1.2kg)",
    //     "price": 20190000,
    //     "brand": {
    //         "id": 34,
    //         "name": "ASUS"
    //     },
    //     "img": "https://lh3.googleusercontent.com/rykf3QD3UYldympNma0ffSvcsbYxQE9Lc0gTWPyj_x1jtT6B0lYLjlzfsmptYLnBmCwKDAqc-86Qm4DYLv2E46KmbF0rkfPi=rw"
    // },
    // {
    //     "id": 164,
    //     "name": "Laptop ASUS UX425EA-KI839W (14\" Full HD/Intel Core i5-1135G7/8GB/512GB SSD/Onboard/Windows 11 Home/1.2kg)",
    //     "price": 17999000,
    //     "brand": {
    //         "id": 34,
    //         "name": "ASUS"
    //     },
    //     "img": "https://lh3.googleusercontent.com/4xvDLrhcRB60imziBnIe51GuolY6YCNJVXSNEasABqEcDJhwoVG-EHs0OhA-z8sU52ZIq_lqm96EawyXin4QTAy6n49gzf-z=rw"
    // },
    // {
    //     "id": 174,
    //     "name": "Laptop ACER Nitro AN515-58-773Y NH.QFKSV.001 (15.6\" Full HD/ 144Hz/Intel Core i7-12700H/8GB/512GB SSD/RTX 3050Ti/Windows 11 Home/2.5kg)",
    //     "price": 28990000,
    //     "brand": {
    //         "id": 4,
    //         "name": "ACER"
    //     },
    //     "img": "https://lh3.googleusercontent.com/BY3Lhw6V5cu4l-NQBzCg-1CL0S3brU5gaR1NGectarAVnxSyc7QDMQ1869MEkRRQyiB1IfcMnfWuE2pzDRA0eM3-YpVThKfk=rw"
    // },
    // {
    //     "id": 184,
    //     "name": "Laptop ASUS Vivobook X1502ZA-BQ127W (15.6\" Full HD/Intel Core i5-1240P/8GB/512GB SSD/Onboard/Windows 11 Home/1.7kg)",
    //     "price": 17690000,
    //     "brand": {
    //         "id": 34,
    //         "name": "ASUS"
    //     },
    //     "img": "https://lh3.googleusercontent.com/ymib7imjBCacP4ynOinUPRoELGyR1BmgakMq4q_Szh2tdn3EwBq6Ml312sDpBGroKeJZKsx-OLajTB9xwLYFpZimoG1btkWW=rw"
    // },
    // {
    //     "id": 194,
    //     "name": "Laptop HP ProBook 450 G9 6M0Z5PA (15.6\" Full HD/Intel Core i5-1240P/8GB/512GB SSD/Onboard/Windows 11 Home SL/1.7kg)",
    //     "price": 19990000,
    //     "brand": {
    //         "id": 24,
    //         "name": "HP"
    //     },
    //     "img": "https://lh3.googleusercontent.com/-4znoW-z_MA9rlN5DZYA3JVLi52YGDhv433EP-O6oxyjZ4mMSmPKfhlAHfRUarD6wtfQavdpvWofE6GHwMLaTpse_tVvHmc=rw"
    // }
]
let vietnamdognVN = Intl.NumberFormat("vi", {
	style: "currency",
	currency: "VND",
});
export default HomeContent;
