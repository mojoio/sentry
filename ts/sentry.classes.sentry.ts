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
  }

  captureException(exceptionArg: any) {
    plugins.sentry.captureException(exceptionArg);
  }
}
