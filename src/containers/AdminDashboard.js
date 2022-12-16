import moment from "moment/moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetProductReportsRequest, actGetRevenueRequest, actGetSalesRequest, actGetTotalRequest, actGetVisitorRequest, completeReport } from "../actions/AdminReportAction";
import AdminDashboardContent from "../components/admin_dashboard/AdminDashboardContent";
import AdminTemplate from "../components/admin_template/AdminTemplate";
import * as ReportKey from "../contants/ReportKey"
import { getProductLabels } from "../services/AdminReportService";
const AdminDashboard = () => {


  var data = useSelector(state => state.adminReportReducer)
  var week = moment().format("W")
  // console.log(week)
  // console.log(Array.from({ length: 10 }, (v, i) => i+parseInt(week)-9))
  // var weekArray = [...Array(parseInt(week)).keys()]
  var weekArray = Array.from({ length: 10 }, (v, i) => i + parseInt(week) - 9)
  var [salesData, setSalesData] = useState(
    {
      labels: weekArray,
      data: weekArray.map(x => 0),
      color: "#45818e",
      label: "Sales"
    }
  )

  var [revenueData, setRevenueData] = useState(
    {
      labels: weekArray,
      data: weekArray.map(x => 0),
      color: "#caedff",
      label: "Revenue"
    }
  )

  var [visitorData, setVisitorData] = useState(
    {
      labels: weekArray,
      data: weekArray.map(x => 0),
      color: "#45818e",
      label: "Visitor"
    }
  )
  var [productsData, setProductsData] = useState(
    {
      labels: weekArray,
      data: weekArray.map(x => 0),
      color: "#caedff",
      label: "Products"
    }
  )
  var [totalData, setTotalData] = useState(
    {
      "Total sales": 0,
      "Total revenue": 0,
      "Amount products sales": 0,
      "Visitor": 0,
      "Total sales last month": 0,
      "Total revenue last month": 0,
      "Amount products sales last month": 0
    }
  )

  const dispatch = useDispatch();

  
  useEffect(() => {
    var getLabels = async () => {
      var labels = await getProductLabels();
      setProductsData({
        labels: labels,
        data: Array.from(Array(labels.length).keys()).map(x=>x=0),
        color: ["#45818e","#c6bffb","#7aca2a","#7836eb","#0f4a56","#fcb814","#008640","#535f5b","#f35336","#8a2a32"],
        label : "Products"
      })
    }
    getLabels()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(actGetTotalRequest())
      await dispatch(actGetSalesRequest())
      await dispatch(actGetRevenueRequest())
      await dispatch(actGetVisitorRequest())
      await dispatch(actGetProductReportsRequest())
      await dispatch(completeReport())
    }
    fetchData()

  }, [dispatch])

  const loadChartData = (type, dataToSet, setData) => {
    // console.log(type)
    const chartData = data[type]
    var newData = dataToSet;
    var index = 0
    if (chartData) {
      var length = chartData.data.length;
      for (let i = 0; i < length; i++) {
        if (week > 10) index = chartData.labels[i].slice(-2) - (week - 9);
        else index = chartData.labels[i].slice(-2);
        newData.data[index] = chartData.data[i]
      }
    }
    setData(newData)
  }

  const loadTotalData = (type, dataToSet, setData) => {
    const chartData = data[type]
    var newData = dataToSet;
    if (chartData) {
      var length = chartData.data.length;
      for (let i = 0; i < length; i++) {
        newData[chartData.labels[i]] = chartData.data[i];
      }
    }
    setData(newData);
  }


  console.log(data)
  const loadProductData = (type, dataToSet, setData) => {
    const chartData = data[type]
    // console.log(type)
    // console.log(productsData)
    var newData = dataToSet;
    // console.log(chartData)
    if(chartData){
      var index=0;
      var length = chartData.data.length;
      for(let i=0 ;i<length;i++){
        index = productsData.labels.indexOf(chartData.labels[i])
        newData.data[index] = chartData.data[i];
      }
      // newData.labels=['Laptop', 'PC', 'CPU', 'Ổ cứng', 'VGA', 'Ram', 'Mainboard', 'Phụ kiện', 'Bàn phím', 'Chuột']
      // newData.data=[1,2,3,4,5,6,7,8,9]
    }
    setData(newData);
    // console.log(productsData)
  }

  useEffect(() => {
    if (Object.keys(data).length <= 5) {
      var lastKey = Object.keys(data)[Object.keys(data).length - 1];
      if (lastKey === ReportKey.REPORTS_SALES) loadChartData(lastKey, salesData, setSalesData);
      else if (lastKey === ReportKey.REPORTS_REVENUE) loadChartData(lastKey, revenueData, setRevenueData);
      else if (lastKey === ReportKey.REPORTS_VISITOR) loadChartData(lastKey, visitorData, setVisitorData);
      else if (lastKey === ReportKey.REPORTS_PRODUCT) loadProductData(ReportKey.REPORTS_PRODUCT, productsData, setProductsData);
      else if (lastKey === ReportKey.REPORTS_TOTAL) loadTotalData(lastKey, totalData, setTotalData);
      // // console.log(data)
      
    }
    else {
      loadChartData(ReportKey.REPORTS_SALES, salesData, setSalesData);
      loadChartData(ReportKey.REPORTS_REVENUE, revenueData, setRevenueData);
      loadChartData(ReportKey.REPORTS_VISITOR, visitorData, setVisitorData);
      loadProductData(ReportKey.REPORTS_PRODUCT, productsData, setProductsData);
      loadTotalData(ReportKey.REPORTS_TOTAL, totalData, setTotalData)

    }

  }, [data, salesData, revenueData, visitorData, productsData, totalData, loadChartData, loadTotalData, loadProductData])

  // useEffect(() => {
  //   loadChartData(ReportKey.REPORTS_REVENUE, salesData, setSalesData)
  // }, [data[ReportKey.REPORTS_REVENUE]])


  const chartDataLoader = (charData, charData2) => {
    let datasets = [
      {
        label: charData.label,
        backgroundColor: 
          charData.color
        ,
        data: charData.data
      }
      // ,
      // {
      //   label: "revenue (millions)",
      //   backgroundColor: [
      //       "#007bff"
      //   ],
      //   data: revenueData.data
      // }
    ]
    if (charData2) {
      datasets.push(
        {
          label: charData2.label,
          backgroundColor: [
            charData2.color
          ],
          data: revenueData.data
        }
      )
    }

    const data = {
      labels: charData.labels,
      datasets: datasets
    };
    const option = {
      legend: { display: true },
      title: {
        display: true,
        // text: "Predicted world population (millions) in 2050"
      }
    }

    return {
      data, option
    }
  }

  return (
    <AdminTemplate>
      <AdminDashboardContent chartDataLoader={chartDataLoader}
        salesData={salesData} visitorData={visitorData} revenueData={revenueData} totalData={totalData} productsData={productsData} />
    </AdminTemplate>
  )
}

export default AdminDashboard;