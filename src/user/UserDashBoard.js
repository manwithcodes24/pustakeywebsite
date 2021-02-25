import React from "react";
import Base from "../core/Base";
import './userDashboard/css/style.css'
import './userDashboard/css/style.css.map'
import {Link} from 'react-router-dom'
import {  isAutheticated,signout } from "../auth/helper";
import {getUserDetails} from './helper/userDashboard'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles({
  table: {
    minWidth: 500,
    overflow: "hidden"
  },
  tableTitle :{ 
 
  }
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];



const UserDashBoard =  () => {
  const classes = useStyles();
  let user = isAutheticated().user
  let _token = isAutheticated().token
  



  if(user  && _token){
   
    var details = getUserDetails(user, _token)
   
  }
  if(details){
    var userDetails =JSON.parse( sessionStorage.getItem("userDetails"))
    var role = userDetails.role
    console.log(role)
    if(role == 1)
    role = "Admin"
    if (role == 0)
    role = "User"

  }

  const displayData = (r) =>{ 
    sessionStorage.setItem("product",  JSON.stringify(r))
  } 

  return (
    <div>
  <nav className="navbar navbar-expand-lg navbar-dark bg-mattBlackLight fixed-top">
    <button className="navbar-toggler sideMenuToggler" type="button">
      <span className="navbar-toggler-icon" />
    </button>
    <a className="navbar-brand" href="#">FrontEndFunn</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle p-0" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="material-icons icon">
              person
            </i>
            <span className="text">Account</span>
          </a>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
           <Link  className="nav-link text-warning" to="/" >Home</Link>
       
            <div className="dropdown-divider" />
           {isAutheticated() && (
             <a href='/'>
                <span
                  className="nav-link text-warning"
                  onClick={() => {
                    signout(() => {
                     
                    });
                  }}
                >
                  Signout
                </span>
                </a>
            )}
          
          </div>
        </li>
      </ul>
    </div>
  </nav>
  <div className="wrapper d-flex">
    <div className="sideMenu bg-mattBlackLight">
      <div className="sidebar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#" className="nav-link px-2">
              <i className="material-icons icon">
                dashboard
              </i>
              <span className="text">Dashboard</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2">
              <i className="material-icons icon">
                person
              </i>
              <span className="text">User Profile</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2">
              <i className="material-icons icon"> insert_chart </i><span className="text">Charts</span></a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2">
              <i className="material-icons icon">
                settings
              </i>
              <span className="text">Settings</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2">
              <i className="material-icons icon">
                pages
              </i>
              <span className="text">Pages</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2">
              <i className="material-icons icon">
                computer
              </i>
              <span className="text">Demo</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 sideMenuToggler">
              <i className="material-icons icon expandView ">
                view_list
              </i>
              <span className="text">Resize</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="content">
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 my-3">
              <div className="px-3 py-3">
                <h4 className="mb-2">{userDetails.name}</h4>
           
              </div>
            </div>
            <div className="col-md-4 my-3">
              <div className="px-3 py-3">
                <h4 className="mb-2">{userDetails.email}</h4>
               
              </div>
            </div>
            <div className="col-md-4 my-3">
              <div className="p-3">
                <h4 className="mb-2">{role} </h4>
                
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className=" my-2 p-3">
              <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.tableTitle}>Purchases</TableCell>
                   
                  </TableRow>
                </TableHead>
                <TableBody>
                  {userDetails.purchases.map((row) => (
                    <TableRow key={row.name}>
                    <TableCell component="th" scope="row" className="productDislpayTitle"> 
                <a href="/product/content">  <button onClick={() => displayData(row)} className="productDisplayBtn">   
                        {row.name}
                      </button>
                      </a>
                      </TableCell>
                      
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
              </div>
            </div>
           {//<div className="col-md-6">
              //<div className="bg-mattBlackLight my-2 p-3">
               // Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               // Ratione libero totam rerum eos nam ab perspiciatis voluptatum
              //in. Quidem natus autem quae. Velit accusamus sit, perspiciatis
              //  sunt earum tempora veniam.
             // </div>
            //</div>
          }
          </div>
        </div>
      </main>
    </div>
  </div>
</div>

  );
};

export default UserDashBoard;
