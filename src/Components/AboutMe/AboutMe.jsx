import "./AboutMe.css";

function AboutMe() {
  return (
    <>
      <div className="about-me">
        <div className="left-column">
          <div className="information">
            <h1>Michał Jezierski</h1>
            <p>
              F1 racing and football fanatic. The only one person in Poland
              whose watching the Golf channel.
            </p>
          </div>
        </div>
        <div className="right-column">
          <img
            src="https://a.allegroimg.com/s512/116eb7/740df4e44c2a8d09c818ca969af9/Legia-Warszawa-Herb-na-sciane-idealny-na-prezent"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default AboutMe;

//
