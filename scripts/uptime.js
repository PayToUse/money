let uptime = 0

setInterval(() => {
  uptime++;

document.querySelector("#ut").innerHTML = uptime
}, 1000)
