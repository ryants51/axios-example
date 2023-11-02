import { api } from './index';

interface ReturnedItem {
  item: string;
}

async function createItem(
  requestBody: string
): Promise<string> {
  const response = await api.post<ReturnedItem>(
    '/yourSpecificAPIEndpointToCreateAnItem',
    requestBody
  );

  return response.data.item;
}

export { createItem };
