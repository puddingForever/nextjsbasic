import type {Config} from 'drizzle-kit';


// export default defineConfig({
//   dialect: "sqlite",
//   driver: "d1-http",
//   schema : './drizzle/schemas.ts',
//   out: './.drizzle-out',
//   dbCredentials: {
//     accountId: process.env.CLOUDFLARE_ACCOUNT_ID ?? "",
//     databaseId: process.env.CLOUDFLARE_DATABASE_ID ?? "",
//     token: process.env.CLOUDFLARE_D1_TOKEN ?? "",
//   },
// });

const config: Config = {
 dialect: "sqlite",
  driver: "d1-http",
  schema : './drizzle/schemas.ts',
  out: './.drizzle-out',
  dbCredentials: {
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID ?? "",
    databaseId: process.env.CLOUDFLARE_DATABASE_ID ?? "",
    token: process.env.CLOUDFLARE_D1_TOKEN ?? "",
  },
  tablesFilter:["!_cf_KV"]
}

export default config ;