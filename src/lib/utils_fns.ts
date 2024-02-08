export const formatDate = (date:string):string => {
  const dateObjt = new Date(date);
  const ifMinus = (num:number):string=>num>9?`${num}`:`0${num}`
  return `${dateObjt.getFullYear()} • ${ifMinus(dateObjt.getMonth()+1)} • ${ifMinus(dateObjt.getDate())}`;
}