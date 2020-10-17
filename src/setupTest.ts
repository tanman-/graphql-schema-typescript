jasmine.DEFAULT_TIMEOUT_INTERVAL = 60_000;

process.on('unhandledRejection', err => { throw err; });

beforeAll(async () => {
    if (process.env.NODE_ENV !== 'test') {
        throw new Error('Please run tests in test environment');
    }
    //
});

afterAll(async () => {
    //
});