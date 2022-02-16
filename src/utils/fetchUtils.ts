export const getRequest = async <T>(url: string): Promise<T> => {
  const rawResponse = await fetch(url, {
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
  if (rawResponse.ok) {
    return await rawResponse.json();
  }
  throw Error(String(rawResponse.status));
};

export const postRequest = async <T>(url: string, body: string): Promise<T> => {
  const rawResponse = await fetch(url, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body
  });

  if (rawResponse.ok) {
    return await rawResponse.json();
  }
  throw Error(String(rawResponse.status));
};

export const putRequest = async <T>(url: string, body: string): Promise<T> => {
  const rawResponse = await fetch(url, {
    method: 'PUT',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body
  });
  if (rawResponse.ok) {
    return await rawResponse.json();
  }
  throw Error(String(rawResponse.status));
};

export const deleteRequest = async <T>(url: string): Promise<T> => {
  const rawResponse = await fetch(url, {
    method: 'DELETE',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
  if (rawResponse.ok) {
    return await rawResponse.json();
  }
  throw Error(String(rawResponse.status));
};
