// Product //

const ReturnNbData = ({ firstDate, firstTide, secondDate, secondTide }) => {
  return (
    <>
      <p>{firstDate}</p>
      <p>Low Tide:{firstTide}M</p>
      <p>{secondDate}</p>
      <p> High Tide:{secondTide}M</p>
    </>
  );
};

export { ReturnNbData };
