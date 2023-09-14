import { Endpoints } from '@core/models/api';
import { endpoints } from 'env';
import { config } from 'src/environments/config';

export abstract class BaseApi {
  private readonly BASE_URL = config.api.baseUrl;

  protected buildUrl(endpointSelector: (e: Endpoints) => string): string {
    return `${this.BASE_URL}/${endpointSelector(endpoints)}`;
  }
}
