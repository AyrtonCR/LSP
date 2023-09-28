const LoadMongoData = (surfbreaks, isLoading, MainProp) => {
  if (surfbreaks) {
    if (isLoading === false) {
      console.log("Data is ready, loading now ...");
      return <MainProp />;
    }
  } else if (isLoading === true);
  console.log("Initial undefined, DB Loading ...");
  return (
    <>
      <h3>Currently DB is undefined, please wait up to 30 seconds for DB to load.</h3>
    </>
  );
};

export default LoadMongoData;
