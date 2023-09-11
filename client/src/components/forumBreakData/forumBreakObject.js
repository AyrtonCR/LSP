// Products //
import { ReturnNbData } from "./nbData";
import { formatDate } from "../../utils/formatDate";

const BreakObjectNb = ({ prop, swellLoading }) => {
  if (swellLoading === false)
    return (
      <ul className="product-grid">
        <ReturnNbData
          key={prop.metadata.start}
          firstDate={formatDate(prop.values[3].time)}
          firstTide={prop.values[3].value}
          secondDate={formatDate(prop.values[4].time)}
          secondTime={prop.values[4].value}
        />
      </ul>
    );
  else if (swellLoading === true)
    return (
      <>
        <p>Swell data loading ..</p>
      </>
    );
};

export default BreakObjectNb;
