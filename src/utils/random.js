/*
 * @Author: lihuan
 * @Date: 2023-04-24 15:53:39
 * @LastEditors: lihuan
 * @LastEditTime: 2023-04-24 15:53:47
 * @Description:
 */

export default function(len = 32) {
  const $chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  const maxPos = $chars.length;
  let str = "";
  for (let i = 0; i < len; i++) {
    str += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return str;
}
