// Products //
import { ReturnNbData } from "./nbData";
import { formatDate } from "../../utils/formatDate";

const BreakObject = ({ prop, swellLoading }) => {
  if (swellLoading === false) {
    // console.log(swellLoading);
    swellLoading = true;
    // console.log("This is the prop");
    // console.log(prop);
    if (swellLoading) {
      return (
        <ReturnNbData
          key={prop.metadata.start}
          firstDate={formatDate(prop.values[3].time)}
          firstTide={prop.values[3].value}
          secondDate={formatDate(prop.values[4].time)}
          secondTide={prop.values[4].value}
        />
      );
    }
  } else if (swellLoading === true)
    return (
      <>
        <p>Swell data loading ..</p>
      </>
    );
};

export default BreakObject;
