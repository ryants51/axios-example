
import { api } from './index';

interface ReturnedData {
  items: string[];
}

async function getItems(
): Promise<string[]> {
  const response = await api.get<ReturnedData>(
    '/yourSpecificEndpointToGetItems'
  );

  return response.data.items;
}

export { getItems };
