  import "./Process.css"
  import processImg from "../assets/images/Process (2).png";
  import growthIcon from "../assets/Icons/growth 1.svg";

  const Process = () => {
    return (
      <section className='process-section'>
        <div className='process-container'>

          <div className='left'>
            <img src={processImg} alt="process"/>
          </div>

          <div className="right">
            <h2>Our Process</h2>
            <p>At Riddhi Siddhi, we are committed to manufacturing high- quality food<br/>
  essentials including </p>

            <div className='steps'>

              {/* Step 1 */}
              <div className="step">
                <div className="icon"><img src={growthIcon} alt="icon" width={50} height={50} /></div>
                <div className="text">
                  <h4>Raw Material Selection</h4>
                  <p>We procure high-quality grains and pulses from trusted suppliers.</p>
                </div>
              </div>

              {/* Step 2 */}
              
              <div className="step">
                <div className="icon"><img src={growthIcon} alt="icon" width={50} height={50} /></div>
                
                <div className="text">
                  <h4>Cleaning & Processing</h4>
                  <p>Advanced machinery ensures proper cleaning and refining.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="step">
                <div className="icon"><img src={growthIcon} alt="icon" width={50} height={50} /></div>
                <div className="text">
                  <h4>Grinding & Milling</h4>
                  <p>Maintaining texture, nutrition, and consistency.</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="step">
                <div className="icon"><img src={growthIcon} alt="icon" width={50} height={50} /></div>
                <div className="text">
                  <h4>Quality Testing</h4>
                  <p>Every batch is tested for purity and safety standards.</p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="step">
                <div className="icon"><img src={growthIcon} alt="icon" width={50} height={50} /></div>
                <div className="text">
                  <h4>Hygienic Packaging</h4>
                  <p>Sealed packaging to maintain freshness.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    )
  }

  export default Process