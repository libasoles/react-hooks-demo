import axios, { AxiosInstance } from "axios";

import { ApiConfigInterface } from "../types/Config";

class Api {
  private client: AxiosInstance;

  constructor(config: ApiConfigInterface) {
    const { baseURL } = config;

    const token = localStorage.getItem("id_token");
    this.client = axios.create({
      baseURL,
      headers: {
        common: {
          Authorization: `Bearer ${token}`
        }
      }
    });
  }

  async get(resource: string, params = {}, config = {}) {
    return await this.client
      .get(resource, { ...config, params })
      .then(response => response.data);
  }

  async post(resource: string, params = {}, config = {}) {
    return await this.client
      .post(resource, params, config)
      .then(response => response.data);
  }

  async put(resource: string, params = {}, config = {}) {
    return await this.client.put(resource, params, config);
  }

  async patch(resource: string, params = {}, config = {}) {
    return await this.client.put(resource, params, config);
  }

  async delete(resource: string, config = {}) {
    return await this.client.delete(resource, config);
  }
}

export default Api;
