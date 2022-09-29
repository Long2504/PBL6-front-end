import {  Link } from 'react-router-dom';


const mainMenu =[
    {
        name : "Home",
        to  :"/"
    },
    {
        name : "Login",
        to  :"/login"
    },
    {
        name : "Register",
        to  :"/register"
    },
]


const MenuBar = ()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <Link className="navbar-brand" to="/">Food Center</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {
                loadMenu(mainMenu)
            }
          </ul>
        </div>
      </nav>
    )
}

const loadMenu = (menu)=>{
    return(
        menu.map((menu,index)=>(
            <li key={index} className="nav-item">
                <Link to={menu.to}  className="nav-link" >
                    {menu.name}
                </Link>
            </li>
        ))
    )
}

export default MenuBar;