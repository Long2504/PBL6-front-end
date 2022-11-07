import './App.css';
import MenuBar from './menu/MainMenu';
import routers from './routers/Router';
import MyFooter from './footer/footer';
import { Routes,Route, BrowserRouter as Router } from 'react-router-dom';
import { useEffect } from 'react';
import { visitorCounting } from './services/AdminReportService';
function App() {

  useEffect(()=>{
    visitorCounting();
  },[])

  return(
    <Router>
      <div>
          <div>
          <MenuBar/>
              <Routes>
                  {showMenuContents(routers)}
              </Routes>
              
          </div>
      </div>
        <MyFooter/>
    </Router>
    )
}

const showMenuContents=(routers)=>{
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
  console.log(routerList)
  return routerList;
}



export default App;
