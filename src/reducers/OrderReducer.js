

export const paymentReducer = (state={},action)=>{
    switch(action.type){
        case "PUSH_PAYMENT_ACCESS":
            console.log(action.link[0])
            localStorage.setItem("linkPayment",JSON.stringify(action.link[0]))
            // return action.link[0]
        default:
            return state
    }
}


export const orderReducer = (state={loading: true, orders: []},action)=>{
    console.log(action.payload,"reducer")
    console.log(action.type,"action.type")
    switch(action.type){
        case 'LIST_ORDER_ACCESS':{
            console.log("ok")
            return { 
                    orders: action.payload,
                    loading: false
                }
        }
        default:
            console.log("ko")
            return state;
    }
};

// [
//     {
//         "id": 34,
//         "dayOrder": "2022-12-04",
//         "user": {
//             "id": 4,
//             "name": "PVK",
//             "dateOfBirth": null,
//             "address": "DN",
//             "phoneNumber": "123456789",
//             "gender": true,
//             "userAccount": null,
//             "email": null
//         },
//         "bill": {
//             "id": 4,
//             "total": 20,
//             "day": "2022-12-04",
//             "user": {
//                 "id": 4,
//                 "name": "PVK",
//                 "dateOfBirth": null,
//                 "address": "DN",
//                 "phoneNumber": "123456789",
//                 "gender": true,
//                 "userAccount": null,
//                 "email": null
//             },
//             "type": true,
//             "billDetails": [
//                 {
//                     "id": 4,
//                     "orderDetail": {
//                         "id": 4,
//                         "amount": 1,
//                         "product": {
//                             "id": 64,
//                             "name": "Laptop ACER Nitro 5 AN515-58-52SP NH.QFHSV.001 (15.6\" Full HD/ 144Hz/Intel Core i5-12500H/8GB/512GB SSD/RTX 3050/Windows 11 Home/2.5kg)",
//                             "information": null,
//                             "description": "- CPU: Intel Core i5-12500Hn- Màn hình: 15.6\" IPS (1920 x 1080),144Hzn- RAM: 1 x 8GB DDR4 3200MHzn- Đồ họa: RTX 3050 4GB GDDR6 / Intel Iris Xe Graphicsn- Lưu trữ: 512GB SSD M.2 NVMe /n- Hệ điều hành: Windows 11 Homen- Pin: 4 cell 57 Whn- Khối lượng: 2.5kg",
//                             "price": 25990000,
//                             "status": true,
//                             "popular": 0,
//                             "rate": 0,
//                             "brand": {
//                                 "id": 4,
//                                 "name": "ACER"
//                             },
//                             "productImgs": [
//                                 "https://lh3.googleusercontent.com/vxtMlqkOdaViU7F5FEcRmYb0emyP-z8cxOyfsqqOWi6ZCb_yK03CcSWT5KovzLnWf9MNKrAgu-ObJjB64YccVU3MUDtB0xs=rw",
//                                 "https://lh3.googleusercontent.com/S6VcHbANR1Qh7WsbW3nj6zfCbuUWOj_NOl9NadgnxTi3vjd_byv2tup5u4n5MI1d3e0BpYJyLYYyiAQyk35xFuP2xGMrWgLjgw=rw",
//                                 "https://lh3.googleusercontent.com/7jBgNEEyzeD7BleG4UN394AAeyxImuEcGE9RQP9QlDeGmx6P6xqX0kRqfwMSmoPSp3S-M1qWMdG6AtQCKXc9I2IyH31_2Yrv=rw",
//                                 "https://lh3.googleusercontent.com/lbHY_zKAtcjGbgcS49uBK6pKBdFFmGPNfw4m78bAsJ938tfH7ptu_BDYH9e5tft3iDBwUrVDPbosk420mEyQcd5w3vfPcXec=rw",
//                                 "https://lh3.googleusercontent.com/tTLvEbGDX7ydz-n-n85yj1OiNHiLBvlJZZ5ftJUUKDKDAs5nTiuOqJEgmHDkZCQ9odEr0qyCwBfzAybEBWDQE4YVR0b3r7OQUQ=rw",
//                                 "https://lh3.googleusercontent.com/CYSfdYN-XDOrBSR9BHkeqUcO2kKBBgct5QTTdvOPiWegjw7t38q9dkIfqTh8FQaaGuZwig_0UMpJddSwkGK-e51e5C_Bu-iu=rw"
//                             ],
//                         }
//                     },
//                     "totalPayable": 25990000
//                 }
//             ]
//         },
//         "orderStatus": {
//             "id": 4,
//             "name": "Chưa xác nhận"
//         },
//         "orderDetailSet": [
//             {
//                 "id": 4,
//                 "amount": 1,
//                 "product": {
//                     "id": 64,
//                     "name": "Laptop ACER Nitro 5 AN515-58-52SP NH.QFHSV.001 (15.6\" Full HD/ 144Hz/Intel Core i5-12500H/8GB/512GB SSD/RTX 3050/Windows 11 Home/2.5kg)",
//                     "information": null,
//                     "description": "- CPU: Intel Core i5-12500Hn- Màn hình: 15.6\" IPS (1920 x 1080),144Hzn- RAM: 1 x 8GB DDR4 3200MHzn- Đồ họa: RTX 3050 4GB GDDR6 / Intel Iris Xe Graphicsn- Lưu trữ: 512GB SSD M.2 NVMe /n- Hệ điều hành: Windows 11 Homen- Pin: 4 cell 57 Whn- Khối lượng: 2.5kg",
//                     "price": 25990000,
//                     "status": true,
//                     "popular": 0,
//                     "rate": 0,
//                     "brand": {
//                         "id": 4,
//                         "name": "ACER"
//                     },
//                     "productImgs": [
//                         "https://lh3.googleusercontent.com/vxtMlqkOdaViU7F5FEcRmYb0emyP-z8cxOyfsqqOWi6ZCb_yK03CcSWT5KovzLnWf9MNKrAgu-ObJjB64YccVU3MUDtB0xs=rw",
//                         "https://lh3.googleusercontent.com/S6VcHbANR1Qh7WsbW3nj6zfCbuUWOj_NOl9NadgnxTi3vjd_byv2tup5u4n5MI1d3e0BpYJyLYYyiAQyk35xFuP2xGMrWgLjgw=rw",
//                         "https://lh3.googleusercontent.com/7jBgNEEyzeD7BleG4UN394AAeyxImuEcGE9RQP9QlDeGmx6P6xqX0kRqfwMSmoPSp3S-M1qWMdG6AtQCKXc9I2IyH31_2Yrv=rw",
//                         "https://lh3.googleusercontent.com/lbHY_zKAtcjGbgcS49uBK6pKBdFFmGPNfw4m78bAsJ938tfH7ptu_BDYH9e5tft3iDBwUrVDPbosk420mEyQcd5w3vfPcXec=rw",
//                         "https://lh3.googleusercontent.com/tTLvEbGDX7ydz-n-n85yj1OiNHiLBvlJZZ5ftJUUKDKDAs5nTiuOqJEgmHDkZCQ9odEr0qyCwBfzAybEBWDQE4YVR0b3r7OQUQ=rw",
//                         "https://lh3.googleusercontent.com/CYSfdYN-XDOrBSR9BHkeqUcO2kKBBgct5QTTdvOPiWegjw7t38q9dkIfqTh8FQaaGuZwig_0UMpJddSwkGK-e51e5C_Bu-iu=rw"
//                     ],
//                     "category": {
//                         "id": 4,
//                         "name": "Laptop",
//                         "optionGroup": null
//                     }
//                 }
//             }
//         ]
//     },
//     {
//         "id": 44,
//         "dayOrder": "2022-12-04",
//         "user": {
//             "id": 4,
//             "name": "PVK",
//             "dateOfBirth": null,
//             "address": "DN",
//             "phoneNumber": "123456789",
//             "gender": true,
//             "userAccount": null,
//             "email": null
//         },
//         "bill": {
//             "id": 14,
//             "total": 22140,
//             "day": "2022-12-04",
//             "user": {
//                 "id": 4,
//                 "name": "PVK",
//                 "dateOfBirth": null,
//                 "address": "DN",
//                 "phoneNumber": "123456789",
//                 "gender": true,
//                 "userAccount": null,
//                 "email": null
//             },
//             "type": true,
//             "billDetails": [
//                 {
//                     "id": 54,
//                     "orderDetail": {
//                         "id": 54,
//                         "amount": 6,
//                         "product": {
//                             "id": 74,
//                             "name": "Laptop Lenovo Slim 7 Pro 14IHU5 O 82NH00BCVN (14\" Intel Core i5-11320H/16GB/512GB SSD/Onboard/Windows 11 Home/1.4kg)",
//                             "information": null,
//                             "description": "- CPU: Intel Core i5-11320Hn- Màn hình: 14\" OLED (2880 x 1800)n- RAM: 16GB Onboard DDR4x 4266MHzn- Đồ họa: Onboard Intel Iris Xe Graphicsn- Lưu trữ: 512GB SSD M.2 NVMe /n- Hệ điều hành: Windows 11 Homen- Pin: 4 cell 61 Wh Pin liềnn- Khối lượng: 1.4kg",
//                             "price": 20290000,
//                             "status": true,
//                             "popular": 0,
//                             "rate": 0,
//                             "brand": {
//                                 "id": 14,
//                                 "name": "Lenovo"
//                             },
//                             "productImgs": [
//                                 "https://lh3.googleusercontent.com/eBTA_R_77-7quAmfPAUfh0Mf5xV8gokNzc72SymBU1SMASGIHtcCMfmliRb3TMgT1jf_w417YJXn2vddUTW7YxQ8qmFbSeEq=rw",
//                                 "https://lh3.googleusercontent.com/5_RBSpfWVeUswJ1ZsUNnvWWelei3ggLmknNaXzzpghKfUB1JYTNMg8P4ZuH3x-I0waZiZ52xxnBO91ivMTNHCMiRfvwdDCF1dQ=rw",
//                                 "https://lh3.googleusercontent.com/patOFS_9rqCSQNmNQq83Tcm3U7K75rUcJtxHTop_K_kTAQbr7nfAaidmvIopsv2e0KwsxnpSxkBrlDPhYOrUo_QyM7uuhMdUpw=rw",
//                                 "https://lh3.googleusercontent.com/KuAMoqinZqeW-KeYVeOhwVajZWRs8-utkGD3bsITjbbD8PmStl9NBTlGjoklG68ShK7ePFPbq5tEb5zyANXumNc6BKnCYUAf=rw"
//                             ],
//                             "category": {
//                                 "id": 4,
//                                 "name": "Laptop",
//                                 "optionGroup": null
//                             }
//                         }
//                     },
//                     "totalPayable": 121740000
//                 },
//                 {
//                     "id": 44,
//                     "orderDetail": {
//                         "id": 44,
//                         "amount": 1,
//                         "product": {
//                             "id": 54,
//                             "name": "Laptop ASUS Vivobook S433EA-AM2307W (14\" Full HD/Intel Core i5-1135G7/8GB/512GB SSD/Onboard/Windows 11 Home/1.4kg)",
//                             "information": null,
//                             "description": "- CPU: Intel Core i5-1135G7n- Màn hình: 14\" IPS (1920 x 1080)n- RAM: 1 x 8GB Onboard DDR4 2666MHzn- Đồ họa: Onboard Intel Iris Xe Graphicsn- Lưu trữ: 512GB SSD M.2 NVMe /n- Hệ điều hành: Windows 11 Homen- Pin: 3 cell 50 Wh Pin liềnn- Khối lượng: 1.4kg",
//                             "price": 15849000,
//                             "status": true,
//                             "popular": 0,
//                             "rate": 0,
//                             "brand": {
//                                 "id": 34,
//                                 "name": "ASUS"
//                             },
//                             "attributes": [
//                                 {
//                                     "id": 594,
//                                     "name": " 1 x M.2 NVMe ",
//                                     "optionGroup": "Số cổng lưu trữ tối đa"
//                                 },
//                                 {
//                                     "id": 834,
//                                     "name": " Adapter ",
//                                     "optionGroup": "Phụ kiện đi kèm"
//                                 },
//                                 {
//                                     "id": 414,
//                                     "name": "Văn phòng, Học sinh - Sinh viên, Doanh nhân",
//                                     "optionGroup": "Nhu cầu"
//                                 },
//                                 {
//                                     "id": 54,
//                                     "name": " Core i5 , Intel Core thế hệ thứ 11 ",
//                                     "optionGroup": "Thế hệ CPU"
//                                 },
//                                 {
//                                     "id": 814,
//                                     "name": " 3 cell  50 Wh , Pin liền ",
//                                     "optionGroup": "Pin"
//                                 },
//                                 {
//                                     "id": 804,
//                                     "name": " 32.40 x 21.30 x 1.59 cm ",
//                                     "optionGroup": "Kích thước"
//                                 },
//                                 {
//                                     "id": 754,
//                                     "name": " 1 x 8GB Onboard  DDR4  2666MHz  Không nâng cấp được )",
//                                     "optionGroup": "RAM"
//                                 },
//                                 {
//                                     "id": 194,
//                                     "name": " không đèn ",
//                                     "optionGroup": "Đèn LED trên máy"
//                                 },
//                                 {
//                                     "id": 154,
//                                     "name": " Windows 11 Home ",
//                                     "optionGroup": "Hệ điều hành"
//                                 },
//                                 {
//                                     "id": 794,
//                                     "name": " thường , không phím số , LED ",
//                                     "optionGroup": "Bàn phím"
//                                 },
//                                 {
//                                     "id": 64,
//                                     "name": " Intel Core i5-1135G7 ( 2.4 GHz - 4.2 GHz / 8MB / 4 nhân, 8 luồng )",
//                                     "optionGroup": "CPU"
//                                 },
//                                 {
//                                     "id": 74,
//                                     "name": " Onboard  Intel Iris Xe Graphics ",
//                                     "optionGroup": "Chip đồ họa"
//                                 },
//                                 {
//                                     "id": 744,
//                                     "name": "VivoBook",
//                                     "optionGroup": "Series laptop"
//                                 },
//                                 {
//                                     "id": 784,
//                                     "name": " WiFi 802.11ax (Wifi 6) , Bluetooth 5.0 ",
//                                     "optionGroup": "Kết nối không dây"
//                                 },
//                                 {
//                                     "id": 114,
//                                     "name": " 1 x HDMI ",
//                                     "optionGroup": "Cổng xuất hình"
//                                 },
//                                 {
//                                     "id": 764,
//                                     "name": " 14\" ( 1920 x 1080 ) Full HD  IPS  không cảm ứng , HD webcam ",
//                                     "optionGroup": "Màn hình"
//                                 },
//                                 {
//                                     "id": 824,
//                                     "name": " 1.4 kg",
//                                     "optionGroup": "Khối lượng"
//                                 },
//                                 {
//                                     "id": 374,
//                                     "name": "24",
//                                     "optionGroup": "Bảo hành"
//                                 },
//                                 {
//                                     "id": 104,
//                                     "name": " 512GB SSD M.2 NVMe /",
//                                     "optionGroup": "Lưu trữ"
//                                 },
//                                 {
//                                     "id": 294,
//                                     "name": " M.2 NVMe ",
//                                     "optionGroup": "Kiểu khe M.2 hỗ trợ"
//                                 },
//                                 {
//                                     "id": 224,
//                                     "name": "Đen",
//                                     "optionGroup": "Màu sắc"
//                                 },
//                                 {
//                                     "id": 774,
//                                     "name": ", 1 x USB 3.2 , 2 x USB 2.0 , 1 x Thunderbolt 4 , 1 x micro SD card slot , 1 x 3.5 mm ",
//                                     "optionGroup": "Cổng kết nối"
//                                 }
//                             ],
//                             "productImgs": [
//                                 "https://lh3.googleusercontent.com/SibIaDsIc9JaUdGI15bvQ-SAZeP-G1F9LzE9Kd5bvDJVNdGgM6YH5675aeJZfCFTBqBhHmWFAv9FDJAAoPrhK2iN5otP4Wo5=rw",
//                                 "https://lh3.googleusercontent.com/rNPfKQhwCbBBJeFOilnb_OeLFvo1ZddEsY3yHmUuhK46GN-K1dS5li0bo3k_eDFuX2P09ob1Ae70s4q0M3Tw4mPD_4AfBDiv=rw",
//                                 "https://lh3.googleusercontent.com/98i5QRJmMrInyGJpXV_HE3XadRbtnYpge6hF27jUHyx03aO8JQgwIj2-ksWtR1BAOVo3SCbtr_LSoILI6Du2ZHwigo27nBg=rw",
//                                 "https://lh3.googleusercontent.com/dWmtdVDDUsPiUwsUToB_-GZDf6WIGVfut1PDN-9aLRTzikWCNqFtrJAByPSwNQ4lw7QWG9QyRZYWfLer3XNoAxTFiBq7hi1x=rw",
//                                 "https://lh3.googleusercontent.com/SBsynFSa-KDkbkMooGN5Yr05leiPog2Er5Nr3RQwVJn874GJYeDj0pfMbcD32ZNSDfuIT7ooAWRxQMi_sAEToCQyw8yWxD0Bpw=rw",
//                                 "https://lh3.googleusercontent.com/ceWo1tfYavNXCGgquNR1rQ-Cavp763YM7A6ZuiGjtCbNY59F6Sj9NK_bqloJuloRQu5Ig3GUbDlGsb_r3xsBOogRoflYzS0C=rw"
//                             ],
//                             "category": {
//                                 "id": 4,
//                                 "name": "Laptop",
//                                 "optionGroup": null
//                             }
//                         }
//                     },
//                     "totalPayable": 15849000
//                 },
//                 {
//                     "id": 24,
//                     "orderDetail": {
//                         "id": 24,
//                         "amount": 11,
//                         "product": {
//                             "id": 4,
//                             "name": "Laptop ACER Aspire 3 A315-58-54M5 NX.ADDSV.00M (15.6\" Full HD/Intel Core i5-1135G7/8GB/512GB SSD/Onboard/Windows 11 Home/1.7kg)",
//                             "information": null,
//                             "description": "- CPU: Intel Core i5-1135G7n- Màn hình: 15.6\" TFT (1920 x 1080)n- RAM: 1 x 4GB, 1 x 4GB Onboard DDR4 2400MHzn- Đồ họa: Onboard Intel Iris Xe Graphicsn- Lưu trữ: 512GB SSD M.2 NVMe /n- Hệ điều hành: Windows 11 Homen- Pin: 2 cell 36 Wh Pin liềnn- Khối lượng: 1.7kg",
//                             "price": 13990000,
//                             "status": true,
//                             "popular": 0,
//                             "rate": 0,
//                             "brand": {
//                                 "id": 4,
//                                 "name": "ACER"
//                             },
//                             "attributes": [
//                                 {
//                                     "id": 84,
//                                     "name": " 1 x 4GB, 1 x 4GB Onboard  DDR4  2400MHz ( 1 Khe cắm / Hỗ trợ tối đa 12GB )",
//                                     "optionGroup": "RAM"
//                                 },
//                                 {
//                                     "id": 14,
//                                     "name": "Aspire 3",
//                                     "optionGroup": "Series laptop"
//                                 },
//                                 {
//                                     "id": 24,
//                                     "name": "NX.ADDSV.00M",
//                                     "optionGroup": "Part-number"
//                                 },
//                                 {
//                                     "id": 134,
//                                     "name": " WiFi 802.11ac , Bluetooth 5.0 ",
//                                     "optionGroup": "Kết nối không dây"
//                                 },
//                                 {
//                                     "id": 94,
//                                     "name": " 15.6\" ( 1920 x 1080 ) Full HD  TFT  không cảm ứng , HD webcam ",
//                                     "optionGroup": "Màn hình"
//                                 },
//                                 {
//                                     "id": 34,
//                                     "name": "Bạc",
//                                     "optionGroup": "Màu sắc"
//                                 },
//                                 {
//                                     "id": 44,
//                                     "name": "Văn phòng, Học sinh - Sinh viên",
//                                     "optionGroup": "Nhu cầu"
//                                 },
//                                 {
//                                     "id": 184,
//                                     "name": " 1.7 kg",
//                                     "optionGroup": "Khối lượng"
//                                 },
//                                 {
//                                     "id": 54,
//                                     "name": " Core i5 , Intel Core thế hệ thứ 11 ",
//                                     "optionGroup": "Thế hệ CPU"
//                                 },
//                                 {
//                                     "id": 194,
//                                     "name": " không đèn ",
//                                     "optionGroup": "Đèn LED trên máy"
//                                 },
//                                 {
//                                     "id": 154,
//                                     "name": " Windows 11 Home ",
//                                     "optionGroup": "Hệ điều hành"
//                                 },
//                                 {
//                                     "id": 174,
//                                     "name": " 2 cell  36 Wh , Pin liền ",
//                                     "optionGroup": "Pin"
//                                 },
//                                 {
//                                     "id": 64,
//                                     "name": " Intel Core i5-1135G7 ( 2.4 GHz - 4.2 GHz / 8MB / 4 nhân, 8 luồng )",
//                                     "optionGroup": "CPU"
//                                 },
//                                 {
//                                     "id": 74,
//                                     "name": " Onboard  Intel Iris Xe Graphics ",
//                                     "optionGroup": "Chip đồ họa"
//                                 },
//                                 {
//                                     "id": 114,
//                                     "name": " 1 x HDMI ",
//                                     "optionGroup": "Cổng xuất hình"
//                                 },
//                                 {
//                                     "id": 104,
//                                     "name": " 512GB SSD M.2 NVMe /",
//                                     "optionGroup": "Lưu trữ"
//                                 },
//                                 {
//                                     "id": 144,
//                                     "name": " thường , có phím số , không đèn ",
//                                     "optionGroup": "Bàn phím"
//                                 },
//                                 {
//                                     "id": 124,
//                                     "name": ", 2 x USB 3.2 , 1 x USB 2.0 , 1 x 3.5 mm ",
//                                     "optionGroup": "Cổng kết nối"
//                                 },
//                                 {
//                                     "id": 164,
//                                     "name": " 36.34  x 23.84 x 1.99 cm ",
//                                     "optionGroup": "Kích thước"
//                                 },
//                                 {
//                                     "id": 4,
//                                     "name": "12",
//                                     "optionGroup": "Bảo hành"
//                                 }
//                             ],
//                             "productImgs": [
//                                 "https://lh3.googleusercontent.com/_SApryKFms-BYshoOG9JRUG14-JLrnShoUSZ7_4_JqcYW5YaL2eRJ0cw4AXNjOmHDi1q-f-dVFH3BwyiCMxg-7-mAsKPGA-LcA=rw",
//                                 "https://lh3.googleusercontent.com/UjItPK0m1nmYk_zpkPRX_ggyaFJpoLicy78a44cex1h6G4xgyH86cfM1fzzTi6osFdf-_KIh_nW8SJs_7iupGxZvsXzs9OVr=rw",
//                                 "https://lh3.googleusercontent.com/DMFtL22zhD3hvuunhr9mJROV07cjlqYYm_F1yLKZqbmMvS-2VtNs97-VXFGYAANJ-h6-7-oIQFPpEu3cGEBo0m4JyYYn2X4=rw",
//                                 "https://lh3.googleusercontent.com/oSWDmUGzrKrzGwR_N2auPrFqR3dtS8BC1mrp5tcWUmMTfGzuRu-ZWuo3ORv6uwmHP91CBMexhzHjeQec2O3OlIAwzCZIXyI=rw",
//                                 "https://lh3.googleusercontent.com/bvX4yeqE0GIvs2a5KThhi2uBVgdTcotBFbbMkCDZnrb_ohhUf__IS1FRCrRftwYPYoX0dRPv5Lt9xUWJjEdT4YTJ648kabHL=rw",
//                                 "https://lh3.googleusercontent.com/TMzf4NWHcqy1EtU851La6R83YP5i_2bQZoz3mmqplG9a-tPJqY_pHL8oeqkTuf0x00ipw7XN0r_YhQm-fB3HMXwk5oEEuUvt=rw"
//                             ],
//                             "category": {
//                                 "id": 4,
//                                 "name": "Laptop",
//                                 "optionGroup": null
//                             }
//                         }
//                     },
//                     "totalPayable": 153890000
//                 },
//                 {
//                     "id": 34,
//                     "orderDetail": {
//                         "id": 34,
//                         "amount": 2,
//                         "product": {
//                             "id": 24,
//                             "name": "Laptop Lenovo IdeaPad 5 15ITL05 82FG01H8VN (15.6\" Intel Core i5-1135G7/8GB/256GB SSD/Onboard/Windows 11 Home/1.7kg)",
//                             "information": null,
//                             "description": "- CPU: Intel Core i5-1135G7n- Màn hình: 15.6\" IPS (1920 x 1080)n- RAM: 8GB Onboard DDR4 3200MHzn- Đồ họa: Onboard Intel Iris Xe Graphicsn- Lưu trữ: 256GB SSD M.2 NVMe /n- Hệ điều hành: Windows 11 Homen- Pin: 3 cell Pin liềnn- Khối lượng: 1.7kg",
//                             "price": 13590000,
//                             "status": true,
//                             "popular": 0,
//                             "rate": 0,
//                             "brand": {
//                                 "id": 14,
//                                 "name": "Lenovo"
//                             },
//                             "attributes": [
//                                 {
//                                     "id": 464,
//                                     "name": " 1 x USB Type C / DisplayPort / Data / Power Delivery , 2 x USB 3.2 , Có , 1 x 3.5 mm ",
//                                     "optionGroup": "Cổng kết nối"
//                                 },
//                                 {
//                                     "id": 504,
//                                     "name": " Vân tay ",
//                                     "optionGroup": "Bảo mật"
//                                 },
//                                 {
//                                     "id": 514,
//                                     "name": " Adapter, dây nguồn ",
//                                     "optionGroup": "Phụ kiện đi kèm"
//                                 },
//                                 {
//                                     "id": 184,
//                                     "name": " 1.7 kg",
//                                     "optionGroup": "Khối lượng"
//                                 },
//                                 {
//                                     "id": 414,
//                                     "name": "Văn phòng, Học sinh - Sinh viên, Doanh nhân",
//                                     "optionGroup": "Nhu cầu"
//                                 },
//                                 {
//                                     "id": 434,
//                                     "name": " 15.6\" ( 1920 x 1080 ) IPS  không cảm ứng , HD webcam ",
//                                     "optionGroup": "Màn hình"
//                                 },
//                                 {
//                                     "id": 54,
//                                     "name": " Core i5 , Intel Core thế hệ thứ 11 ",
//                                     "optionGroup": "Thế hệ CPU"
//                                 },
//                                 {
//                                     "id": 194,
//                                     "name": " không đèn ",
//                                     "optionGroup": "Đèn LED trên máy"
//                                 },
//                                 {
//                                     "id": 484,
//                                     "name": " 35.6 x 23 x 2 cm ",
//                                     "optionGroup": "Kích thước"
//                                 },
//                                 {
//                                     "id": 314,
//                                     "name": " WiFi 802.11ax (Wifi 6) , Bluetooth 5.1 ",
//                                     "optionGroup": "Kết nối không dây"
//                                 },
//                                 {
//                                     "id": 154,
//                                     "name": " Windows 11 Home ",
//                                     "optionGroup": "Hệ điều hành"
//                                 },
//                                 {
//                                     "id": 424,
//                                     "name": " 8GB Onboard  DDR4  3200MHz ",
//                                     "optionGroup": "RAM"
//                                 },
//                                 {
//                                     "id": 454,
//                                     "name": " 1 x 2.5\" SATA , 1 x M.2 NVMe ",
//                                     "optionGroup": "Số cổng lưu trữ tối đa"
//                                 },
//                                 {
//                                     "id": 64,
//                                     "name": " Intel Core i5-1135G7 ( 2.4 GHz - 4.2 GHz / 8MB / 4 nhân, 8 luồng )",
//                                     "optionGroup": "CPU"
//                                 },
//                                 {
//                                     "id": 74,
//                                     "name": " Onboard  Intel Iris Xe Graphics ",
//                                     "optionGroup": "Chip đồ họa"
//                                 },
//                                 {
//                                     "id": 444,
//                                     "name": " 256GB SSD M.2 NVMe /",
//                                     "optionGroup": "Lưu trữ"
//                                 },
//                                 {
//                                     "id": 114,
//                                     "name": " 1 x HDMI ",
//                                     "optionGroup": "Cổng xuất hình"
//                                 },
//                                 {
//                                     "id": 474,
//                                     "name": " thường , có phím số , LED ",
//                                     "optionGroup": "Bàn phím"
//                                 },
//                                 {
//                                     "id": 374,
//                                     "name": "24",
//                                     "optionGroup": "Bảo hành"
//                                 },
//                                 {
//                                     "id": 494,
//                                     "name": " 3 cell  Pin liền ",
//                                     "optionGroup": "Pin"
//                                 },
//                                 {
//                                     "id": 294,
//                                     "name": " M.2 NVMe ",
//                                     "optionGroup": "Kiểu khe M.2 hỗ trợ"
//                                 },
//                                 {
//                                     "id": 384,
//                                     "name": "Ideapad",
//                                     "optionGroup": "Series laptop"
//                                 },
//                                 {
//                                     "id": 394,
//                                     "name": "82FG01H8VN",
//                                     "optionGroup": "Part-number"
//                                 },
//                                 {
//                                     "id": 404,
//                                     "name": "Xám",
//                                     "optionGroup": "Màu sắc"
//                                 }
//                             ],
//                             "productImgs": [
//                                 "https://lh3.googleusercontent.com/ItGJvpevoQUkoMg85ctFGTFu1YjI23VBHFeVXaOxKtXNpWDqR_p5DvAsGDWm_-mwct-zx24AgWLILEMxPw9KxElWbmYvfI2a=rw",
//                                 "https://lh3.googleusercontent.com/mqYiWLGxYSB3xAQm30hNVwC4xSivdACGmvA2-jt2DpcTSASYt6ZS77LEIPvc0umOf4_FTNtjk_aD2oyJV18HQznw5P_HYXaATQ=rw",
//                                 "https://lh3.googleusercontent.com/h9S3GCHDl7ftHhbXzF5dIqhDLqkv-uv-ThAywvY5V9boRg0wBgJJMn_2QIW_5HeXq6C63q3aHR6CXWjO7TOGNG8lStmF783l=rw",
//                                 "https://lh3.googleusercontent.com/JGmlpSmwO7_bFddYgK470U0T3637AqPsIMU0pqXVFniFgiR04GUQSChj-jHjNSxnT8ACIQ3cBymvHpxSkJOIxsYAWVX9iKau=rw",
//                                 "https://lh3.googleusercontent.com/pj_kfivd2UziP73V1ENDX0p1F1IhmBL1IritqJciuyHja3lV5J2FUTJUkNxuq7YgJGXhdgjy-Dc5Dpetbf4ZbzPfD8thwTw=rw",
//                                 "https://lh3.googleusercontent.com/UL9bIySZatUyckrYhzv4NV7v9aiOeOUUM5nbkvF_M6jjDF_4ctEcEx2--m8bTZWP74ESzIp6b8GMLMlcM1YzdPw1yM07K0o=rw"
//                             ],
//                             "category": {
//                                 "id": 4,
//                                 "name": "Laptop",
//                                 "optionGroup": null
//                             }
//                         }
//                     },
//                     "totalPayable": 27180000
//                 },
//                 {
//                     "id": 64,
//                     "orderDetail": {
//                         "id": 64,
//                         "amount": 2,
//                         "product": {
//                             "id": 34,
//                             "name": "Laptop HP 15s-fq2663TU 6K796PA (15.6\" HD/Intel Core i3-1115G4/4GB/256GB SSD/Onboard/Windows 11 Home/1.7kg)",
//                             "information": null,
//                             "description": "- CPU: Intel Core i3-1115G4n- Màn hình: 15.6\" IPS (1366 x 768)n- RAM: 1 x 4GB DDR4 3200MHzn- Đồ họa: Onboard Intel UHD Graphicsn- Lưu trữ: 256GB SSD M.2 NVMe /n- Hệ điều hành: Windows 11 Homen- Pin: 3 cell 41 Wh Pin liềnn- Khối lượng: 1.7kg",
//                             "price": 9329000,
//                             "status": true,
//                             "popular": 0,
//                             "rate": 0,
//                             "brand": {
//                                 "id": 24,
//                                 "name": "HP"
//                             },
//                             "attributes": [
//                                 {
//                                     "id": 524,
//                                     "name": "HP 15s",
//                                     "optionGroup": "Series laptop"
//                                 },
//                                 {
//                                     "id": 574,
//                                     "name": " 1 x 4GB  DDR4  3200MHz ( 2 Khe cắm ",
//                                     "optionGroup": "RAM"
//                                 },
//                                 {
//                                     "id": 594,
//                                     "name": " 1 x M.2 NVMe ",
//                                     "optionGroup": "Số cổng lưu trữ tối đa"
//                                 },
//                                 {
//                                     "id": 34,
//                                     "name": "Bạc",
//                                     "optionGroup": "Màu sắc"
//                                 },
//                                 {
//                                     "id": 514,
//                                     "name": " Adapter, dây nguồn ",
//                                     "optionGroup": "Phụ kiện đi kèm"
//                                 },
//                                 {
//                                     "id": 604,
//                                     "name": " 1 x USB Type C , 2 x USB 3.1 , 1 x SD card slot , 1 x 3.5 mm ",
//                                     "optionGroup": "Cổng kết nối"
//                                 },
//                                 {
//                                     "id": 184,
//                                     "name": " 1.7 kg",
//                                     "optionGroup": "Khối lượng"
//                                 },
//                                 {
//                                     "id": 624,
//                                     "name": " 35,85 x 24,2 x 1,79 cm ",
//                                     "optionGroup": "Kích thước"
//                                 },
//                                 {
//                                     "id": 544,
//                                     "name": " Core i3 , Intel Core thế hệ thứ 11 ",
//                                     "optionGroup": "Thế hệ CPU"
//                                 },
//                                 {
//                                     "id": 564,
//                                     "name": " Onboard  Intel UHD Graphics ",
//                                     "optionGroup": "Chip đồ họa"
//                                 },
//                                 {
//                                     "id": 194,
//                                     "name": " không đèn ",
//                                     "optionGroup": "Đèn LED trên máy"
//                                 },
//                                 {
//                                     "id": 154,
//                                     "name": " Windows 11 Home ",
//                                     "optionGroup": "Hệ điều hành"
//                                 },
//                                 {
//                                     "id": 444,
//                                     "name": " 256GB SSD M.2 NVMe /",
//                                     "optionGroup": "Lưu trữ"
//                                 },
//                                 {
//                                     "id": 614,
//                                     "name": " WiFi 802.11ac , Bluetooth ",
//                                     "optionGroup": "Kết nối không dây"
//                                 },
//                                 {
//                                     "id": 114,
//                                     "name": " 1 x HDMI ",
//                                     "optionGroup": "Cổng xuất hình"
//                                 },
//                                 {
//                                     "id": 144,
//                                     "name": " thường , có phím số , không đèn ",
//                                     "optionGroup": "Bàn phím"
//                                 },
//                                 {
//                                     "id": 584,
//                                     "name": " 15.6\" ( 1366 x 768 ) HD  IPS  không cảm ứng , HD webcam ",
//                                     "optionGroup": "Màn hình"
//                                 },
//                                 {
//                                     "id": 294,
//                                     "name": " M.2 NVMe ",
//                                     "optionGroup": "Kiểu khe M.2 hỗ trợ"
//                                 },
//                                 {
//                                     "id": 534,
//                                     "name": "6K796PA",
//                                     "optionGroup": "Part-number"
//                                 },
//                                 {
//                                     "id": 4,
//                                     "name": "12",
//                                     "optionGroup": "Bảo hành"
//                                 },
//                                 {
//                                     "id": 634,
//                                     "name": " 3 cell  41 Wh , Pin liền ",
//                                     "optionGroup": "Pin"
//                                 },
//                                 {
//                                     "id": 554,
//                                     "name": " Intel Core i3-1115G4 ( 3.0 GHz - 4.10 GHz / 6MB / 2 nhân, 4 luồng )",
//                                     "optionGroup": "CPU"
//                                 }
//                             ],
//                             "productImgs": [
//                                 "https://lh3.googleusercontent.com/yqkk21P63g5kDn0r2ge1ukXuWFx0A2sg_dKeNfzU1BD9yXWRjoMxQ5Zu6glpVttBgcskWR2T573Gr2XQl9V1zb-cNkG-RG_UCA=rw",
//                                 "https://lh3.googleusercontent.com/ExBFc3KthYGD_6se7PDT_cfd6DjqjglxPjopB_JZTIaU_gkkHG67ZOzSvrORF1mrith9xGSh6OO_sTzoPuQCEfK9YnDAl4U=rw",
//                                 "https://lh3.googleusercontent.com/pLSWEbZnYE90TnCi7r4GHl7Z7uAl2VS0HP1i1_b5siByA26-2lBZletWDsAB1oPN55KbSh5fJBkNn96CN8YEzhZeaC-o6NZM=rw",
//                                 "https://lh3.googleusercontent.com/FJl73GnQ_Nj_G51oHs5ozglGWnePzmY-grc4GHFkIcGvJ3hj5cO_bO4hjU7R9JEkq6uXwM5HuHAlrvj-YJ6ybGFWdwoVjKgd=rw",
//                                 "https://lh3.googleusercontent.com/mEznvsl856MIm3ciaHT18aa2lnZxuFhDj4u2FKV325_XKilthr9b2VRRAqdE-DmANG9XV7W3Vws3eEDEz4OWR42kb__msp9W9Q=rw",
//                                 "https://lh3.googleusercontent.com/u5C50irP1bBeUpC1JeuXH6cu9nd_vcFmA6KqduF67fUU9dXRLNoMWo7lXZYQCCU1TKV_U9iUsqttnoEdUvcD9DxKF9v1Ce0w=rw"
//                             ],
//                             "category": {
//                                 "id": 4,
//                                 "name": "Laptop",
//                                 "optionGroup": null
//                             }
//                         }
//                     },
//                     "totalPayable": 18658000
//                 },
//                 {
//                     "id": 74,
//                     "orderDetail": {
//                         "id": 74,
//                         "amount": 1,
//                         "product": {
//                             "id": 44,
//                             "name": "Laptop ACER Aspire 7 A715-42G-R05G NH.QAYSV.007 (15.6\" Full HD/ 144Hz/AMD Ryzen 5 5500U/8GB/512GB SSD/GTX 1650/Windows 11 Home/2.1kg)",
//                             "information": null,
//                             "description": "- CPU: AMD Ryzen 5 5500Un- Màn hình: 15.6\" IPS (1920 x 1080),144Hzn- RAM: 1 x 8GB DDR4 3200MHzn- Đồ họa: GTX 1650 4GB GDDR6 / AMD Radeon Graphicsn- Lưu trữ: 512GB SSD M.2 NVMe /n- Hệ điều hành: Windows 11 Homen- 48 Whn- Khối lượng: 2.1kg",
//                             "price": 17990000,
//                             "status": true,
//                             "popular": 0,
//                             "rate": 0,
//                             "brand": {
//                                 "id": 4,
//                                 "name": "ACER"
//                             },
//                             "attributes": [
//                                 {
//                                     "id": 664,
//                                     "name": " Ryzen 5 ",
//                                     "optionGroup": "Thế hệ CPU"
//                                 },
//                                 {
//                                     "id": 704,
//                                     "name": " 36.34 x 25.45 x 2.29 cm ",
//                                     "optionGroup": "Kích thước"
//                                 },
//                                 {
//                                     "id": 264,
//                                     "name": " 1 x 8GB  DDR4  3200MHz ( 2 Khe cắm / Hỗ trợ tối đa 32GB )",
//                                     "optionGroup": "RAM"
//                                 },
//                                 {
//                                     "id": 274,
//                                     "name": " 15.6\" ( 1920 x 1080 ) Full HD  IPS  144Hz , không cảm ứng , HD webcam ",
//                                     "optionGroup": "Màn hình"
//                                 },
//                                 {
//                                     "id": 724,
//                                     "name": " 2.1 kg",
//                                     "optionGroup": "Khối lượng"
//                                 },
//                                 {
//                                     "id": 194,
//                                     "name": " không đèn ",
//                                     "optionGroup": "Đèn LED trên máy"
//                                 },
//                                 {
//                                     "id": 314,
//                                     "name": " WiFi 802.11ax (Wifi 6) , Bluetooth 5.1 ",
//                                     "optionGroup": "Kết nối không dây"
//                                 },
//                                 {
//                                     "id": 154,
//                                     "name": " Windows 11 Home ",
//                                     "optionGroup": "Hệ điều hành"
//                                 },
//                                 {
//                                     "id": 674,
//                                     "name": " AMD Ryzen 5 5500U ( 2.1 GHz - 4.0 GHz / 8MB / 6 nhân, 12 luồng )",
//                                     "optionGroup": "CPU"
//                                 },
//                                 {
//                                     "id": 644,
//                                     "name": "Aspire 7",
//                                     "optionGroup": "Series laptop"
//                                 },
//                                 {
//                                     "id": 114,
//                                     "name": " 1 x HDMI ",
//                                     "optionGroup": "Cổng xuất hình"
//                                 },
//                                 {
//                                     "id": 474,
//                                     "name": " thường , có phím số , LED ",
//                                     "optionGroup": "Bàn phím"
//                                 },
//                                 {
//                                     "id": 734,
//                                     "name": " Cáp + Sạc ",
//                                     "optionGroup": "Phụ kiện đi kèm"
//                                 },
//                                 {
//                                     "id": 104,
//                                     "name": " 512GB SSD M.2 NVMe /",
//                                     "optionGroup": "Lưu trữ"
//                                 },
//                                 {
//                                     "id": 714,
//                                     "name": " 48 Wh ",
//                                     "optionGroup": "Pin"
//                                 },
//                                 {
//                                     "id": 234,
//                                     "name": "Gaming, Đồ họa - Kỹ thuật",
//                                     "optionGroup": "Nhu cầu"
//                                 },
//                                 {
//                                     "id": 684,
//                                     "name": " GTX 1650  4GB  GDDR6 / AMD Radeon Graphics ",
//                                     "optionGroup": "Chip đồ họa"
//                                 },
//                                 {
//                                     "id": 654,
//                                     "name": "NH.QAYSV.007",
//                                     "optionGroup": "Part-number"
//                                 },
//                                 {
//                                     "id": 224,
//                                     "name": "Đen",
//                                     "optionGroup": "Màu sắc"
//                                 },
//                                 {
//                                     "id": 4,
//                                     "name": "12",
//                                     "optionGroup": "Bảo hành"
//                                 },
//                                 {
//                                     "id": 694,
//                                     "name": " 1 x USB 3.2 Type C , 2 x USB 3.2 , 1 x USB 2.0 , 1 x 3.5 mm , LAN 1 Gb/s ",
//                                     "optionGroup": "Cổng kết nối"
//                                 }
//                             ],
//                             "productImgs": [
//                                 "https://lh3.googleusercontent.com/OkLPlLsIqibtBYHIP3pEbgxHWlrQpk-ovb17_tCWFOSpeI69rwv3vipZUmFSVazWxXBtaJ3LVsMtonor5ApsqnP4KShtB_CGOg=rw",
//                                 "https://lh3.googleusercontent.com/zpqPNYQHrVN8NGALoJbu2RBE5tqQEah_XQFaFceDMNmP81HZjvOeCk82AMi-XFeAKyOyzOC8j78TOivwnVR3MKsY67Ae0_eevw=rw",
//                                 "https://lh3.googleusercontent.com/0aAtoPP6U6sFoe2aDqBycVLIK5lY_J4io8ZNxmF-kyC4pNTrmI-jgaAiWhZWMCLi8svtQQ09H1U8zsLLYGTsIAw63iY-XaT2=rw",
//                                 "https://lh3.googleusercontent.com/ITuM-86ObB_Q_pELdb6s3xjIvvECtOl2IxJJ9_4RUSaYmzOMEprg8EOQ-VKdFOeI3SFNL-fpnFL7KQggDoo84bXE2WIB_cDe=rw",
//                                 "https://lh3.googleusercontent.com/QgyT9fB879ELmTVifbGqKWX9g07TeQ6QUxMhBRcI6q7nlJyqpSnmh9L2nIdQR1Pfesf9FFmJ7VCLjpET0BrnYXRx3DaKHB7k0g=rw",
//                                 "https://lh3.googleusercontent.com/s3mgvrWmESD41Vo_SWfsoNj7fUGD75Wx_mbyt3A4p35Inbz6ZLdNV6AL04lZF2-KroSl3Y4tnOD6DbfJ-6oUSV_QzJ8U3qQ9=rw"
//                             ],
//                             "category": {
//                                 "id": 4,
//                                 "name": "Laptop",
//                                 "optionGroup": null
//                             }
//                         }
//                     },
//                     "totalPayable": 17990000
//                 },
//                 {
//                     "id": 14,
//                     "orderDetail": {
//                         "id": 14,
//                         "amount": 7,
//                         "product": {
//                             "id": 14,
//                             "name": "Laptop ACER Nitro 5 Eagle AN515-57-54MV NH.QENSV.003 (15.6\" Full HD/ 144Hz/Intel Core i5-11400H/8GB/512GB SSD/RTX 3050/Windows 11/2.2kg)",
//                             "information": null,
//                             "description": "- CPU: Intel Core i5-11400Hn- Màn hình: 15.6\" IPS (1920 x 1080),144Hzn- RAM: 1 x 8GB DDR4 3200MHzn- Đồ họa: RTX 3050 4GB GDDR6 / Intel UHD Graphicsn- Lưu trữ: 512GB SSD M.2 NVMe /n- Hệ điều hành: Windows 11n- Pin: 4 cell 57 Wh Pin liềnn- Khối lượng: 2.2kg",
//                             "price": 21990000,
//                             "status": true,
//                             "popular": 0,
//                             "rate": 0,
//                             "brand": {
//                                 "id": 4,
//                                 "name": "ACER"
//                             },
//                             "attributes": [
//                                 {
//                                     "id": 254,
//                                     "name": " RTX 3050  4GB  GDDR6 / Intel UHD Graphics ",
//                                     "optionGroup": "Chip đồ họa"
//                                 },
//                                 {
//                                     "id": 324,
//                                     "name": " thường , có phím số , RGB ",
//                                     "optionGroup": "Bàn phím"
//                                 },
//                                 {
//                                     "id": 354,
//                                     "name": " 4 cell  57 Wh , Pin liền ",
//                                     "optionGroup": "Pin"
//                                 },
//                                 {
//                                     "id": 364,
//                                     "name": " 2.2 kg",
//                                     "optionGroup": "Khối lượng"
//                                 },
//                                 {
//                                     "id": 284,
//                                     "name": " 1 x 2.5\" SATA , 2 x M.2 NVMe ",
//                                     "optionGroup": "Số cổng lưu trữ tối đa"
//                                 },
//                                 {
//                                     "id": 54,
//                                     "name": " Core i5 , Intel Core thế hệ thứ 11 ",
//                                     "optionGroup": "Thế hệ CPU"
//                                 },
//                                 {
//                                     "id": 214,
//                                     "name": "NH.QENSV.003",
//                                     "optionGroup": "Part-number"
//                                 },
//                                 {
//                                     "id": 264,
//                                     "name": " 1 x 8GB  DDR4  3200MHz ( 2 Khe cắm / Hỗ trợ tối đa 32GB )",
//                                     "optionGroup": "RAM"
//                                 },
//                                 {
//                                     "id": 274,
//                                     "name": " 15.6\" ( 1920 x 1080 ) Full HD  IPS  144Hz , không cảm ứng , HD webcam ",
//                                     "optionGroup": "Màn hình"
//                                 },
//                                 {
//                                     "id": 194,
//                                     "name": " không đèn ",
//                                     "optionGroup": "Đèn LED trên máy"
//                                 },
//                                 {
//                                     "id": 334,
//                                     "name": " Windows 11 ",
//                                     "optionGroup": "Hệ điều hành"
//                                 },
//                                 {
//                                     "id": 314,
//                                     "name": " WiFi 802.11ax (Wifi 6) , Bluetooth 5.1 ",
//                                     "optionGroup": "Kết nối không dây"
//                                 },
//                                 {
//                                     "id": 114,
//                                     "name": " 1 x HDMI ",
//                                     "optionGroup": "Cổng xuất hình"
//                                 },
//                                 {
//                                     "id": 104,
//                                     "name": " 512GB SSD M.2 NVMe /",
//                                     "optionGroup": "Lưu trữ"
//                                 },
//                                 {
//                                     "id": 294,
//                                     "name": " M.2 NVMe ",
//                                     "optionGroup": "Kiểu khe M.2 hỗ trợ"
//                                 },
//                                 {
//                                     "id": 234,
//                                     "name": "Gaming, Đồ họa - Kỹ thuật",
//                                     "optionGroup": "Nhu cầu"
//                                 },
//                                 {
//                                     "id": 244,
//                                     "name": " Intel Core i5-11400H ( 2.7 GHz - 4.5 GHz / 12MB / 6 nhân, 12 luồng )",
//                                     "optionGroup": "CPU"
//                                 },
//                                 {
//                                     "id": 344,
//                                     "name": " 36.34  x 25.5  x 2.39 cm ",
//                                     "optionGroup": "Kích thước"
//                                 },
//                                 {
//                                     "id": 304,
//                                     "name": " 1 x USB Type C / DisplayPort , 3 x USB 3.2 , 1 x 3.5 mm , LAN 1 Gb/s ",
//                                     "optionGroup": "Cổng kết nối"
//                                 },
//                                 {
//                                     "id": 224,
//                                     "name": "Đen",
//                                     "optionGroup": "Màu sắc"
//                                 },
//                                 {
//                                     "id": 4,
//                                     "name": "12",
//                                     "optionGroup": "Bảo hành"
//                                 },
//                                 {
//                                     "id": 204,
//                                     "name": "Nitro 5",
//                                     "optionGroup": "Series laptop"
//                                 }
//                             ],
//                             "productImgs": [
//                                 "https://lh3.googleusercontent.com/c7VuA4P8sHHJCilfzRVp50AQmgZEkJOyOCuh4vvkcT9jxfqTzZVd2gepUFSSqzXVSEljnYlAN319sJD-H1IztNcxPT3UypA=rw",
//                                 "https://lh3.googleusercontent.com/eOT1uNpQy6j-EBoWZTZfelVhvIppYxHOUv27da3RWHyZAj89Wtf1p-qxmVNZnrnkyE8-k9mXQB_r3f19Z1dA5Oy2fgM3lOws=rw",
//                                 "https://lh3.googleusercontent.com/DY4nUu6snSsCeNmr0I2blgMRo_nY3FMgy2x1ZY8SNgTsPKI02qh5ZMU99qhkZnxS0lZds6-3o4GekAB806VNLFPQfKsZscML=rw",
//                                 "https://lh3.googleusercontent.com/_8W1EMpxpcb_lDJ-nhGMxsqP-ja6GW8iZHwREklHxrkkHcZxEKJTEyaRq817_McgSwXR0e0dQpvl2DxrjumLjU8-3L6u4xpI=rw",
//                                 "https://lh3.googleusercontent.com/VpJgldxtdddsmBwMTP0iqPG4-W0WAKCTFE3iYe7XUaXUhvFvePH514GCSoH2TDLHiMOYxKSzRh7hCsmdM1429r-tk_8haRUr3Q=rw",
//                                 "https://lh3.googleusercontent.com/kpxJEY3p1mLKsaiQdUuL8gK_JPyrawmy_oxRXlU9b_p9TrrPo3hQOBhlXXutOyDABYTmxgnuuDkutPg0VgbUls42ctkH5WXY=rw"
//                             ],
//                             "category": {
//                                 "id": 4,
//                                 "name": "Laptop",
//                                 "optionGroup": null
//                             }
//                         }
//                     },
//                     "totalPayable": 153930000
//                 }
//             ]
//         },
//         "orderStatus": {
//             "id": 4,
//             "name": "Chưa xác nhận"
//         },
//         "orderDetailSet": [
//             {
//                 "id": 24,
//                 "amount": 11,
//                 "product": {
//                     "id": 4,
//                     "name": "Laptop ACER Aspire 3 A315-58-54M5 NX.ADDSV.00M (15.6\" Full HD/Intel Core i5-1135G7/8GB/512GB SSD/Onboard/Windows 11 Home/1.7kg)",
//                     "information": null,
//                     "description": "- CPU: Intel Core i5-1135G7n- Màn hình: 15.6\" TFT (1920 x 1080)n- RAM: 1 x 4GB, 1 x 4GB Onboard DDR4 2400MHzn- Đồ họa: Onboard Intel Iris Xe Graphicsn- Lưu trữ: 512GB SSD M.2 NVMe /n- Hệ điều hành: Windows 11 Homen- Pin: 2 cell 36 Wh Pin liềnn- Khối lượng: 1.7kg",
//                     "price": 13990000,
//                     "status": true,
//                     "popular": 0,
//                     "rate": 0,
//                     "brand": {
//                         "id": 4,
//                         "name": "ACER"
//                     },
//                     "productImgs": [
//                         "https://lh3.googleusercontent.com/_SApryKFms-BYshoOG9JRUG14-JLrnShoUSZ7_4_JqcYW5YaL2eRJ0cw4AXNjOmHDi1q-f-dVFH3BwyiCMxg-7-mAsKPGA-LcA=rw",
//                         "https://lh3.googleusercontent.com/UjItPK0m1nmYk_zpkPRX_ggyaFJpoLicy78a44cex1h6G4xgyH86cfM1fzzTi6osFdf-_KIh_nW8SJs_7iupGxZvsXzs9OVr=rw",
//                         "https://lh3.googleusercontent.com/DMFtL22zhD3hvuunhr9mJROV07cjlqYYm_F1yLKZqbmMvS-2VtNs97-VXFGYAANJ-h6-7-oIQFPpEu3cGEBo0m4JyYYn2X4=rw",
//                         "https://lh3.googleusercontent.com/oSWDmUGzrKrzGwR_N2auPrFqR3dtS8BC1mrp5tcWUmMTfGzuRu-ZWuo3ORv6uwmHP91CBMexhzHjeQec2O3OlIAwzCZIXyI=rw",
//                         "https://lh3.googleusercontent.com/bvX4yeqE0GIvs2a5KThhi2uBVgdTcotBFbbMkCDZnrb_ohhUf__IS1FRCrRftwYPYoX0dRPv5Lt9xUWJjEdT4YTJ648kabHL=rw",
//                         "https://lh3.googleusercontent.com/TMzf4NWHcqy1EtU851La6R83YP5i_2bQZoz3mmqplG9a-tPJqY_pHL8oeqkTuf0x00ipw7XN0r_YhQm-fB3HMXwk5oEEuUvt=rw"
//                     ],
//                     "category": {
//                         "id": 4,
//                         "name": "Laptop",
//                         "optionGroup": null
//                     }
//                 }
//             },
//             {
//                 "id": 74,
//                 "amount": 1,
//                 "product": {
//                     "id": 44,
//                     "name": "Laptop ACER Aspire 7 A715-42G-R05G NH.QAYSV.007 (15.6\" Full HD/ 144Hz/AMD Ryzen 5 5500U/8GB/512GB SSD/GTX 1650/Windows 11 Home/2.1kg)",
//                     "information": null,
//                     "description": "- CPU: AMD Ryzen 5 5500Un- Màn hình: 15.6\" IPS (1920 x 1080),144Hzn- RAM: 1 x 8GB DDR4 3200MHzn- Đồ họa: GTX 1650 4GB GDDR6 / AMD Radeon Graphicsn- Lưu trữ: 512GB SSD M.2 NVMe /n- Hệ điều hành: Windows 11 Homen- 48 Whn- Khối lượng: 2.1kg",
//                     "price": 17990000,
//                     "status": true,
//                     "popular": 0,
//                     "rate": 0,
//                     "brand": {
//                         "id": 4,
//                         "name": "ACER"
//                     },
//                     "attributes": [
//                         {
//                             "id": 664,
//                             "name": " Ryzen 5 ",
//                             "optionGroup": "Thế hệ CPU"
//                         },
//                         {
//                             "id": 704,
//                             "name": " 36.34 x 25.45 x 2.29 cm ",
//                             "optionGroup": "Kích thước"
//                         },
//                         {
//                             "id": 264,
//                             "name": " 1 x 8GB  DDR4  3200MHz ( 2 Khe cắm / Hỗ trợ tối đa 32GB )",
//                             "optionGroup": "RAM"
//                         },
//                         {
//                             "id": 274,
//                             "name": " 15.6\" ( 1920 x 1080 ) Full HD  IPS  144Hz , không cảm ứng , HD webcam ",
//                             "optionGroup": "Màn hình"
//                         },
//                         {
//                             "id": 724,
//                             "name": " 2.1 kg",
//                             "optionGroup": "Khối lượng"
//                         },
//                         {
//                             "id": 194,
//                             "name": " không đèn ",
//                             "optionGroup": "Đèn LED trên máy"
//                         },
//                         {
//                             "id": 314,
//                             "name": " WiFi 802.11ax (Wifi 6) , Bluetooth 5.1 ",
//                             "optionGroup": "Kết nối không dây"
//                         },
//                         {
//                             "id": 154,
//                             "name": " Windows 11 Home ",
//                             "optionGroup": "Hệ điều hành"
//                         },
//                         {
//                             "id": 674,
//                             "name": " AMD Ryzen 5 5500U ( 2.1 GHz - 4.0 GHz / 8MB / 6 nhân, 12 luồng )",
//                             "optionGroup": "CPU"
//                         },
//                         {
//                             "id": 644,
//                             "name": "Aspire 7",
//                             "optionGroup": "Series laptop"
//                         },
//                         {
//                             "id": 114,
//                             "name": " 1 x HDMI ",
//                             "optionGroup": "Cổng xuất hình"
//                         },
//                         {
//                             "id": 474,
//                             "name": " thường , có phím số , LED ",
//                             "optionGroup": "Bàn phím"
//                         },
//                         {
//                             "id": 734,
//                             "name": " Cáp + Sạc ",
//                             "optionGroup": "Phụ kiện đi kèm"
//                         },
//                         {
//                             "id": 104,
//                             "name": " 512GB SSD M.2 NVMe /",
//                             "optionGroup": "Lưu trữ"
//                         },
//                         {
//                             "id": 714,
//                             "name": " 48 Wh ",
//                             "optionGroup": "Pin"
//                         },
//                         {
//                             "id": 234,
//                             "name": "Gaming, Đồ họa - Kỹ thuật",
//                             "optionGroup": "Nhu cầu"
//                         },
//                         {
//                             "id": 684,
//                             "name": " GTX 1650  4GB  GDDR6 / AMD Radeon Graphics ",
//                             "optionGroup": "Chip đồ họa"
//                         },
//                         {
//                             "id": 654,
//                             "name": "NH.QAYSV.007",
//                             "optionGroup": "Part-number"
//                         },
//                         {
//                             "id": 224,
//                             "name": "Đen",
//                             "optionGroup": "Màu sắc"
//                         },
//                         {
//                             "id": 4,
//                             "name": "12",
//                             "optionGroup": "Bảo hành"
//                         },
//                         {
//                             "id": 694,
//                             "name": " 1 x USB 3.2 Type C , 2 x USB 3.2 , 1 x USB 2.0 , 1 x 3.5 mm , LAN 1 Gb/s ",
//                             "optionGroup": "Cổng kết nối"
//                         }
//                     ],
//                     "productImgs": [
//                         "https://lh3.googleusercontent.com/OkLPlLsIqibtBYHIP3pEbgxHWlrQpk-ovb17_tCWFOSpeI69rwv3vipZUmFSVazWxXBtaJ3LVsMtonor5ApsqnP4KShtB_CGOg=rw",
//                         "https://lh3.googleusercontent.com/zpqPNYQHrVN8NGALoJbu2RBE5tqQEah_XQFaFceDMNmP81HZjvOeCk82AMi-XFeAKyOyzOC8j78TOivwnVR3MKsY67Ae0_eevw=rw",
//                         "https://lh3.googleusercontent.com/0aAtoPP6U6sFoe2aDqBycVLIK5lY_J4io8ZNxmF-kyC4pNTrmI-jgaAiWhZWMCLi8svtQQ09H1U8zsLLYGTsIAw63iY-XaT2=rw",
//                         "https://lh3.googleusercontent.com/ITuM-86ObB_Q_pELdb6s3xjIvvECtOl2IxJJ9_4RUSaYmzOMEprg8EOQ-VKdFOeI3SFNL-fpnFL7KQggDoo84bXE2WIB_cDe=rw",
//                         "https://lh3.googleusercontent.com/QgyT9fB879ELmTVifbGqKWX9g07TeQ6QUxMhBRcI6q7nlJyqpSnmh9L2nIdQR1Pfesf9FFmJ7VCLjpET0BrnYXRx3DaKHB7k0g=rw",
//                         "https://lh3.googleusercontent.com/s3mgvrWmESD41Vo_SWfsoNj7fUGD75Wx_mbyt3A4p35Inbz6ZLdNV6AL04lZF2-KroSl3Y4tnOD6DbfJ-6oUSV_QzJ8U3qQ9=rw"
//                     ],
//                     "category": {
//                         "id": 4,
//                         "name": "Laptop",
//                         "optionGroup": null
//                     }
//                 }
//             },
//             {
//                 "id": 14,
//                 "amount": 7,
//                 "product": {
//                     "id": 14,
//                     "name": "Laptop ACER Nitro 5 Eagle AN515-57-54MV NH.QENSV.003 (15.6\" Full HD/ 144Hz/Intel Core i5-11400H/8GB/512GB SSD/RTX 3050/Windows 11/2.2kg)",
//                     "information": null,
//                     "description": "- CPU: Intel Core i5-11400Hn- Màn hình: 15.6\" IPS (1920 x 1080),144Hzn- RAM: 1 x 8GB DDR4 3200MHzn- Đồ họa: RTX 3050 4GB GDDR6 / Intel UHD Graphicsn- Lưu trữ: 512GB SSD M.2 NVMe /n- Hệ điều hành: Windows 11n- Pin: 4 cell 57 Wh Pin liềnn- Khối lượng: 2.2kg",
//                     "price": 21990000,
//                     "status": true,
//                     "popular": 0,
//                     "rate": 0,
//                     "brand": {
//                         "id": 4,
//                         "name": "ACER"
//                     },
//                     "productImgs": [
//                         "https://lh3.googleusercontent.com/c7VuA4P8sHHJCilfzRVp50AQmgZEkJOyOCuh4vvkcT9jxfqTzZVd2gepUFSSqzXVSEljnYlAN319sJD-H1IztNcxPT3UypA=rw",
//                         "https://lh3.googleusercontent.com/eOT1uNpQy6j-EBoWZTZfelVhvIppYxHOUv27da3RWHyZAj89Wtf1p-qxmVNZnrnkyE8-k9mXQB_r3f19Z1dA5Oy2fgM3lOws=rw",
//                         "https://lh3.googleusercontent.com/DY4nUu6snSsCeNmr0I2blgMRo_nY3FMgy2x1ZY8SNgTsPKI02qh5ZMU99qhkZnxS0lZds6-3o4GekAB806VNLFPQfKsZscML=rw",
//                         "https://lh3.googleusercontent.com/_8W1EMpxpcb_lDJ-nhGMxsqP-ja6GW8iZHwREklHxrkkHcZxEKJTEyaRq817_McgSwXR0e0dQpvl2DxrjumLjU8-3L6u4xpI=rw",
//                         "https://lh3.googleusercontent.com/VpJgldxtdddsmBwMTP0iqPG4-W0WAKCTFE3iYe7XUaXUhvFvePH514GCSoH2TDLHiMOYxKSzRh7hCsmdM1429r-tk_8haRUr3Q=rw",
//                         "https://lh3.googleusercontent.com/kpxJEY3p1mLKsaiQdUuL8gK_JPyrawmy_oxRXlU9b_p9TrrPo3hQOBhlXXutOyDABYTmxgnuuDkutPg0VgbUls42ctkH5WXY=rw"
//                     ],
//                     "category": {
//                         "id": 4,
//                         "name": "Laptop",
//                         "optionGroup": null
//                     }
//                 }
//             },
//             {
//                 "id": 34,
//                 "amount": 2,
//                 "product": {
//                     "id": 24,
//                     "name": "Laptop Lenovo IdeaPad 5 15ITL05 82FG01H8VN (15.6\" Intel Core i5-1135G7/8GB/256GB SSD/Onboard/Windows 11 Home/1.7kg)",
//                     "information": null,
//                     "description": "- CPU: Intel Core i5-1135G7n- Màn hình: 15.6\" IPS (1920 x 1080)n- RAM: 8GB Onboard DDR4 3200MHzn- Đồ họa: Onboard Intel Iris Xe Graphicsn- Lưu trữ: 256GB SSD M.2 NVMe /n- Hệ điều hành: Windows 11 Homen- Pin: 3 cell Pin liềnn- Khối lượng: 1.7kg",
//                     "price": 13590000,
//                     "status": true,
//                     "popular": 0,
//                     "rate": 0,
//                     "brand": {
//                         "id": 14,
//                         "name": "Lenovo"
//                     },
//                     "attributes": [
//                         {
//                             "id": 464,
//                             "name": " 1 x USB Type C / DisplayPort / Data / Power Delivery , 2 x USB 3.2 , Có , 1 x 3.5 mm ",
//                             "optionGroup": "Cổng kết nối"
//                         },
//                         {
//                             "id": 504,
//                             "name": " Vân tay ",
//                             "optionGroup": "Bảo mật"
//                         },
//                         {
//                             "id": 514,
//                             "name": " Adapter, dây nguồn ",
//                             "optionGroup": "Phụ kiện đi kèm"
//                         },
//                         {
//                             "id": 184,
//                             "name": " 1.7 kg",
//                             "optionGroup": "Khối lượng"
//                         },
//                         {
//                             "id": 414,
//                             "name": "Văn phòng, Học sinh - Sinh viên, Doanh nhân",
//                             "optionGroup": "Nhu cầu"
//                         },
//                         {
//                             "id": 434,
//                             "name": " 15.6\" ( 1920 x 1080 ) IPS  không cảm ứng , HD webcam ",
//                             "optionGroup": "Màn hình"
//                         },
//                         {
//                             "id": 54,
//                             "name": " Core i5 , Intel Core thế hệ thứ 11 ",
//                             "optionGroup": "Thế hệ CPU"
//                         },
//                         {
//                             "id": 194,
//                             "name": " không đèn ",
//                             "optionGroup": "Đèn LED trên máy"
//                         },
//                         {
//                             "id": 484,
//                             "name": " 35.6 x 23 x 2 cm ",
//                             "optionGroup": "Kích thước"
//                         },
//                         {
//                             "id": 314,
//                             "name": " WiFi 802.11ax (Wifi 6) , Bluetooth 5.1 ",
//                             "optionGroup": "Kết nối không dây"
//                         },
//                         {
//                             "id": 154,
//                             "name": " Windows 11 Home ",
//                             "optionGroup": "Hệ điều hành"
//                         },
//                         {
//                             "id": 424,
//                             "name": " 8GB Onboard  DDR4  3200MHz ",
//                             "optionGroup": "RAM"
//                         },
//                         {
//                             "id": 454,
//                             "name": " 1 x 2.5\" SATA , 1 x M.2 NVMe ",
//                             "optionGroup": "Số cổng lưu trữ tối đa"
//                         },
//                         {
//                             "id": 64,
//                             "name": " Intel Core i5-1135G7 ( 2.4 GHz - 4.2 GHz / 8MB / 4 nhân, 8 luồng )",
//                             "optionGroup": "CPU"
//                         },
//                         {
//                             "id": 74,
//                             "name": " Onboard  Intel Iris Xe Graphics ",
//                             "optionGroup": "Chip đồ họa"
//                         },
//                         {
//                             "id": 444,
//                             "name": " 256GB SSD M.2 NVMe /",
//                             "optionGroup": "Lưu trữ"
//                         },
//                         {
//                             "id": 114,
//                             "name": " 1 x HDMI ",
//                             "optionGroup": "Cổng xuất hình"
//                         },
//                         {
//                             "id": 474,
//                             "name": " thường , có phím số , LED ",
//                             "optionGroup": "Bàn phím"
//                         },
//                         {
//                             "id": 374,
//                             "name": "24",
//                             "optionGroup": "Bảo hành"
//                         },
//                         {
//                             "id": 494,
//                             "name": " 3 cell  Pin liền ",
//                             "optionGroup": "Pin"
//                         },
//                         {
//                             "id": 294,
//                             "name": " M.2 NVMe ",
//                             "optionGroup": "Kiểu khe M.2 hỗ trợ"
//                         },
//                         {
//                             "id": 384,
//                             "name": "Ideapad",
//                             "optionGroup": "Series laptop"
//                         },
//                         {
//                             "id": 394,
//                             "name": "82FG01H8VN",
//                             "optionGroup": "Part-number"
//                         },
//                         {
//                             "id": 404,
//                             "name": "Xám",
//                             "optionGroup": "Màu sắc"
//                         }
//                     ],
//                     "productImgs": [
//                         "https://lh3.googleusercontent.com/ItGJvpevoQUkoMg85ctFGTFu1YjI23VBHFeVXaOxKtXNpWDqR_p5DvAsGDWm_-mwct-zx24AgWLILEMxPw9KxElWbmYvfI2a=rw",
//                         "https://lh3.googleusercontent.com/mqYiWLGxYSB3xAQm30hNVwC4xSivdACGmvA2-jt2DpcTSASYt6ZS77LEIPvc0umOf4_FTNtjk_aD2oyJV18HQznw5P_HYXaATQ=rw",
//                         "https://lh3.googleusercontent.com/h9S3GCHDl7ftHhbXzF5dIqhDLqkv-uv-ThAywvY5V9boRg0wBgJJMn_2QIW_5HeXq6C63q3aHR6CXWjO7TOGNG8lStmF783l=rw",
//                         "https://lh3.googleusercontent.com/JGmlpSmwO7_bFddYgK470U0T3637AqPsIMU0pqXVFniFgiR04GUQSChj-jHjNSxnT8ACIQ3cBymvHpxSkJOIxsYAWVX9iKau=rw",
//                         "https://lh3.googleusercontent.com/pj_kfivd2UziP73V1ENDX0p1F1IhmBL1IritqJciuyHja3lV5J2FUTJUkNxuq7YgJGXhdgjy-Dc5Dpetbf4ZbzPfD8thwTw=rw",
//                         "https://lh3.googleusercontent.com/UL9bIySZatUyckrYhzv4NV7v9aiOeOUUM5nbkvF_M6jjDF_4ctEcEx2--m8bTZWP74ESzIp6b8GMLMlcM1YzdPw1yM07K0o=rw"
//                     ],
//                     "category": {
//                         "id": 4,
//                         "name": "Laptop",
//                         "optionGroup": null
//                     }
//                 }
//             },
//             {
//                 "id": 44,
//                 "amount": 1,
//                 "product": {
//                     "id": 54,
//                     "name": "Laptop ASUS Vivobook S433EA-AM2307W (14\" Full HD/Intel Core i5-1135G7/8GB/512GB SSD/Onboard/Windows 11 Home/1.4kg)",
//                     "information": null,
//                     "description": "- CPU: Intel Core i5-1135G7n- Màn hình: 14\" IPS (1920 x 1080)n- RAM: 1 x 8GB Onboard DDR4 2666MHzn- Đồ họa: Onboard Intel Iris Xe Graphicsn- Lưu trữ: 512GB SSD M.2 NVMe /n- Hệ điều hành: Windows 11 Homen- Pin: 3 cell 50 Wh Pin liềnn- Khối lượng: 1.4kg",
//                     "price": 15849000,
//                     "status": true,
//                     "popular": 0,
//                     "rate": 0,
//                     "brand": {
//                         "id": 34,
//                         "name": "ASUS"
//                     },
//                     "productImgs": [
//                         "https://lh3.googleusercontent.com/SibIaDsIc9JaUdGI15bvQ-SAZeP-G1F9LzE9Kd5bvDJVNdGgM6YH5675aeJZfCFTBqBhHmWFAv9FDJAAoPrhK2iN5otP4Wo5=rw",
//                         "https://lh3.googleusercontent.com/rNPfKQhwCbBBJeFOilnb_OeLFvo1ZddEsY3yHmUuhK46GN-K1dS5li0bo3k_eDFuX2P09ob1Ae70s4q0M3Tw4mPD_4AfBDiv=rw",
//                         "https://lh3.googleusercontent.com/98i5QRJmMrInyGJpXV_HE3XadRbtnYpge6hF27jUHyx03aO8JQgwIj2-ksWtR1BAOVo3SCbtr_LSoILI6Du2ZHwigo27nBg=rw",
//                         "https://lh3.googleusercontent.com/dWmtdVDDUsPiUwsUToB_-GZDf6WIGVfut1PDN-9aLRTzikWCNqFtrJAByPSwNQ4lw7QWG9QyRZYWfLer3XNoAxTFiBq7hi1x=rw",
//                         "https://lh3.googleusercontent.com/SBsynFSa-KDkbkMooGN5Yr05leiPog2Er5Nr3RQwVJn874GJYeDj0pfMbcD32ZNSDfuIT7ooAWRxQMi_sAEToCQyw8yWxD0Bpw=rw",
//                         "https://lh3.googleusercontent.com/ceWo1tfYavNXCGgquNR1rQ-Cavp763YM7A6ZuiGjtCbNY59F6Sj9NK_bqloJuloRQu5Ig3GUbDlGsb_r3xsBOogRoflYzS0C=rw"
//                     ],
//                     "category": {
//                         "id": 4,
//                         "name": "Laptop",
//                         "optionGroup": null
//                     }
//                 }
//             },
//             {
//                 "id": 64,
//                 "amount": 2,
//                 "product": {
//                     "id": 34,
//                     "name": "Laptop HP 15s-fq2663TU 6K796PA (15.6\" HD/Intel Core i3-1115G4/4GB/256GB SSD/Onboard/Windows 11 Home/1.7kg)",
//                     "information": null,
//                     "description": "- CPU: Intel Core i3-1115G4n- Màn hình: 15.6\" IPS (1366 x 768)n- RAM: 1 x 4GB DDR4 3200MHzn- Đồ họa: Onboard Intel UHD Graphicsn- Lưu trữ: 256GB SSD M.2 NVMe /n- Hệ điều hành: Windows 11 Homen- Pin: 3 cell 41 Wh Pin liềnn- Khối lượng: 1.7kg",
//                     "price": 9329000,
//                     "status": true,
//                     "popular": 0,
//                     "rate": 0,
//                     "brand": {
//                         "id": 24,
//                         "name": "HP"
//                     },
//                     "productImgs": [
//                         "https://lh3.googleusercontent.com/yqkk21P63g5kDn0r2ge1ukXuWFx0A2sg_dKeNfzU1BD9yXWRjoMxQ5Zu6glpVttBgcskWR2T573Gr2XQl9V1zb-cNkG-RG_UCA=rw",
//                         "https://lh3.googleusercontent.com/ExBFc3KthYGD_6se7PDT_cfd6DjqjglxPjopB_JZTIaU_gkkHG67ZOzSvrORF1mrith9xGSh6OO_sTzoPuQCEfK9YnDAl4U=rw",
//                         "https://lh3.googleusercontent.com/pLSWEbZnYE90TnCi7r4GHl7Z7uAl2VS0HP1i1_b5siByA26-2lBZletWDsAB1oPN55KbSh5fJBkNn96CN8YEzhZeaC-o6NZM=rw",
//                         "https://lh3.googleusercontent.com/FJl73GnQ_Nj_G51oHs5ozglGWnePzmY-grc4GHFkIcGvJ3hj5cO_bO4hjU7R9JEkq6uXwM5HuHAlrvj-YJ6ybGFWdwoVjKgd=rw",
//                         "https://lh3.googleusercontent.com/mEznvsl856MIm3ciaHT18aa2lnZxuFhDj4u2FKV325_XKilthr9b2VRRAqdE-DmANG9XV7W3Vws3eEDEz4OWR42kb__msp9W9Q=rw",
//                         "https://lh3.googleusercontent.com/u5C50irP1bBeUpC1JeuXH6cu9nd_vcFmA6KqduF67fUU9dXRLNoMWo7lXZYQCCU1TKV_U9iUsqttnoEdUvcD9DxKF9v1Ce0w=rw"
//                     ],
//                     "category": {
//                         "id": 4,
//                         "name": "Laptop",
//                         "optionGroup": null
//                     }
//                 }
//             },
//             {
//                 "id": 54,
//                 "amount": 6,
//                 "product": {
//                     "id": 74,
//                     "name": "Laptop Lenovo Slim 7 Pro 14IHU5 O 82NH00BCVN (14\" Intel Core i5-11320H/16GB/512GB SSD/Onboard/Windows 11 Home/1.4kg)",
//                     "information": null,
//                     "description": "- CPU: Intel Core i5-11320Hn- Màn hình: 14\" OLED (2880 x 1800)n- RAM: 16GB Onboard DDR4x 4266MHzn- Đồ họa: Onboard Intel Iris Xe Graphicsn- Lưu trữ: 512GB SSD M.2 NVMe /n- Hệ điều hành: Windows 11 Homen- Pin: 4 cell 61 Wh Pin liềnn- Khối lượng: 1.4kg",
//                     "price": 20290000,
//                     "status": true,
//                     "popular": 0,
//                     "rate": 0,
//                     "brand": {
//                         "id": 14,
//                         "name": "Lenovo"
//                     },
//                     "productImgs": [
//                         "https://lh3.googleusercontent.com/eBTA_R_77-7quAmfPAUfh0Mf5xV8gokNzc72SymBU1SMASGIHtcCMfmliRb3TMgT1jf_w417YJXn2vddUTW7YxQ8qmFbSeEq=rw",
//                         "https://lh3.googleusercontent.com/5_RBSpfWVeUswJ1ZsUNnvWWelei3ggLmknNaXzzpghKfUB1JYTNMg8P4ZuH3x-I0waZiZ52xxnBO91ivMTNHCMiRfvwdDCF1dQ=rw",
//                         "https://lh3.googleusercontent.com/patOFS_9rqCSQNmNQq83Tcm3U7K75rUcJtxHTop_K_kTAQbr7nfAaidmvIopsv2e0KwsxnpSxkBrlDPhYOrUo_QyM7uuhMdUpw=rw",
//                         "https://lh3.googleusercontent.com/KuAMoqinZqeW-KeYVeOhwVajZWRs8-utkGD3bsITjbbD8PmStl9NBTlGjoklG68ShK7ePFPbq5tEb5zyANXumNc6BKnCYUAf=rw"
//                     ],
//                     "category": {
//                         "id": 4,
//                         "name": "Laptop",
//                         "optionGroup": null
//                     }
//                 }
//             }
//         ]
//     }
// ]
