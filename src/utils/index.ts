/**
 * 数据类型判断
 * @param value
 * @param type 数据类型(大小写不限)
 */
export function isType(value: unknown, type: string): boolean {
  return (
    Object.prototype.toString.call(value).toLowerCase() ===
    `[object ${type}]`.toLowerCase()
  )
}
