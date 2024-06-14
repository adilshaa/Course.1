import "../Loading/WaveLoading.css";

function WaveLoading() {
  return (
    <>
      <div className="center">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="wave"></div>
        ))}
      </div>
    </>
  );
}

export default WaveLoading;
