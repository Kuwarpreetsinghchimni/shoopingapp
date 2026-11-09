export default function Carousel(){
    return(
    <div id="carouselExampleDark" class="carousel carousel-dark slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner" style={{height:"50vh"}}>
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNz4CUHLW3U-vK-aNxkVMxfgFvSudryE9MTvG2mtjBqw&s=10"} class="d-block img-fluid w-100 object-fit-cover" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={"data:image/jpeg;base64,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"} class="d-block img-fluid w-100 object-fit-cover" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj_mqtumgEU0UpeoLWi_ZR5uQvUe7n-BR-j9VjEYSD9g&s=10"} class="d-block img-fluid w-100"  alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>)
   }