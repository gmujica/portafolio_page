import React from 'react'
import '../App.css'

const Contact = () => {
    return (
      <section id="contact">
         <div className='content'>
            <div>
               <h2>Linkedin</h2>
               <h3>Gregory Mujica</h3>
            </div>
            <div>
               <h2>Github</h2>
               <h3>gmujica</h3>
            </div>
            <div>
               <h2>Discord</h2>
               <img
                    //className="header_logo"
                    src="https://toppng.com/uploads/preview/discord-logo-01-discord-logo-11562849833clsolz2mbc.png"
                    alt="img"
                />
               <h3>gmujica#0592</h3>
            </div>
            <div>
               <h2>Gmail</h2>
               <h3>gregorymujica1993@gmail.com</h3>
            </div>
            <div>
               <h2>Skype & Teams</h2>
               <h3>gmujica93@outlook.com</h3>
            </div>
         </div>
      </section>
    );
}

export default Contact
