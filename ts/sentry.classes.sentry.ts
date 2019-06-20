import * as plugins from './sentry.plugins';

/**
 * the constructor options for Sentry
 */
export interface ISentryConstructorOptions {
  appName: string;
  dsn: string;
}

/**
 * The main class that is used creating instances of sentry
 */
export class Sentry {
  constructor(optionsArg: ISentryConstructorOptions) {
    plugins.sentry.init({
      dsn: optionsArg.dsn
    });
    process
      .on('unhandledRejection', (reason, p) => {
        console.error(reason, 'Unhandled Rejection at Promise', p);
      })
      .on('uncaughtException', err => {
        console.log(err);
        this.captureException(err);
        process.exit(1);
      });
  }

  captureException(exceptionArg: any) {
    plugins.sentry.captureException(exceptionArg);
  }
}
