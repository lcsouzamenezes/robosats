import TorModule from '../../native/TorModule';

class TorClient {
  public get: (baseUrl: string, path: string, headers: object) => Promise<object> = async (
    baseUrl,
    path,
    headers,
  ) => {
    return await new Promise<object>((resolve, reject) => {
      try {
        TorModule.sendRequest('GET', `${baseUrl}${path}`, JSON.stringify(headers), '{}').then(
          (response) => {
            resolve(JSON.parse(response));
          },
        );
      } catch (error) {
        reject(error);
      }
    });
  };

  public delete: (baseUrl: string, path: string, headers: object) => Promise<object> = async (
    baseUrl,
    path,
    headers,
  ) => {
    return await new Promise<object>((resolve, reject) => {
      try {
        TorModule.sendRequest('DELETE', `${baseUrl}${path}`, JSON.stringify(headers), '{}').then(
          (response) => {
            resolve(JSON.parse(response));
          },
        );
      } catch (error) {
        reject(error);
      }
    });
  };

  public post: (baseUrl: string, path: string, body: object, headers: object) => Promise<object> =
    async (baseUrl, path, body, headers) => {
      return await new Promise<object>((resolve, reject) => {
        try {
          const json = JSON.stringify(body);
          TorModule.sendRequest('POST', `${baseUrl}${path}`, JSON.stringify(headers), json).then(
            (response) => {
              resolve(JSON.parse(response));
            },
          );
        } catch (error) {
          reject(error);
        }
      });
    };
}

export default TorClient;
