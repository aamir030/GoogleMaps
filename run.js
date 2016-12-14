'use strict'

const slackClient = require("../server/slackClient");
const service = require("../server/service");
const http = require("http");
const server = http.createServer(service);

const witToken = '3NN3Y43O6WJY5RJPC7PSEDIHJ3QD5NGL'
const witClient = require('../server/witClient')(witToken);

const slackToken = 'xoxb-111187933364-xNH9SYXoIV9yMf1y6oWgOhcs';
const slackLogLevel = 'verbose';

const rtm = slackClient.init(slackToken, slackLogLevel, witClient);
rtm.start();

slackClient.addAuthenticatedHandler(rtm, () => server.listen(4000));

server.on('listening', function() {
    console.log(`FRANK is listening on ${server.address().port} in ${service.get('env')} mode. `);
});