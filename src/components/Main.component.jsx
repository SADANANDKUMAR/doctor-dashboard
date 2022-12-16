import React from 'react';
// import ReactDOM from 'react-dom';
// import DataTable from 'react-data-table-component';
// import Table from 'react-bootstrap/Table';
// import { utils, writeFile } from 'xlsx';
// import jsPDF from "jspdf";
// import "jspdf-autotable";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';



const Main = () => {

  const pages = ['Products', 'Pricing', 'Blog'];
  const settings = ['Profile', 'Logout'];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);



  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const columns = [
    {
      name: "Date",
      //   selector: (row) => row._id,
    },
    {
      name: "Name",
      //   selector: (row) => row.district,
      sortable: true,
    }
  ]


  return (

    <AppBar position="static">
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          LOGO
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          {/* <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu> */}
        </Box>
        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          LOGO
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {/* {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {page}
            </Button>
          ))} */}
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
    // <div>
    //   <nav class="navbar navbar-dark bg-primary">
    //     <Stack direction="row" spacing={2}>
    //       <Avatar sx={{ bgcolor: deepOrange[500] }}>S</Avatar>
    //       {/* <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar> */}
    //     </Stack>
    //     <h4>Dashboard..!</h4>
    //   </nav>

    //   <DataTable
    //     columns={columns}
    //     // data={filterdata}
    //     pagination
    //     fixedHeader
    //     fixedHeaderScrollHeight='400px'
    //     highlightOnHover
    //     subHeader
    //     subHeaderComponent={
    //       <div className='w-100 d-flex justify-content-between'>
    //         <input
    //           type='text'
    //           placeholder="Search here...."
    //           className='w-25 form-control m-0'
    //         //   value={search}
    //         //   onChange={(e) => setSearch(e.target.value)}
    //         />



    //         <Dropdown>
    //           <Dropdown.Toggle variant="light" id="dropdown-basic">
    //             <img src="images/icon_Download.svg" alt="Download" />
    //           </Dropdown.Toggle>

    //           <Dropdown.Menu>
    //             <div className="d-flex justify-content-around">
    //               <button type="button"
    //                 //    onClick={exportexcel}
    //                 className="doc-download-btn">
    //                 <img src="images/xls.png" alt="Download" className="img-fluid" />
    //               </button>
    //               <button type="button"
    //                 //   onClick={exportPDF} 
    //                 className="doc-download-btn">
    //                 <img src="images/pdf.png" alt="Download" className="img-fluid" />
    //               </button>
    //             </div>
    //           </Dropdown.Menu>
    //         </Dropdown>



    //       </div>
    //     }
    //   />
    // </div>
  );
}

export default Main;
