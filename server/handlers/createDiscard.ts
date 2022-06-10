import { meilisearch } from '../../search/client';

export interface DiscardDocument {
  title: string;
  createdAt: number;
  messages: DiscardMessage[];
}

export interface DiscardMessage {
  author: string;
  authorId: string;
  content: string;
  messageId: string;
  authorPortrait: string;
}

export default async function createDiscard(
  indexKey: string,
  document: DiscardDocument
) {
  return meilisearch.index(indexKey).addDocuments([document]);
}
