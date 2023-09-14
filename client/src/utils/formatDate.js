import { format } from "date-fns";

const formatDate = (date) => format(new Date(date), "EE MMM do : kk:mm");

export { formatDate };
