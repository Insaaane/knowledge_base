import { format } from "date-fns";
import { ru } from "date-fns/locale";

function formatDate(isoString) {
  const date = new Date(isoString);
  return format(date, 'dd MMMM yyyy', { locale: ru });
}

function formatDateTime(isoString) {
  const date = new Date(isoString);
  return format(date, 'dd.MM.yyyy hh:mm', { locale: ru });
}

export function sortByDate(data) {
  return data.sort((a, b) => new Date(b.start_datetime) - new Date(a.start_datetime));
}

export { formatDate, formatDateTime };