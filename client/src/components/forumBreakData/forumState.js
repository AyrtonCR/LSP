// const NBSwellReturn = () => {
//   const [swellLoading, setSwellLoading] = useState(false);
//   const [nbApiData, setNbApiData] = useState([]);

//   const fetchSwellData = async () => {
//     setSwellLoading(true);
//     const response = await getSwells.getNbSwell();
//     if (response.ok) {
//       const data = await response.json();
//       setNbApiData(data);
//       console.log("Checking Swell Fetch");
//       console.log(data);
//       setSwellLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchSwellData();
//   }, []);
//   return nbApiData && swellLoading;
// };
