import { format } from "date-fns";
import { ru } from "date-fns/locale";

function formatDate(isoString) {
  const date = new Date(isoString);
  return format(date, 'dd MMMM yyyy', { locale: ru });
}

export { formatDate };