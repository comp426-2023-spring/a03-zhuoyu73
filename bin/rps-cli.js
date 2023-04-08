#!/usr/bin/env node
import minimist from 'minimist';
import {rps} from "../lib/rpsls.js";
const args = minimist(process.argv.slice(2));
rps(args)