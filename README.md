# Backend
3/24/2022 From Brad:
BIG BREAKING CHANGES!!! Changed the server from CommonJS to ES module.

See https://blog.logrocket.com/commonjs-vs-es-modules-node-js/#:~:text=ES%20modules%20are%20the%20standard,encapsulating%20JavaScript%20code%20for%20reuse.

ES modules use import/export syntax


New additions to this most recent version:
- Node files made to run background processes for frontend (Still in the works it's not cleaned up yet)
- Mailer.js for the most part made for client communication directly to our email (Will likely use mailjet as mailing api)
- Dockerfile made in case we plan on using two servers for frontend and backend
