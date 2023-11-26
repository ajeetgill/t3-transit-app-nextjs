# Things Learned

## NEXTjs API Routes w/ app folder

> ❓How to make a basic API in nextjs using `app/api/` folder structure?

- `ts/js` : Don't mind these being used interchangeably,
- `src/app/api/` : FOLDER in which the APIs reside,
- `route.js` : the only file server will serve for any http method
  - `src/app/api/route.ts` : if available, the default api route will be - `http://localhost:3000/api`
- `api/hello/route.ts`
  - this file needs to make **GET: `http://localhost:3000/api/hello`** work
