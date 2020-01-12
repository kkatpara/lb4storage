import { UploadAmazonApplication } from './application';
import { ApplicationConfig } from '@loopback/core';
import { StorageGCServiceProvider } from './providers';

export { UploadAmazonApplication };

export async function main(options: ApplicationConfig = {}) {
  const app = new UploadAmazonApplication(options);
  app.serviceProvider(StorageGCServiceProvider);

  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
