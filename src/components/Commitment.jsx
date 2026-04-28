import "./Commitment.css"
import styleImg from "../assets/Style/style.png"
import CommitmentImg from "../assets/images/Commitment.png"

const Commitment = () => {
  return (
<section className="commitment-section">

  <div className="commitment-box">
    <img src= {styleImg} className="bg-style" alt="" />
<img src={CommitmentImg}  className="main-img" alt="" />


    <div className="commitment-text">
      <h2>Our Commitment </h2>

      <p>
        At Riddhi Siddhi, quality is not just a process — it’s a promise. <br />We continuously improve our production standards to meet evolving market demands and consumer expectations.
      </p>
    </div>


  </div>

</section>
  )
}

export default Commitment
