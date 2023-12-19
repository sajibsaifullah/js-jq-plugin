// $.notification(["jQueryScript Message 1", "jQueryScript Message 2"], {
//   position: ["top", "right"],
//   messageType: "success",
//   // redirectAction: 'https://google.com',//or null
// });

function warningDemo() {
  $.notification(["This is a Warning Toast"], {
    position: ["top", "right"],
    messageType: "warning",
    timeView: 6000,
  });
}

function errorDemo() {
  $.notification(["This is an Error Toast"], {
    position: ["top", "right"],
    messageType: "error",
    timeView: 6000,
  });
}
// function redirectDemo() {
//   $.notification(["Auto-redirect to jQueryScript"], {
//     position: ["top", "right"],
//     messageType: "error",
//     timeView: 6000,
//     redirectAction: "https://www.jqueryscript.net",
//   });
// }
