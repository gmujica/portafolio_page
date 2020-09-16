import React from 'react'
import '../App.css'

const Contact = () => {
    return (
      <section id="contact">
         <div className='content'>   
            <div>
               <i className="fab fa-github"></i>
               <h2>Github</h2>
               <h3>gmujica</h3>
            </div>
            <div>
               <i className="fab fa-discord"></i>
               <h2>Discord</h2> 
               <h3>gmujica#0592</h3>
            </div>
            <div>
               <i className="far fa-envelope"></i>
               <h2>Gmail</h2>
               <h3>gregorymujica1993@gmail.com</h3>
            </div>
            <div>
            <i class="fab fa-skype"></i>
               <h2>Skype & Teams</h2>
               <h3>gmujica93@outlook.com</h3>
            </div>
            <div>
               <i class="fab fa-linkedin-in"></i>
               <h2>Linkedin</h2>
               <h3>Gregory Mujica</h3>
            </div>
         </div>
      </section>
    );
}

export default Contact
