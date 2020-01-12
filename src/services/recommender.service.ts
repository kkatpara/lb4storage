// Copyright IBM Corp. 2018. All Rights Reserved.
// Node module: loopback4-example-shopping
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { getService } from '@loopback/service-proxy';
import { inject, Provider } from '@loopback/core';
import { StorageDataSource } from '../datasources/storage.datasource';
import { Container } from '../models';

export interface RecommenderService {
  getProductRecommendations(userId: string): Promise<Container[]>;
}

export class RecommenderServiceProvider
  implements Provider<RecommenderService> {
  constructor(
    @inject('datasources.recommender')
    protected datasource: StorageDataSource,
  ) { }

  value(): Promise<RecommenderService> {
    return getService(this.datasource);
  }
}
