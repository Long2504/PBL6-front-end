import './App.css';
import MenuBar from './menu/MainMenu';
import routers from './routers/Router';
import MyFooter from './footer/footer';
import { Routes,Route, BrowserRouter as Router } from 'react-router-dom';
function App() {
  return(
    <Router>
      <div className="main">
        <MenuBar />
        <Routes>{showMenuContents(routers)}</Routes>

        <MyFooter />
      </div>
    </Router>
  );
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
  console.log(routerList,"routerlist")
  return routerList;
}



export default App;
