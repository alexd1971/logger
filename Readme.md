# Logger

## Description

Simple client for [log-server][log-server] based on [winston][winston] project

Logger uses HTTP as transport and requires running [log-server][log-server]

## Installation

```
$ npm install @alexd1971/logger --save
```

## Usage

```
var options = {
    host: 'localhost', // optional (default: localhost)
    port: 4114 //optional (default: 4114)    
};

// Options can be omitted. If so defaults will be used
var logger = require('@alexd1971/logger').create(options);

logger.info("Super important log message");
```

[log-server]:https://github.com/alexd1971/log-server
[winston]:https://github.com/winstonjs/winston