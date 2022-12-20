import { height } from '@mui/system';
import React from 'react'
import BorderColorIcon from '@mui/icons-material/BorderColor';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import TextField from '@mui/material/TextField';
import { NavItem } from 'react-bootstrap';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';





const Patient = () => {
    // const medicien = [
    //     {
    //         img: "https://5.imimg.com/data5/SELLER/Default/2021/5/MJ/PD/DW/39688399/combiflam-tablet-500x500.jpg",
    //         name: "Combiflame",
    //         actions: ""
    //     }
    // ]


    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 400 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        > Dosages

            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '20ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-number"
                    label="Gap"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    required
                    id="filled-required"
                    label="Start date"
                    defaultValue="dd/mm/yyy"
                    variant="filled"
                />
                <TextField
                    required
                    id="filled-required"
                    label="End date"
                    defaultValue="dd/mm/yyy"
                    variant="filled"
                />
                <Divider variant="fullWidth" light={true}>--- </Divider>
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Timing</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Morning" />
                        <FormControlLabel value="male" control={<Radio />} label="Noon" />
                        <FormControlLabel value="other" control={<Radio />} label="Evening" />

                    </RadioGroup>
                </FormControl>
            </Box>

            {/* <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List> */}
            {/* <Divider /> */}
        </Box>
    );

    return (
        <div class="container-fluid">

            <div class="card position-absolute top-50 start-50 translate-middle" style={{ width: '50rem', height: '100vh' }}  >
                <div class="card patien_head">
                    <div class="card-body">
                        <div class="row">
                            <div class="col">
                                <h5 class="card-title">ID 645673</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Diya mirza</h6>
                                <h6 class="card-subtitle mb-2 text-muted">12/19/2022</h6>
                                <p class="card-text">degeneration, cataract</p>
                            </div>
                            <div class="col">
                            </div>
                            <div class="col">
                                <div class="card" style={{ width: '80px', marginLeft: '122px', height: '80px' }}>
                                    <img src="/images/patient_img.jpg" class="card-img-top" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card' style={{ marginTop: '34px' }}>
                        <table class="table">
                            <thead style={{ backgroundColor: 'darkcyan' }}>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Medecine</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td> <img src="https://5.imimg.com/data5/SELLER/Default/2021/5/MJ/PD/DW/39688399/combiflam-tablet-500x500.jpg" alt="Avatar" class="avatar" /></td>
                                    <td>combiflam</td>
                                    {['left'].map((anchor) => (
                                        <td key={anchor}>
                                            <button className='button mx-2'
                                                onClick={toggleDrawer(anchor, true)} >View</button>
                                            <Drawer
                                                anchor={anchor}
                                                open={state[anchor]}
                                                onClose={toggleDrawer(anchor, false)}
                                            >
                                                {list(anchor)}
                                            </Drawer>
                                            <button className='button mx-2'
                                                onClick={() => alert('hello')} ><BorderColorIcon /></button>
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>

            <div>
                {/* {['left', 'right', 'top', 'bottom'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))} */}
            </div>
        </div>

    );
}

export default Patient;