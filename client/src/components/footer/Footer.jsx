import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function footer() {
  return (
    <div>
        <MDBFooter bgColor='dark' className='text-center text-lg-start text-white-50'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='/home' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='/home' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='/home' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='/home' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='/home' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='/home' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i class="fa-solid fa-feather"></i> Blogify
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4 px-5 mx-5'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='/write' className='text-reset text-decoration-none'>
                  Write
                </a>
              </p>
              <p>
                <a href='/settings' className='text-reset text-decoration-none'>
                  Settings
                </a>
              </p>
              <p>
                <a href='/contact' className='text-reset text-decoration-none'>
                  Contact
                </a>
              </p>
              <p>
                <a href='/' className='text-reset text-decoration-none'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Kochi, Kerala, India
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                blogify@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +91 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold text-decoration-none' href='https://blogify.com/'>
          Blogify.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}
