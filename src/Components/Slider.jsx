function Slider() {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide z-0"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="slider2.jpg" className="d-block " alt="..." />
        </div>
        <div className="carousel-item">
          <img src="slider2.jpg" className="d-block " alt="..." />
        </div>
        <div className="carousel-item">
          <img src="slider2.jpg" className="d-block" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
