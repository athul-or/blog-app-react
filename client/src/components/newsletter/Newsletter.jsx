import React from 'react'
import './Newsletter.css'

export default function Newsletter() {
  return (
    <div className='body'>
      <section class="home-newsletter">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="single22">
                <h2>Subscribe to our Newsletter</h2>
                <div class="input-group">
                  <input type="email" class="form-control" placeholder="Enter your email" />
                  <span class="input-group-btn">
                    <button class="btn btn-theme" type="submit">Subscribe</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>



  )
}
