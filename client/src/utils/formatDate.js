import { format } from "date-fns";

const formatDate = (date) => format(new Date(date), "dd/MM/yy kk:mm:ss");

export { formatDate };
