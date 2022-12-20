import { height } from '@mui/system';
import React from 'react'
import BorderColorIcon from '@mui/icons-material/BorderColor';



const Patient = () => {
    const medicien = [
        {
            img: "https://5.imimg.com/data5/SELLER/Default/2021/5/MJ/PD/DW/39688399/combiflam-tablet-500x500.jpg",
            name: "Combiflame",
            actions: ""
        }
    ]
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
                                    <td>
                                        <button className='button mx-2'
                                            onClick={() => alert('hello')} > view</button>
                                              <button className='button mx-2'
                                            onClick={() => alert('hello')} ><BorderColorIcon/></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Patient;