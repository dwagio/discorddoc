import { meilisearch } from './client';

export async function createMeilisearchIndex(key: string) {
  const existingIndex = await meilisearch.getIndex(key);
  if (existingIndex) {
    return existingIndex;
  }

  const newIndex = await meilisearch.createIndex(key);
  return newIndex;
}
