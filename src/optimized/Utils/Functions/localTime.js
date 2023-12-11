import localizedFormat from "dayjs/plugin/localizedFormat";
import dayjs from "dayjs";

export const localTimeFormat = (value, format) => {
  dayjs.extend(localizedFormat);
  return dayjs(value).format(format);
};
