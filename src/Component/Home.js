import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import sec4DAta from '../Data/sec4DAta'
import sec5DAta from '../Data/sec5Data'
const Home = () => {
  return (
    <>
    <section className='banner'>
      <div className='bnrimg'>
      <img src='../banner/74.jpg' className='w-100 m-auto bnrimg'/>
      <div className='bnrab'><h1 className='bnrh mb-4'>CAMPING GUIDES FOR YOUR NEXT ADVENTURE</h1>
            <a href='https://youtu.be/7FewgfgL6Xs?si=XD2gHjhgZ-8zEmlM'><button className='bnri py-3 px-3'>READ MORE <i class="bi bi-arrow-right"></i></button></a>
      </div>
      </div>
      </section>
    <section classname="sec2">
  <nav className=" navbar navbar-expand-lg navbar-light nav ">
    <div className="container">
      <Link className="navbar-brand" to="/"><div className='logo d-flex'><img src={require('../logo.jpg')} className="w-100"/><h3 className='nvh'>RO_SUN_MAJHI</h3></div></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse pf" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto ms-4 mb-lg-0  ">
          <li className="nav-item ms-5 ps-5">
            <Link className="nav-link active " aria-current="page" to="/">HOME</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="https://www.facebook.com/roshankpdmajhi">FACEBOOK</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="https://www.instagram.com/rosun_riser/">INSTAGRAM</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="https://www.youtube.com/@ro-sunriser4283">YOUTUBE</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="https://github.com/roshanmajhi">GITHUB</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="https://www.linkedin.com/in/roshan-majhi-0411a8312/">LINKEDIN</Link>
          </li>
        </ul>
        <form className="d-flex">
          <button className="btn" type="submit">SEARCH</button>
          <div className='sec1i '><i class="bi bi-search"></i></div>
        </form>
      </div>
    </div>
  </nav>
  <div className='wndr'><img src='../sec1/img1.png' className='w-100'/></div>
</section>
     <section className='sec3'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='sec3txt'>
              <h1 className='sec3h pb-2'>TREKKING THE BEAUTIFUL WORLD</h1>
              <p className='sec3p pb-2'>Hiking is more than just moving in nature. It is a way to let your soul dangle, clear your head and recharge your batteries.</p>
              <p className='sec3p pb-2'>we all need more fresh air and advabture now more than ever!! Being out hiking in nature is perhaps the healthiest activity available,rejuvenating the soul, challenging our bodies, and quietening our minds.</p>
              <button className='bnri bg-success text-light border-0 py-3 px-3'>READ MORE <i class="bi bi-arrow-right"></i></button>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='sec3img'>
              <img src='../sec1/50.jpg' className='w-100 img-fluid imgsec3' />
            </div>
          </div>

        </div>

      </div>
    </section>
   <section className=' sec4 py-5'>
    <div className=' container'>
      <h6 className='sec4h6 text-center py-3'>VISIT FARWEST NEPAL</h6>
      <h1 className='sec4h1 text-center'>FEATURED BLOG POSTS<span className='text-success'> KHAPTAD NATIONAL PARK</span></h1>
      <div className='d-flex py-5'>
        <div className='row'>
         {sec4DAta.map((a)=>(
           <div className='col-lg-4'>
         <div className='sec4img'>
         <img src={a.image} className='w-100 imgsec4'/>
         <h6 className='pt-3'><i class="bi bi-pencil-fill"></i>{a.title}</h6>
         
       </div>
       </div>
      ))
      }
        </div>
      </div>
      </div>
     
   </section>
   <section className='sec5 '>
    <div className='container d-flex justify-content-between align-items-center'>
   <div><Link to="/Innerpage" ><i class="bi bi-truck"></i>
   <p className='sec5p'>1 Destination</p>
   <h1 className='sec5h'>ADVENTURE</h1></Link></div>
   <div><Link to="/Innerpage" ><i class="bi bi-geo-alt-fill"></i>
   <p className='sec5p'>5 Destination</p>
   <h1 className='sec5h'>BEACHES</h1></Link></div>
  <div><Link to="/Innerpage" ><i class="bi bi-fire"></i>
   <p className='sec5p'>3 Destination</p>
   <h1 className='sec5h'>CAMPING</h1></Link></div>
   <div><Link to="/Innerpage" ><i class="bi bi-house-door"></i>
   <p className='sec5p'>1 Destination</p>
   <h1 className='sec5h'>FRIENDLY</h1></Link></div>
   <div><Link to="/Innerpage" ><i class="bi bi-bag-fill"></i>
   <p className='sec5p'>6 Destination</p>
   <h1 className='sec5h'>LOW BUDGETS</h1></Link></div>
   <div><Link to="/Innerpage" ><i class="bi bi-signpost-2"></i>
   <p className='sec5p'>8 Destination</p>
   <h1 className='sec5h'>POPULAR</h1></Link></div>
   </div>
   </section>
   <section className='sec6 my-5 py-5'>
    <div className='container'>
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.727221991711!2d81.13948041744385!3d29.3782752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a3c7039e06e43d%3A0x2bf2b6c6e596a807!2sKhaptad%20National%20Park!5e0!3m2!1sen!2snp!4v1678087380184!5m2!1sen!2snp" width="1120" height="500" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   </div>
   </section>
   <section className='sec7'>
   <h6 className='sec4h6 text-center py-3'>FWDR</h6>
      <h1 className='sec4h1 text-center pb-5'>FEATURED BLOG <span className='text-success'>POSTS</span></h1>
      <div className='container'>
        <div className='row'>
        <div className='col-lg-6 py-5'>
            <div className='sec7img'>
              <img src='../sec7/48.jpg' className='w-100 img-fluid imgsec7' />
            </div>
          </div>
          <div className='col-lg-6 py-5'>
            <div className='sec7txt'>
              <h6> <i class="bi bi-calendar2-minus"></i>  October 8, 2022  <i class="bi bi-pencil"></i> by Roshan Majhi</h6>
              <h1 className='sec7h'>Saileshwori Temple</h1>
              <p className='sec7p '>Saileshwori Temple is situated in Dipayal Silgadhi Municipality-6, Doti region of Nepal. It is one of the holy and religious temples of the Far West region. Goddess Saileswori is another structure among numerous others and individuals have extraordinary confidence in her, similar to some other types of Bhagwati/Durga,</p>
              <button className='btn7 border-0'>READ MORE <i class="bi bi-arrow-right"></i></button>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='sec7txt'>
              <h6><i class="bi bi-calendar2-minus"></i>  October 8, 2023 <i class="bi bi-pencil"></i> by Roshan Majhi</h6>
              <h1 className='sec7h'>KHAPTAD NATIONAL PARK</h1>
              <p className='sec7p '>Khaptad National Park is located in the Far-western region of Nepal. The park was gazetted in 1984 covering an area of 225 sq. km. The area of buffer zone is 216 sq.km. The park is the only mid-mountain national park in western Nepal, representing a unique and important ecosystem. The late Khaptad Swami moved to the area in 1940's to meditate and worship. He spent about 50 years as a hermit and became a renowned spiritual saint.The best way to reach the park area is to fly from Nepalgunj to Dipayal and the local buses are available for Silgadhi, Doti. From Silgadhi Bazzar one has to hike 6 hours to the park entrance and another 7-8 hours to the Park Headquarters. Other options are-flight to Dipayal followed by a three-day walk, or flight to Achham or Bajhang followed by a two-day walk, or flight to Bajura followed by a four-day walk. However, Dipayal and Accham airport are rarely open.</p>
              <button className='btn7 border-0'>READ MORE <i class="bi bi-arrow-right"></i></button>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='sec7img'>
              <img src='../sec7/k2 .jpg' className='w-100 img-fluid imgsec7' />
            </div>
          </div>
        </div>

      </div>
    </section>

    <section className=' sec4 py-5'>
    <div className=' container'>
      <h6 className='sec4h6 text-center py-3'>DIPAYAL JATRA</h6>
      <h1 className='sec4h1 text-center'>FEATURED BLOG POSTS<span className='text-success'> DIPAYAL JATRA</span></h1>
      <div className='d-flex py-5'>
        <div className='row'>
         {sec5DAta.map((a)=>(
           <div className='col-lg-4'>
         <div className='sec4img'>
         <img src={a.image} className='w-100 imgsec4'/>
         <h6 className='pt-3'><i class="bi bi-pencil-fill"></i>{a.title}</h6>
         
       </div>
       </div>
      ))
      }
        </div>
      </div>
      </div>
     
   </section>
   <section className='sec8'>
    <div>
      <img src='../sec8/f.png' className='w-100'/>
    </div>
   </section>
    </>
  )
}

export default Home

