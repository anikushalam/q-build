const dateTimeComparison = (first, second) => {
  //   let args = "20/11/2022";
  //   const currDate = new Date().toISOString();
  //   console.info(currDate);
  //   if(+currDate.substr(0,4)>= +args.substr(6))
  //     if()
  //   else false
  //   const year = +first.substr(1, 4) === +second.substr(6, 4);
  //   const yearGreater = +first.substr(1, 4) > +second.substr(6, 4);
  //   const month = +first.substr(6, 2) === +second.substr(3, 2);
  //   const monthGreate = +first.substr(6, 2) > +second.substr(3, 2);
  //   const day = +first.substr(9, 2) === +second.substr(0, 2);
  //   const dayGreater = +first.substr(9, 2) > +second.substr(0, 2);
  //   const hour = +first.substr(12, 2) === +second.substr(11, 2);
  //   const hourGreater = +first.substr(12, 2) > +second.substr(11, 2);
  //   const minute = +first.substr(15, 2) === +second.substr(14, 2);
  //   const minuteGreater = +first.substr(15, 2) > +second.substr(14, 2);
  //   const secondTime = +first.substr(18, 2) === +second.substr(17, 2);
  //   const secondTimeGreater = +first.substr(18, 2) > +second.substr(17, 2);
  //   if (yearGreater) return true;
  //   else if (year)
  //     if (monthGreate) return true;
  //     else if (month)
  //       if (dayGreater) return true;
  //       else if (day)
  //         if (hourGreater) return true;
  //         else if (hour)
  //           if (minuteGreater) return true;
  //           else if (minute)
  //             if (secondTimeGreater) return true;
  //             else if (secondTime) return true;
  //             else return false;
  //           else return false;
  //         else return false;
  //       else return false;
  //     else return false;
  //   else return false;
};

const timeComparison = (first, second) => {
  // console.log(first);
  // console.log(second);
  const hour = +first.substr(12, 2) === +second.substr(0, 2);
  const hourGreater = +first.substr(12, 2) > +second.substr(0, 2);
  const minute = +first.substr(15, 2) === +second.substr(3, 2);
  const minuteGreater = +first.substr(15, 2) > +second.substr(3, 2);
  const secondTime = +first.substr(18, 2) === +second.substr(6, 2);
  const secondTimeGreater = +first.substr(18, 2) > +second.substr(6, 2);
  if (hourGreater) return true;
  else if (hour)
    if (minuteGreater) return true;
    else if (minute)
      if (secondTimeGreater) return true;
      else if (secondTime) return true;
      else return false;
    else return false;
  else return false;
};

export { dateTimeComparison, timeComparison };
