import React, {useState} from 'react'
import './Contact.css'
import  { db } from './firebase-config';
import { collection, addDoc } from 'firebase/firestore';

const Contact = () => {

  const [email, setEmail] = useState("");
  const [goals, setGoals] = useState("");
  const [activity, setActivity] = useState("");
  const [experience, setExperience] = useState("");
  const [improve, setImprove] = useState("");
  const [specification, setSpecification] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      await addDoc(collection(db, 'contacts'), {
        email:email,
        goals:goals,
        activity:activity,
        experience:experience,
        improve:improve,
        specification:specification,
        status:"notRead",
        createdAt: new Date() //new sate object for to MARK the created time/date timestampt
      });
      alert('Form has been submitted!');
    } catch (error) {
      alert(error.message);
    } 

    // Reset form fields
    setEmail("");
    setGoals("");
    setActivity("");
    setExperience("");
    setImprove("");
    setSpecification("");
    
  }
    



  

  return (
    <div className='container-contact' >
      <h1 className=''>Contact us</h1>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="exampleFormControlInput1">Write your Email address: </label>
          <input type="email" class="form-control" id="email" placeholder="email"
          value={email} onChange={e=>setEmail(e.target.value)}/>
        </div>
        <h2>TELL US MORE ABOUT YOUR GOALS!</h2>
        
        <div class="checkGoals">
          <h4>What is your primary fitness goal?</h4>
          <input class="form-check-input" type="radio" name="goals" id="goalsWeightLoss" value="Weight loss" checked={goals === "Weight loss"}
          onChange={(e) => setGoals(e.target.value)}/>

          <label class="form-check-label" for="goalWeightLoss">
            Weight loss
          </label>
        </div>

        <div class="checkGoals">
          <input class="form-check-input" type="radio" name="goals" id="goalMuscleGain" value="Muscle gain" checked={goals === "Muscle gain"}
          onChange={(e) => setGoals(e.target.value)}/>
          <label class="form-check-label" for="goalsMuscleGain">
            Muscle gain
          </label>
        </div>

        <div class="checkGoals">
          <input class="form-check-input" type="radio" name="goals" id="goalsFatLoss" value="Fat loss" checked={goals === "Fat loss"}
          onChange={(e) => setGoals(e.target.value)}/>
          <label class="form-check-label" for="goalFatLoss">
            Fat loss
          </label>
        </div>

        <div class="checkActivity">
          <h4>What is your current activity level?</h4>
          <input class="form-check-input" type="radio" name="activity" id="activityBeginner" value="Beginner" checked={activity === "Beginner"}
          onChange={(e)=>setActivity(e.target.value)} />
          <label class="form-check-label" for="activityBeginner">
            Beginner
          </label>
        </div>

        <div class="checkActivity">
          <input class="form-check-input" type="radio" name="activity" id="activityIntermediate" value="Intermediate" checked={activity === "Intermediate"}
          onChange={(e) => setActivity(e.target.value)}/>
          <label class="form-check-label" for="activityIntermediate">
            Intermediate 
          </label>
        </div>

        <div class="checkActivity">
          <input class="form-check-input" type="radio" name="activity" id="activityExperienced" value="Experienced" checked={activity === "Experienced"}
          onChange={(e) => setActivity(e.target.value)}/>
          <label class="form-check-label" for="activityExperienced">
            Experienced
          </label>
        </div>

        <div class="checkExperience">
          <h4>What is your primary fitness goal?</h4>
          <input class="form-check-input" type="radio" name="experience" id="Experience3Months" value="0-3 months" checked={experience === "0-3 months"}
          onChange={(e) => setExperience(e.target.value)} />
          <label class="form-check-label" for="Experience3Months">
            0-3 months
          </label>
        </div>

        <div class="checkExperience">
          <input class="form-check-input" type="radio" name="experience" id="Experience3-12Months" value="3-12 months" checked={experience === "3-12 months"}
          onChange={(e) => setExperience(e.target.value)}/>
          <label class="form-check-label" for="Experience3-12Months">
            3-12 months
          </label>
        </div>

        <div class="checkExperience">
          <input class="form-check-input" type="radio" name="experience" id="Experience12Months" value="Over 12 months" checked={experience === "Over 12 months"}
          onChange={(e) => setExperience(e.target.value)}/>
          <label class="form-check-label" for="Experience12Months">
            Over 12 months
          </label>
        </div>

        <div class="checkImprove">
          <h4>Are you aiming to reduce stress and improve mental well-being through exercise?</h4>
          <input class="form-check-input" type="radio" name="improve" id="improveYes" value="Yes" checked={improve === "Yes"}
          onChange={(e) => setImprove(e.target.value)}/>
          <label class="form-check-label" for="improveYes">
            Yes
          </label>
        </div>

        <div class="checkImprove">
          <input class="form-check-input" type="radio" name="improve" id="improveNo" value="No" checked={improve === "No"}
          onChange={(e) => setImprove(e.target.value)}/>
          <label class="form-check-label" for="improveNo">
            No
          </label>
        </div>

        <div class="checkImprove">
          <input class="form-check-input" type="radio" name="improve" id="improveInShape" value="I just want to get in shape..." checked={improve === "I just want to get in shape..."}
          onChange={(e) => setImprove(e.target.value)}/>
          <label class="form-check-label" for="improveInShape">
            I just want to get in shape...
          </label>
        </div>

        <div class="textBox">
          <label for="exampleFormControlTextarea1">Specify your goals here:</label>
          <textarea class="form-control" id="specification" rows="5" placeholder="specification" value={specification}
            onChange={(e) => setSpecification(e.target.value)}></textarea>
        </div>

       <div className='submit-contact-div'>
       <button type="submit" className="submit-button-contact">Submit</button>
       </div>
      </form>
    </div>

  
  )
}

export default Contact