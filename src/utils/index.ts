export function formatCurrency(value: number | string, symbol: string): string {
  return `${symbol}${thousandSeparator(value)}`;
}

export function thousandSeparator(value: number | string): string {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function truncate(text:string, length:number):string {
  if (text.length > length) {
    return `${text.substring(0, length)}...`;
  }

  return text;
}

export function isEmpty(obj:Record<string, unknown>):boolean{
  return Object.keys(obj).length === 0 && obj.constructor === Object
}

export { default as request } from "./request";
