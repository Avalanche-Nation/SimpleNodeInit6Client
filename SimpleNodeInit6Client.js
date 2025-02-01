const net = require('net');

const options = {
    host: 'war.pianka.io',
    port: 6112
};

var uname = 'username';
var upass = 'password';
var uhome = 'channel';

const client = net.createConnection(options, () => {
    remota = net.remoteAddress;
    remotp = net.remotePort;
});

client.on('data', data => {
    console.log(data.toString());
    // client.end(); ignore this heh
});

client.on('connect', () => {
    console.log('connected: ' + client.remoteAddress + ':' + client.remotePort);
    client.write('C1\r\nACCT ' + uname + '\r\nPASS ' + upass + '\r\nHOME ' + uhome + '\r\nLOGIN\r\n');
});

client.on('close', data => {
    console.log('closed: ' + client.remoteAddress + ':' + client.remotePort);
});

client.on('error', err => {
    console.log(err.message);
});
