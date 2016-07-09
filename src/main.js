#!/usr/bin/env node

/* eslint-disable no-console */
'use strict';

const minimist = require('minimist');
const oathframe = require('oathframe-lib');

const argv = minimist(process.argv.slice(2), {
  default: {
    dest: null,
    format: 'html',
    source: '.'
  }
});

if( argv._[0] === 'render' ) {
  oathframe.render(argv.source,argv.format,console.log).catch(console.error);
} else if( argv._[0] === 'init' ) {
  oathframe.init(argv._[1],argv.index).catch(console.error);
} else {
  throw new Error('oathframe: ' + argv._[0] + ' is not an oathframe command.');
}

