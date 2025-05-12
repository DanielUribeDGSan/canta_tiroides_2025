export const Divider = () => {
  return (
    <div className="divider-container">
      {[1, 2, 3].map((num) => (
        <div className="divider" key={num} />
      ))}
    </div>
  );
};
