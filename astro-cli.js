#!/usr/bin/env node
import { createRequire } from 'module';
import { dirname, join } from 'path';

const require = createRequire(import.meta.url);
const astroMain = require.resolve('astro');
const astroDir = dirname(astroMain);
const astroBin = join(astroDir, '../astro.js');

await import('file://' + astroBin);
