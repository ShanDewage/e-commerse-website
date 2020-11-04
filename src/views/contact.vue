<template>
  <div class="contact">
    <Navbar>
     
   </Navbar>
   <!-- Start Contact Us  -->
    <div class="contact-box-main">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-sm-12">
                    <div class="contact-info-left" style="  text-align: justify;">
                        <h2>CONTACT INFO</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate. </p>
                        <ul>
                           
                                <p><i class="fas fa-map-marker-alt"></i> <label style=" word-spacing: 24px;"> Address :</label> No.07, <br><label style="padding-left:105px;">  Pitipana,<br> Homagama.</label></p>
                            
                          
                                <p ><i class="fas fa-phone-square"></i> <label style=" word-spacing: 30px;"> Phone    :</label> <a href="tel:0112 000 000" style="color:blue;">  0112 000 000</a><br><a href="tel:0113 000 000"  style="color:blue;padding-left:100px">  0113 000 000</a></p>
                                <p ><i class="fab fa-whatsapp-square"></i> <label style=" word-spacing: 5px;"> WhatsApp    :</label> <a href="tel:0113 000 000"  style="color:blue;">  0113 000 000</a></p>
                         
                        
                                <p ><i class="fas fa-envelope"></i> <label style=" word-spacing: 35px;">  Email :</label> <a href="mailto:button@gmail.com"  style="color:blue;" >button@gmail.com</a></p>
                         
                        </ul>
                    </div>
                </div>
                <div class="col-lg-8 col-sm-12">
                    <div class="contact-form-right">
                        <h2>GET IN TOUCH</h2>
                        <p style="  text-align: justify;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio justo, ultrices ac nisl sed, lobortis porta elit. Fusce in metus ac ex venenatis ultricies at cursus mauris.</p>
                        <form id="contactForm">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="name" name="name" placeholder="Your Name" required data-error="Please enter your name">
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <input type="text" placeholder="Your Email" id="email" class="form-control" name="name" required data-error="Please enter your email">
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="subject" name="name" placeholder="Subject" required data-error="Please enter your Subject">
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <textarea class="form-control" id="message" placeholder="Your Message" rows="4" data-error="Write your message" required></textarea>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                    <div class="submit-button text-center">
                                        <button class="btn btn-danger" id="submit" type="submit">Send Message</button>
                                        <div id="msgSubmit" class="h3 text-center hidden"></div>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Cart -->
    
     <Footer/>
  </div>
  
</template>