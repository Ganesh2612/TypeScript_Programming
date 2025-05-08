const winston=require('winston');
winston.log("info","This will show the error");
winston.info("Shows the Information!!");
winston.info('Hello again distributed logs');  

winston.level = 'debug';
winston.log('debug', 'Now my debug messages are written to console!');