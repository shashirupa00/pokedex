function Stat({ idx, children }) {
  return (
    <div className="ind-stat">
      <p>{children}</p>
      <div>{idx}</div>
    </div>
  );
}

export default Stat;
