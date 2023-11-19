
function HomePage() {
  return (
    <div id="cv" className="instaFade">
  <div className="mainDetails">
    <div id="headshot" className="quickFade">
      <img src="headshot.jpg" alt="Alan Smith" />
    </div>
    <div id="name">
      <h1 className="quickFade delayTwo">Vrandly Bloggs</h1>
      <h2 className="quickFade delayThree">Students</h2>
    </div>
    <div id="contactDetails" className="quickFade delayFour">
      <ul>
        <li><a href="http://www.bloggs.com">www.bloggs.com </a></li>
        <li>081350725166</li>
      </ul>
    </div>
    <div className="clear" />
  </div>
  <div id="mainArea" className="quickFade delayFive">
    <section>
      <article>
        <div className="sectionTitle">
          <h1>Personal Profile</h1>
        </div>
        <div className="sectionContent">
          <p>I have an interest in the computer field, especially computer security. currently studying at Klabat University. Open to job opportunities in the computer field.</p>
        </div>
      </article>
      <div className="clear" />
    </section>
    <section>
      <div className="sectionTitle">
        <h1>Work Experience</h1>
      </div>
      <div className="sectionContent">
        <article>
          <h2>Job Title at Company</h2>
          <p className="subDetails"></p>
          <p>None</p>
        </article>
      </div>
      <div className="clear" />
    </section>
    <section>
      <div className="sectionTitle">
        <h1>Key Skills</h1>
      </div>
      <div className="sectionContent">
        <ul className="keySkills">
          <li>Python</li>
          <li>Html</li>
          <li>Java Script</li>
          <li>C</li>
          <li>C#</li>
          <li>C++</li>
        </ul>
      </div>
      <div className="clear" />
    </section>
    <section>
      <div className="sectionTitle">
        <h1>Education</h1>
      </div>
      <div className="sectionContent">
        <article>
          <h2>College/University</h2>
          <p>Students of Klabat University</p>
        </article>
      
      </div>
      <div className="clear" />
    </section>
  </div>
</div>

  )
}

export default HomePage