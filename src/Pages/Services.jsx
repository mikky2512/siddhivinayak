import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
.Service-gallery {
  padding: 50px;
  text-align: center;
}

.gallery-grid {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.gallery-grid img {
  width: 300px;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
}`
function Services() {
  return (
    <div className="Services">

        <section className="Services-gallery">
            <GlobalStyle/>
        <h2>Our Vehicles</h2>
        
      </section>
      </div>

       );
}

export default Services;
