export function About() {
  return (
    <>
      <style>{`
        .about-wrapper {
          background: #060d24;
          min-height: 100vh;
          color: #e2e8f0;
          padding: 60px 80px;
          justify-content: center;

        }
 
        .about-title {
          font-size: 32px;
          font-weight: 800;
          color: #93c5fd;
          margin-bottom: 32px;
        }
 
        .about-wrapper p {
          font-size: 16px;
          line-height: 1.9;
          color: #cbd5e1;
          margin-bottom: 20px;

        }
  
      `}</style>
 
      <div className="about-wrapper">
        <h1 className="about-title">About QubeCore</h1>
        <p>
          QubeCore is an online store dedicated to providing high-quality PC components to builders,
          gamers, and professionals across India. We started with a simple goal to make it easier
          for people to find the right parts for their builds without any confusion or compromise on quality.
        </p>
        <p>
          We stock a wide range of products including Motherboards, CPUs, GPUs, and RAM from some of
          the most trusted brands in the industry such as ASUS, MSI, Gigabyte, Intel, AMD, Corsair,
          and many more. Whether you are building your first PC or upgrading an existing rig, we have
          something for every budget and requirement.
        </p>
        <p>
          At QubeCore, we believe that building a PC should be an exciting experience, not a stressful
          one. That is why we make sure all our product listings are clear, accurate, and up to date so
          you always know exactly what you are getting.
        </p>
        <p>
          We are based in India and our primary focus is on serving the Indian PC building community.
          We are constantly expanding our catalogue and working to bring more products and better prices
          to our customers.
        </p> 
        <p>
          Thank you for choosing QubeCore. We hope you find exactly what you are looking for.
        </p>
      </div>
    </>
  )
}