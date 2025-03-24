import { Session } from "@shopify/shopify-api";
import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL!);

/**
 * Stores the session data into Redis.
 * @param {Session} session - The Shopify session object.
 * @returns {Promise<boolean>} Returns true if the operation was successful.
 */
const storeSession = async (session: Session): Promise<boolean> => {
  try {
    const sessionData = JSON.stringify(session);
    await redis.set(
      `session:${session.id}`,
      sessionData,
      "EX",
      60 * 60 * 24 * 7
    ); // Expires in 7 days
    console.log('Session Token Stored Successfully')
    return true;
  } catch (error) {
    console.error("Error storing session in Redis:", error);
    return false;
  }
};

/**
 * Loads the session data from Redis.
 * @param {string} id - The session ID.
 * @returns {Promise<Session | undefined>} Returns the Shopify session object or undefined if not found.
 */
const loadSession = async (id: string): Promise<Session | undefined> => {
  try {
    const sessionData = await redis.get(`session:${id}`);
    if (!sessionData) return undefined;

    const sessionObj = JSON.parse(sessionData);
    return new Session(sessionObj);
  } catch (error) {
    console.error("Error loading session from Redis:", error);
    return undefined;
  }
};

/**
 * Deletes the session data from Redis.
 * @param {string} id - The session ID.
 * @returns {Promise<boolean>} Returns true if the operation was successful.
 */
const deleteSession = async (id: string): Promise<boolean> => {
  try {
    await redis.del(`session:${id}`);
    return true;
  } catch (error) {
    console.error("Error deleting session from Redis:", error);
    return false;
  }
};

/**
 * Session handler object containing storeSession, loadSession, and deleteSession functions.
 */
const sessionHandler = { storeSession, loadSession, deleteSession };

export default sessionHandler;