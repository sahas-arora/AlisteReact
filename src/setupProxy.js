// let proxy = require("http-proxy-middleware");
//
// module.exports = function(app) {
//   app.use(
//     proxy("/api/setup/user", {
//       target: "https://aliste-server.herokuapp.com/"
//     })
//   );
//
//   app.use(
//     proxy("/api/checkInvites/*", {
//       target: "https://aliste-server.herokuapp.com/"
//     })
//   );
//
//   app.use(
//     proxy("/api/setup/*", {
//       target: "https://aliste-server.herokuapp.com/"
//     })
//   );
//
//   app.use(
//     proxy("/api/fetch/house/*", {
//       target: "https://aliste-server.herokuapp.com/"
//     })
//   );
// };
