import { MongoClient } from "mongodb";

const globalForMongo = globalThis as unknown as {
  mongoClientPromise?: Promise<MongoClient>;
};

/** MONGODB_URI가 없으면 null을 반환합니다 (로컬에서 DB 없이도 페이지가 동작하도록). */
export function getMongoClient(): Promise<MongoClient> | null {
  const uri = process.env.MONGODB_URI;
  if (!uri) return null;

  // 개발 모드의 핫 리로드에서도 연결을 재사용하기 위해 전역에 보관합니다.
  if (!globalForMongo.mongoClientPromise) {
    globalForMongo.mongoClientPromise = new MongoClient(uri).connect();
  }
  return globalForMongo.mongoClientPromise;
}

export async function getClicksCollection() {
  const clientPromise = getMongoClient();
  if (!clientPromise) return null;
  const client = await clientPromise;
  return client
    .db(process.env.MONGODB_DB ?? "linknamu")
    .collection<{ _id: string; count: number }>("clicks");
}
