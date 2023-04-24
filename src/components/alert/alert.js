/*
 * @Author: lihuan
 * @Date: 2023-04-24 16:20:58
 * @LastEditors: lihuan
 * @LastEditTime: 2023-04-24 16:20:59
 * @Description:
 */
import Notification from "./notification.js";
let messageInstance;

function getMessageInstance() {
  messageInstance = messageInstance || Notification.newInstance();
  return messageInstance;
}
function notice({ duration = 1.5, content = "" }) {
  let instance = getMessageInstance();

  instance.add({
    content: content,
    duration: duration
  });
}

export default {
  info(options) {
    return notice(options);
  }
};
