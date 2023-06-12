import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import logo from '../images/logo.png'
export default function Header() {
    // states for toggling classes nav and notication and profile avatar which i set its alt to api email
    const [showNav, setShowNav] = useState(false);
    const [showNoti, setShowNoti] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    // state to handle api fetching
    const [api,setApi] = useState('')
    // state for search input
    const [input,setInput]= useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        const data = response.data;
        
            setApi(data)
        console.log(data)
        
       
        
      } catch (error) {
        alert('Error:', error);
      }
    };

    fetchData();
  }, []);
  
    return (
        <nav className="navbar navbar-expand-md navbar-light ">
        {/* Container wrapper  */}
        <div className="container-fluid">
          {/* Toggle button  */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={()=>setShowNav(!showNav)}
          >
            <i className="fas fa-bars text-light"></i>
          </button>
      
          {/* Collapsible wrapper  */}
          <div className={`collapse navbar-collapse gap-4 ${showNav ? 'show' : ''} `} id="navbarSupportedContent">
            {/* Navbar brand  */}
            <NavLink className="navbar-brand mt-2 mt-lg-0" to="#">
              <img
                src={logo}
                width='30'
                height="30"
                alt="MDB Logo"
                loading="lazy"
                className="me-n5"
              />
            </NavLink>
             {/* Left links  */}
             <h3 className="fs-5 p-2 mt-2 mb-2 text-light">Student <span className="text-muted">Inc.</span></h3>
             <input type="text" placeholder="search..." value={input} onChange={(e)=>setInput(e.target.value)} className="rounded p-1 text-light" style={{backgroundColor:'#252A40',border:'1px solid cornflowerblue'}}/>
             <i className="fa-brands fa-searchengin text-light ms-n5 fs-5"></i>
             <ul className="navbar-nav mb-2 mb-lg-0 ms-lg-5">
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="#">Career Library</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="#">Major Library</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="#">School Library</NavLink>
              </li>
            </ul>
            {/* Left links  */}
          </div>
          {/* Collapsible wrapper  */}
      
           {/* Right elements  */}
          <div className="d-flex align-items-center">
         
             {/* Notifications  */}
            <div className="dropdown">
              <NavLink
                className="text-reset me-3 dropdown-toggle hidden-arrow"
                to="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
                onClick={()=>setShowNoti(!showNoti)}
              >
                <i className="fas fa-bell text-light"></i>
                <span className="badge rounded-pill badge-notification bg-danger">1</span>
              </NavLink>
              <ul
                className={`dropdown-menu dropdown-menu-end mx-0 ${showNoti ? 'show' : ''}`  }
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <NavLink className="dropdown-item" to="#">Some news</NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="#">Another news</NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="#">Something else here</NavLink>
                </li>
              </ul>
            </div>
             {/* Avatar  */}
            <div className="dropdown me-4">
              <NavLink
                className="dropdown-toggle d-flex align-items-center"
                to="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
                onClick={()=>setShowProfile(!showProfile)}
              >
                <img
                  src=""
                  className="rounded-circle text-light"
                  height="25"
                  alt={`${api.email}`}
                  loading="lazy"
                  
                />
                 <div className="d-block p-2">
                    <span className="text-muted" style={{fontSize:'15px'}}>Welcome</span>
                    <h5 className="text-light"style={{fontSize:'17px'}}>{api.name}</h5></div>
              </NavLink>
             
              <ul
                style={{marginLeft:'122px'}}
                className={`dropdown-menu dropdown-menu-end ${showProfile ? 'show' : ''}`}
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <NavLink className="dropdown-item" to="#">My profile</NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="#">Settings</NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="#">Logout</NavLink>
                </li>
                
              </ul>
            </div>
          </div>
        {/* Right elements  */}
        </div>
         {/* Container wrapper */}
      </nav>
    //   Navbar 
    );
  }