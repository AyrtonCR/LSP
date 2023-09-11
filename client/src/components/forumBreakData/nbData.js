// Product //

const ReturnNbData = ({ swellLoading, firstDate, firstTide, secondDate, secondTide }) => {
  // if (swellLoading === false)
  return (
    <>
      <p>{firstDate}</p>
      <p>Low Tide:{firstTide}M</p>
      <p>{secondDate}</p>
      <p> High Tide:{secondTide}M</p>
    </>
  );
  // else if (swellLoading === true)
  //   return (
  //     <>
  //       <p>Swell data loading ..</p>
  //     </>
  //   );
};

export { ReturnNbData };
