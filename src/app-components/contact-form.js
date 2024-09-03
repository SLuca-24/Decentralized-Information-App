import React from 'react';
import '../css/ContactForm.css';

function Contactform() {
  return (
<>
<section id="contact" class="contact">
<div class="container">
<div action="#" method="post">
               
                <input type="text" name="first_name" placeholder="First Name" required />
                
                <input type="text" name="last_name" placeholder="Last Name" required />
                
                <input type="email" name="email" placeholder="Email" required/>
                
                <select name="request_type" required>
                    <option value="" disabled selected>Type of request</option>
                    <option value="Info">General information</option>
                    <option value="Collab">Collaboration</option>
                    <option value="Project development">Project development</option>
                    <option value="Employment">Employment</option>
                    <option value="Other">Other type of request, please describe it in the message box below</option>
                </select>

                <textarea name="message" rows="5" placeholder="Message" required></textarea>
               
                <select name="how_did_you_find_me" required>
                    <option value="" disabled selected>How did you find me?</option>
                    <option value="social">Social Media</option>
                    <option value="friend">Friend or Family</option>
                    <option value="online">Online Search</option>
                    <option value="advertisement">Advertisement</option>
                    <option value="word_of_mouth">Other</option>
                </select>

                <button type="submit" class="contact-btn">Send</button>
    </div>
    </div>
    </section>
</>
  );
}

export default Contactform;
