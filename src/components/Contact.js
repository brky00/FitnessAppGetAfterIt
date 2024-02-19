import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='container-contact' >
      <h1 className=''>Contact us</h1>
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">Write your Email address: </label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <h2>TELL US MORE ABOUT YOUR GOALS!</h2>
        
        <div class="checkGoals">
          <h4>What is your primary fitness goal?</h4>
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
          <label class="form-check-label" for="exampleRadios1">
            Weight loss
          </label>
        </div>

        <div class="checkGoals">
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
          <label class="form-check-label" for="exampleRadios1">
            Muscle gain
          </label>
        </div>

        <div class="checkGoals">
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
          <label class="form-check-label" for="exampleRadios1">
            Fat loss
          </label>
        </div>

        <div class="checkActivity">
          <h4>What is your current activity level?</h4>
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
          <label class="form-check-label" for="exampleRadios1">
            Beginner
          </label>
        </div>

        <div class="checkActivity">
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
          <label class="form-check-label" for="exampleRadios1">
            Intermediate 
          </label>
        </div>

        <div class="checkActivity">
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
          <label class="form-check-label" for="exampleRadios1">
            Experienced
          </label>
        </div>

        <div class="checkExperience">
          <h4>What is your primary fitness goal?</h4>
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
          <label class="form-check-label" for="exampleRadios1">
            0-3 months
          </label>
        </div>

        <div class="checkExperience">
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
          <label class="form-check-label" for="exampleRadios1">
            3-12 months
          </label>
        </div>

        <div class="checkExperience">
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
          <label class="form-check-label" for="exampleRadios1">
            Over 12 months
          </label>
        </div>

        <div class="checkImprove">
          <h4>Are you aiming to reduce stress and improve mental well-being through exercise?</h4>
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
          <label class="form-check-label" for="exampleRadios1">
            Yes
          </label>
        </div>

        <div class="checkImprove">
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
          <label class="form-check-label" for="exampleRadios1">
            No
          </label>
        </div>

        <div class="checkImprove">
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
          <label class="form-check-label" for="exampleRadios1">
            I just want to get in shape...
          </label>
        </div>

        <div class="textBox">
          <label for="exampleFormControlTextarea1">Specify your goals here:</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>

  
  )
}

export default Contact