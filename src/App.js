import './App.css';
import MenuBar from './menu/MainMenu';
import routers from './routers/Router';
import MyFooter from './footer/footer';
import { Routes,Route, BrowserRouter as Router, useLocation } from 'react-router-dom';
import { createContext, useEffect } from 'react';
import { visitorCounting } from './services/AdminReportService';
import { SSEClose } from './services/PaymentRealtimeService';

function App() {
  useEffect(()=>{
    visitorCounting();
  },[])

  return(
    <Router>
      <div className="main">
        <MenuBar />
        <Routes>{showMenuContents(routers)}</Routes>

        <MyFooter />
      <div>
          <div>
          <MenuBar/>
          <Content/>
              
          </div>
      </div>
        <MyFooter/>
        </div>
    </Router>
  );
}

export const locationContext = createContext();
const Content = ()=>{
  
  var location = useLocation();
  useEffect(()=>{
    console.log(location)
    if(location.pathname!=="/"){
      SSEClose()
    }
  },[location])
  return(
    <locationContext.Provider value={location}>
    <Routes>
    {showMenuContents(routers,locationContext)}
    </Routes>
    </locationContext.Provider>
  )

}

const showMenuContents=(routers,locationContext)=>{
  var index=0;
  var routerList=[]
  routers.forEach(element => {
    var rout= element.map((route)=>{
      return(
        <Route key={++index} path={route.path} exact={route.exact} element={<route.page/>}  />
      )
      })
      console.log(rout);
      routerList.push(...rout);
  }
  );
  console.log(routerList,"routerlist")
  return routerList;
}



export default App;
