export function generateGUID() {
  const S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

export function cancelBubble(e) {
  let event = e;
  if (!event) {
    event = window.event;
  }

  //IE9 & Other Browsers
  if (event.stopPropagation) {
    event.stopPropagation();
  }
  //IE8 and Lower
  else {
    event.cancelBubble = true;
  }
}