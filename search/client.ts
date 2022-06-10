import { MeiliSearch } from 'meilisearch';

declare global {
  var meilisearch: MeiliSearch | undefined;
}

export const meilisearch =
  global.meilisearch || new MeiliSearch({ host: 'http://127.0.0.1:7700' });

if (process.env.NODE_ENV !== 'production') {
  global.meilisearch = meilisearch;
}
