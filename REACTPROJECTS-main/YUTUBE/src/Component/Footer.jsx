import React from 'react';
import './Footer.css'
function Footer() {
  return (
    <>
      <footer className="bg-dark text-white pt-5 pb-4">
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
         <a href="https://www.istockphoto.com/photo/burgers-neon-gm172664869-524302?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Flogo-fastfood-for-circlr&utm_medium=affiliate&utm_source=unsplash&utm_term=logo+fastfood+for+circlr%3A%3A%3A"><img src="https://media.istockphoto.com/id/172664869/photo/burgers-neon.webp?b=1&s=170667a&w=0&k=20&c=iVrtZYFuHx4xhn8soMA12k5qUlKK-9M79quEx8j9EGI=" alt=""className='Img'/></a>     
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum vel laborum ipsa aliquam eaque nobis obcaecati explicabo quam sed voluptatem assumenda magni similique soluta reiciendis, quis sint doloremque ipsam eos.</p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Quick Links</h5>
              <p><a href="/" className="items">Home</a></p>
              <p><a href="/breakfast" className="items">Breakfast</a></p>
              <p><a href="/lunch" className="items">Lunch</a></p>
              <p><a href="/dinner" className="items">Dinner</a></p>
              <p><a href="/evening" className="items">Evening</a></p>
              <p><a href="/all" className="items">All</a></p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
              <p><i className="fas fa-home mr-3"></i> 123 Main St, Anytown, USA</p>
              <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
              <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
              <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-2 mx-auto mt-3 icons">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Follow us</h5>
              <a href="#" className="whatsapp mr-3"><i class="fa-brands fa-whatsapp"></i></a>
              <a href="#" className="twitter mr-4"><i className="fab fa-twitter"></i></a>
              <a href="#" className="google mr-4"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="linkedin mr-4"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="instagram mr-4"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <hr className="mb-4"/>
          <div className="row align-items-center">
            <div className="col-md-7 col-lg-8">
              <p className="text-center text-md-left">© 2024 Complex Food. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
