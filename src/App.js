import logo from './logo.svg';
import './App.css';
import MenuBar from './menu/MainMenu';
import routers from './routers/Router';
import { Routes,Route, BrowserRouter as Router } from 'react-router-dom';
function App() {
  return(
    <Router>
      <div>
        <MenuBar/>
          <div className='container'>
              <Routes>
                  {showMenuContents(routers)}
              </Routes>
          </div>
      </div>
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
