function RegionCard({ imageSource, regionName, regionClickHandler }) {
  return (
    <div onClick={() => regionClickHandler(regionName)}>
      <img className="region-image" src={imageSource} />
      <div className="region-name-text">{regionName}</div>
    </div>
  );
}

export default RegionCard;
