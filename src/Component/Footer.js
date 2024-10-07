import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  
  function frm(){
   
  alert("Your Data Is Register Thank You!!")

  }
 
  return (
   

    <>
    <section className='fsec1'>
     <div className='container'>
        <div className='row'>
            <div className='col-lg-3'>
               <div className='fimg'>
               <Link to="/"><div className='flogo '><img src={require('../logo.jpg')} className="w-100"/><h3 className='ft'>ROSUN_RISER</h3></div></Link>
               </div>
            </div>
            <div className='col-lg-9 my-4'>
               <div className='ftxt'>
                 <h6 className='ftrp'>Based in Khaptad National Park, Doti Nepal. His posts
                  explore outdoor experiences through photos and diaries with tips & tricks.</h6>
               </div>
            </div>
            <div className='col-lg-3'>
                <div className='txt1'>
                   <h1 className='fh1'>ABOUT THE BLOG</h1>
                   <h6 className='fp1'>Khaptad National Park, located in the far-western region of Nepal, is a hidden gem known for its pristine beauty and cultural significance.</h6>
                </div>

            </div>
            <div className='col-lg-3 '>
                <div className='txt1'>
                   <h1 className='fh1'>REGISTER FORM</h1>
                   <form className='frm' action='/'>
                     
                    <label for='nm'>Full Name:&nbsp; </label><input type='text' id='nm'/><br/><br/>
                    <label for='cn'>Contact:&nbsp;&nbsp;&nbsp;</label><input type='text' id='cn'/><br/><br/>
                    <label for='gm'>Gmail: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><input type='email' id='gm'/><br/><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button onClick={frm} type='submit'>Register</button>
                   </form>
                </div>

            </div>
            <div className='col-lg-3'>
                <div className='txt1'>
                   <h1 className='fh1'>VISIT PLACES</h1>
                   <h6 className='fn'><i class="bi bi-newspaper"></i> march 2, <span className='fp'>2023 Trip Khaptad National Park</span></h6>
                   <h6 className='fn'><i class="bi bi-newspaper"></i> October 23, <span className='fp'>2021 Nuwakot Darbar</span> </h6>
                   <h6 className='fn'><i class="bi bi-newspaper"></i> January 10,  <span className='fp'>2020 Sindhulpalchok Nepal</span> </h6>
                </div>
            </div>
            <div className='col-lg-3'>
                <div className='txt1'>
                   <h1 className='fh1'>RECENT POST</h1>
                   <div className='d-flex flex-column gap-2'>
                   <div className='imgl d-flex gap-2'>
                    <img src='../sec7/48.jpg' className='w-100'/>
                    <img src='../sec7/k2 .jpg' className='w-100'/>
                    <img src='../sec4/16.jpg' className='w-100'/>
                    <img src='../sec4/k1.jpg' className='w-100'/>
                   </div>
                   
                   </div>
                </div>
            </div>
        </div>
     </div>
    </section>
      <section className='fsec2 '>
       <div className='container '>
        <div className='row'>
            <div className='col-lg-12 d-flex justify-content-between align-items pt-4'>
             <h6 className='xxxx'>Socials :<i class="bi bi-facebook"></i><i class="bi bi-twitter"></i><i class="bi bi-youtube"></i><i class="bi bi-instagram"></i></h6>
             <h6 className=''>© 2024 Qode Interactive, All Rights Reserved</h6>
            </div>
        </div>
       </div>
      </section>
      
    </>
  )
}

export default Footer
