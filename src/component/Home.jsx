import React, { useState } from 'react'
import './Home.css'
const Home = () => {

    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();

    // Store form data in local storage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('company', company);
    localStorage.setItem('title', title);
    alert(` ${name} registration succefull done`)

  };


  return (
    <div>
        <section>
      <div className='parent-div'>
        {/* left side info */}
      <div className='lft-div'>
        <div className='lft-nav'>
            <div> <img src="https://voosh.in/static/media/VooshLogo.c64bcebd40a2d49cc591.webp" alt="" /></div>
        </div>
            <div className='lft-sec-div'>
                <div className='headline'>
                    <h1>Consolidate your restaurants' insights in one place. Unlock growth</h1>
                    <p>Your one stop solution to view mission-critical data and insights from all your locations in one <br /> place.</p>
                </div>
                
            </div>
            <div className='button-div-lft'>
                <button className='btn-lft' > <a href="#sec_2">Book Demo</a> </button>
            </div>
            <div className='arrow'>
                <img src="https://voosh.in/static/media/arrow.ff14f58c77374c33f8e8.webp" alt="" />
            </div>
        
      </div>

      {/* right side info */}
        <div className='rit-div'>
            <img src="https://voosh.in/static/media/my_profile.61da110e7e1e80c97356.webp" alt="" />
        </div>
        
      </div>
      </section>


 {/* Fold-2 */} 
 <section id='sec_2'>
      <div className='parent-2'>
        <div className='parnt-2lft'> 
        <div className='headline-2'>
            <h1>
                Book A Demo Now
            </h1>
        </div>
        </div>
        <div className='parnt-2rit'> 

{/* Form */}
        <div className='form-div'>

        <form onSubmit={handleSubmit}>
      <label>
        Name <span>*</span>
        <br />
        <input
          type="text"
          placeholder="Ex. Jhon Deo"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <br />
      <br />
      <label>
        Email<span>*</span>
        <br />
        <input
          type="email"
          placeholder="Ex. mail@website.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <br />
      <label>
        Company<span>*</span>
        <br />
        <input
          type="text"
          placeholder="Ex. XYZ PVT LTD"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
        />
      </label>
      <br />
      <br />
      <label>
        Title<span>*</span>
        <br />
        <input
          type="text"
          placeholder= " Ex. Operational Head"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <br />
      <button className='btn-2' type="submit">Submit</button>
    </form>

        </div>
        
           


        </div>

      </div>
      </section>
    </div>
  )
}

export default Home
