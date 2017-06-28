#!/usr/bin/env node
const Nightmare = require('nightmare');
const scPlugin = require('nightmare-screenshot');
const kexec = require('kexec');

const text = process.argv.slice(2).join(' ') || '5000兆円';
const width = 2500;
const out = 'out.png';

let rect = {};

Nightmare()
  .goto('https://rare25.github.io/5000choyen/')
  .type('#textbox', text)
  .wait(500)
  .viewport(width + 10, 1000)
  .screenshot(out, {
    x: 10, y: 90, width: width, height: 150,
  })
  .end()
  .then((result) => {
    kexec('imgcat', [out])
  })
  .catch((error) => console.error('error:', error));
