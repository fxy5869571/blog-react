export const format = (date: string): string => {
  const myDate = new Date(date)
  const year = myDate.getFullYear()
  const month = myDate.getMonth() + 1
  const day = myDate.getDate()
  const hours = myDate.getHours()
  const minutes = myDate.getMinutes()
  const seconds = myDate.getSeconds()
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}
