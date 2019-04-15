export default interface ApiInterface {
  get(resource: string, params?: any, config?: any): Promise<any>;
  post(url: string, params?: any, config?: any): Promise<any>;
  put(url: string, params?: any, config?: any): Promise<any>;
  patch(url: string, params?: any, config?: any): Promise<any>;
  delete(url: string, config?: any): Promise<any>;
}
