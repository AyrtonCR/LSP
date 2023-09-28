import loadingStyle from "./loadingMongoData.module.css";

const LoadMongoData = (stateContent, stateLoading, ReturnProp) => {
  if (stateContent) {
    if (stateLoading === false) {
      console.log("Data is ready, loading now ...");
      return <ReturnProp />;
    }
  } else if (stateLoading === true);
  console.log("DB Loading, please wait up to 30 seconds ...");
  return (
    <>
      <div className={loadingStyle.loadingDiv}>
        <p className={loadingStyle.loadingP}>MongoDB is currently loading ...</p>
        <p className={loadingStyle.loadingP}>The free plan takes up to 30 seconds to boot up the database.</p>
      </div>
    </>
  );
};

export default LoadMongoData;
