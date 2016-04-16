///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
///<reference path="./typings.d.ts"/>

import 'core-js';
import 'zone.js';
import { bootstrap } from 'angular2/platform/browser';

import AppComponent from './component/app';

document.head.innerHTML
  += `<style> ${require('./main.styl')} </style>`;

bootstrap(AppComponent);
