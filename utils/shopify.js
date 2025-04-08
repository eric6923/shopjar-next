import {
  DeliveryMethod,
  LATEST_API_VERSION,
  LogSeverity,
  WebhookHandler,
} from "@shopify/shopify-api";
import "@shopify/shopify-api/adapters/node";
import { shopifyApp } from "@shopify/shopify-app-express";

import { ApiVersion } from "@shopify/shopify-api";
// import ordersCreateHandler from "./webhooks/orders_create";
import { RedisSessionStorage } from "@shopify/shopify-app-session-storage-redis";

const isDev = process.env.NODE_ENV === "development";

const apiVersion = process.env.SHOPIFY_API_VERSION;

if (!apiVersion || !Object.values(ApiVersion).includes(apiVersion)) {
  throw new Error(`Invalid SHOPIFY_API_VERSION: ${apiVersion}`);
}

const {
  SHOPIFY_API_KEY,
  SHOPIFY_API_SECRET,
  SHOPIFY_API_SCOPES,
  SHOPIFY_APP_URL,
  REDIS_URL,
} = process.env;

if (
  !SHOPIFY_API_KEY ||
  !SHOPIFY_API_SECRET ||
  !SHOPIFY_API_SCOPES ||
  !SHOPIFY_APP_URL
) {
  throw new Error("Environment variables not set");
}

export const AUTH_PATH = "/api/auth";
export const AUTH_CALLBACK_PATH = "/api/auth/callback";
export const WEBHOOKS_PATH = "/api/webhooks";

export let shopify = shopifyApp({
  api: {
    apiKey: SHOPIFY_API_KEY,
    apiSecretKey: SHOPIFY_API_SECRET,
    scopes: SHOPIFY_API_SCOPES.split(","),
    hostName: SHOPIFY_APP_URL.replace(/https:\/\//, ""),
    hostScheme: "https",
    apiVersion: LATEST_API_VERSION,
    isEmbeddedApp: true,
    logger: {
      level: isDev ? LogSeverity.Info : LogSeverity.Error,
    },
    future: {
      customerAddressDefaultFix: true,
      lineItemBilling: true,
      unstable_managedPricingSupport: true,
    },
  },
  sessionStorage: new RedisSessionStorage(String(REDIS_URL)),
  auth: {
    path: AUTH_PATH,
    callbackPath: AUTH_CALLBACK_PATH,
  },
  webhooks: {
    path: WEBHOOKS_PATH,
  },
  useOnlineTokens: true,
  exitIframePath: "/exitframe",
});

export default shopify.api;
export { shopify as shopifyEx };
