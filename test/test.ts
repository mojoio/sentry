import { expect, tap } from '@pushrocks/tapbundle';
import * as sentry from '../ts/index';

import { Qenv } from '@pushrocks/qenv';

const testQenv = new Qenv('./', '.nogit/');

let testSentry: sentry.Sentry;

tap.test('first test', async () => {
  testSentry = new sentry.Sentry({
    appName: '@mojoio/sentry',
    dsn: process.env.DSN
  });
});

tap.test('should send an Error', async () => {
  testSentry.captureException(new Error('This is a test error!'));
});

tap.start();
