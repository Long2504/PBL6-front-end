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
				<p>Latop</p>
				<div className={styles["latop"]}>
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
				</div>
			</div>
			<div className={styles["list-latop"]}>
				<p>PC</p>
				<div className={styles["latop"]}>
					{dataPc.map((latop,index)=>{
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
				</div>
			</div>
			<div className={styles["list-latop"]}>
				<p>Màn hình</p>
				<div className={styles["latop"]}>
					{dataPc.map((latop,index)=>{
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
						</div>)
					})}
				</div>
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
    {
        "id": 134,
        "name": "Laptop Lenovo Ideapad Slim 5 14ITL05 82FE016PVN (14\" Intel Core i5-1135G7/8GB/256GB SSD/Onboard/Windows 11 Home SL/1.4kg)",
        "price": 13690000,
        "brand": {
            "id": 14,
            "name": "Lenovo"
        },
        "img": "https://lh3.googleusercontent.com/I1xNahfBjq9G1gXevuQuV6EbhwGl1b94LxroSLT7ACIoa3WocnOGGb8_EcyUWBiSBortS-AmtvlWHlrpC7w53iYeVjFsHGQ=rw"
    },
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


const dataPc = [
    {
        "id": 204,
        "name": "PC Acer Aspire AS-XC780 DT.B8ASV.006 (i5-7400/4GB/1TB HDD/GT 720/Free DOS)",
        "price": 11499000,
        "brand": {
            "id": 4,
            "name": "ACER"
        },
        "img": "https://lh3.googleusercontent.com/kfJJ6e5gz3hA_-6FE6Fj5Dod8TdGPBs3ZrjldT4hCsZqVzaQJ2FQhoCvrS76HMslMhE4vJjhDxmy_pRUYANx=rw"
    },
    {
        "id": 214,
        "name": "PC Dell Inspiron 3470 SFF STI51315 (i5-8400/8GB/1TB HDD/UHD 630/Ubuntu)",
        "price": 12490000,
        "brand": {
            "id": 44,
            "name": "Dell"
        },
        "img": "https://lh3.googleusercontent.com/rt02yVvp1GAhZBTVLoFv8Av594eSEMsdf5aU1D_ZwjYl_wrzePXpkM0iiFwoDBH4P7kjE2xHgxaBDpxalw=rw"
    },
    {
        "id": 224,
        "name": "PC HP Pavilion 590-p0033d 4LY11AA (i3-8100/4GB/1TB HDD/UHD 630/Win10)",
        "price": 9390000,
        "brand": {
            "id": 24,
            "name": "HP"
        },
        "img": "https://lh3.googleusercontent.com/1oBQSzTibXargBXeK8d3YdWPuQTJzqUEQaVWRp5mkCknkvwBrn-5ietcUBw8-b_PCtc-rCikVGAoSuDr0g=rw"
    },
    {
        "id": 234,
        "name": "PC Acer AS XC-885 (i5-8400/4GB/1TB HDD/UHD 630/Endless)",
        "price": 11579000,
        "brand": {
            "id": 4,
            "name": "ACER"
        },
        "img": "https://lh3.googleusercontent.com/T7DaZhoozthJoxW2JG8vvDH3RMkHkeFH2mlebl-emDcVwI7HElxP5J57MP_kUtIXurmVrQM1ldf4bzzUNA0=rw"
    },
    {
        "id": 244,
        "name": "PC HP Pavilion 590-p0079d 4LY18AA (i7-8700/8GB/1TB HDD/GT 730/Free DOS)",
        "price": 18990000,
        "brand": {
            "id": 24,
            "name": "HP"
        },
        "img": "https://lh3.googleusercontent.com/QNfhcIY0H9SpXFwcpQxz3qJAUl1VPVPrWeRMNwPl9Atwby6UzdGAOVOfUZHlpRMawfe0Ko-SzVo7b9qlsA=rw"
    },
    {
        "id": 254,
        "name": "PC Acer Aspire XC-885 DT.BAQSV.006 (G5400/4GB/1TB HDD/UHD 610/Endless)",
        "price": 7590000,
        "brand": {
            "id": 4,
            "name": "ACER"
        },
        "img": "https://lh3.googleusercontent.com/VPdF3s56GQydHy2t1jqJGOb6rblnfo7Uby_v5YcnIuLiBnJ505XDTengFK47BI5ZHHCT0CMxMo_6x0h2WKrRzy2UUBGNON6H=rw"
    },
    // {
    //     "id": 374,
    //     "name": "PC ASUS AIO V222F V222FAK-BA220T (21.5\" Full HD/Intel Core i5-10210U/8GB/512GB SSD/Không HDD/Windows 10 Home SL 64-bit/WiFi 802.11ac)",
    //     "price": 17190000,
    //     "brand": {
    //         "id": 34,
    //         "name": "ASUS"
    //     },
    //     "img": "https://lh3.googleusercontent.com/TYejYKKPMbruXqhvtqctZVCwZkcPhjd3_uuScgpMEdOXgHhel9Btrx-BzGl7-RZBFCagASUaIRA-WxtUcFZe=rw"
    // },
    // {
    //     "id": 384,
    //     "name": "PC Dell Vostro 3888 MT MTG6400W-4G-1T (Intel Pentium G6400/4GB/Không SSD/1TB HDD/Windows 10 Home 64-bit/DVD/CD RW/WiFi 802.11ac)",
    //     "price": 7790000,
    //     "brand": {
    //         "id": 44,
    //         "name": "Dell"
    //     },
    //     "img": "https://lh3.googleusercontent.com/BE_WqWBvfrdurpJb-z4n4IvG4Hnfc407kBOms1RXCLcBxescTAN1GgV9aRxuDw-pIE7hJSjUXKsUvL8gow=rw"
    // },
    // {
    //     "id": 394,
    //     "name": "Liên hệ đặt hàng\nPC Dell Vostro 3681 SFF STI31501W-4G-1T (Intel Core i3-10100/4GB/Không SSD/1TB HDD/Windows 10 Home SL 64-bit + Office/WiFi 802.11ac)",
    //     "price": 9790000,
    //     "brand": {
    //         "id": 44,
    //         "name": "Dell"
    //     },
    //     "img": "https://lh3.googleusercontent.com/Sw9sVYSxJZBfWiwo0JUbrT9z9lXPweWJ6GcGODgHeriHiLaTvheyKDvbNvB-HtkgQGw9iG6NdNRX6HeIJ_M=rw"
    // }
]

const dataScreen = [
    {
        "id": 404,
        "name": "Màn hình LCD MSI Optix G27C7 (1920 x 1080/VA/165Hz/1 ms/FreeSync Premium)",
        "price": 5490000,
        "brand": {
            "id": 64,
            "name": "MSI"
        },
        "img": "https://lh3.googleusercontent.com/4kAZwFiVYe1xybb8Xl5E87gww02gNtPfWGCP2hY2A_DuA-nmVmlAJ1YqJZMkM_UJ1lose60YsJ-CCmat2Zm-1KEL87vpBms=rw"
    },
    {
        "id": 414,
        "name": "Màn hình LCD MSI Optix G27C5 (1920 x 1080/VA/165Hz/1 ms/FreeSync)",
        "price": 5390000,
        "brand": {
            "id": 64,
            "name": "MSI"
        },
        "img": "https://lh3.googleusercontent.com/MK8stTjjej1GxqL31GDh5DdrRXQwJb87iJWPdwHqkvLlIR4Xxz_QOXnC9It7vqDo1gD5MC7FljgkkqkKVs8PWWNEWcKoyBOu=rw"
    },
    {
        "id": 424,
        "name": "Màn hình LCD Lenovo D22e-20 (1920 x 1080/VA/75Hz/4 ms/FreeSync)",
        "price": 2490000,
        "brand": {
            "id": 14,
            "name": "Lenovo"
        },
        "img": "https://lh3.googleusercontent.com/T3bZlJqN9RGLomoVsUln4pkQyXJCWQkIU5sE9UvQOPQCg2F0hplynn4Tznzu7ZFepKC_cSqcWIUJqgMd4Y_Tz4lOd1lUFvwb=rw"
    },
    {
        "id": 434,
        "name": "Màn hình LCD VIEWSONIC VX2718-2KPC-MHD (2560 x 1440/VA/165Hz/1 ms)",
        "price": 5690000,
        "brand": {
            "id": 74,
            "name": "VIEWSONIC"
        },
        "img": "https://lh3.googleusercontent.com/itpp9ZywCBtI2rqXXZAa39HpYJ9GFk6rz2WZdfJFht6ZpMVsteIRwoNV3lkbyPumFuvrVMCkIxbW_m_f-_Z4kuVdGgicmheHJQ=rw"
    },
    {
        "id": 444,
        "name": "Màn hình LCD MSI PRO MP241X (1920 x 1080/VA/75Hz/8 ms)",
        "price": 2790000,
        "brand": {
            "id": 64,
            "name": "MSI"
        },
        "img": "https://lh3.googleusercontent.com/WgkHkFAdGm9Oq1n_R3XkRfRcbOtdy9pThjMMJXwsz49PdfMMG15gn57QCPE-pz8IeHHCOA4ft_T2E_WIeSyNvbi1EmksVas=rw"
    },
    {
        "id": 454,
        "name": "Màn hình LCD ACER AOPEN CV1 22CV1Q (1920 x 1080/VA/75Hz/5 ms)",
        "price": 2490000,
        "brand": {
            "id": 4,
            "name": "ACER"
        },
        "img": "https://lh3.googleusercontent.com/GFlSvTcAGD1oHOz9eB8LnUOimyivhmp1zI-euzNZG4XSmxwolEkWbVuIwz_vxW7SYbIgztG1e6hyBJXNbuVuOoPJBHFNCHUQ=rw"
    },
    {
        "id": 464,
        "name": "Màn hình LCD Lenovo L27e-30 (1920 x 1080/IPS/75Hz/4 ms/FreeSync)",
        "price": 3990000,
        "brand": {
            "id": 14,
            "name": "Lenovo"
        },
        "img": "https://lh3.googleusercontent.com/lEwFIR76oQULHedWQg-X5MOUvHPe81POuvuW1UOxphbkC_qZgvqDJF3ACNrKwgH54JDej-1qGvjUaYylU6vLICUi2XBd4MU=rw"
    },
    {
        "id": 474,
        "name": "Màn Hình ASUS 23.8\" VA249HE (FullHD/VA/5ms)",
        "price": 3090000,
        "brand": {
            "id": 34,
            "name": "ASUS"
        },
        "img": "https://lh3.googleusercontent.com/LbLoqPF53h3n5huTnR5NydXK8rnglNLVAbDjAO4zkVmJoEI5XW5XSLug5o-vf66eZc9CoRrSal9aE2C1iQ=rw"
    },


]

let vietnamdognVN = Intl.NumberFormat("vi", {
	style: "currency",
	currency: "VND",
});
export default HomeContent;
