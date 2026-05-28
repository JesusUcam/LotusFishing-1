# LotusFishing Project Context

## Goal
- Personal learning project.
- Initial scope: blog-style website.
- Planned phase 2: add ecommerce features such as users, orders, and purchases.

## Current State
- Repository now includes a first monorepo-style split:
  - `frontend/` for Nuxt + Vue + TypeScript
  - `backend/` for the TypeScript API
- Legacy files from the initial static landing still exist:
  - `Dockerfile`
  - `index.html`

## Hosting and Deployment
- The site is deployed in Docker.
- Containers are managed with Portainer.
- The database can be hosted on the same server.

## Technical Decisions So Far
- Database chosen: PostgreSQL.
- Frontend stack chosen: Vue + Nuxt + TypeScript.
- Project structure chosen: separate `frontend` and `backend` folders.
- MariaDB discarded because the user already knows it and wants to learn something new.
- The project should prioritize learning value over the fastest implementation path.

## Backend Direction
- The user is interested in learning .NET.
- The user considered TypeScript on the backend for stack consistency with the frontend.
- The frontend decision is already made: Vue + Nuxt + TypeScript. 
- Backend persistence should be designed around PostgreSQL from the start.
- Current backend direction: a dedicated TypeScript API with clean separation between controllers, services, and datasources.

## Data Guidance
- PostgreSQL should be the primary database for business data.
- Future ecommerce data such as users, orders, payments, addresses, and stock should live in PostgreSQL.
- In-memory stores such as Dragonfly are not the primary source of truth for orders or users.

## Infrastructure Guidance
- Credentials can be passed through environment variables for local learning setups.
- For more secure setups, Docker secrets should be considered later.
- Prefer Docker network-internal communication between app and database containers.
- Database administration will be done with DBeaver, connecting to the server over SSH.
- Prefer simple, unquoted PostgreSQL identifiers such as `lotus_fishing` instead of names with spaces.

## Open Decisions
- Choose backend stack evolution:
  - keep the dedicated TypeScript API
  - move some use cases into Nuxt server routes later only if it simplifies the app
  - revisit ASP.NET Core only if the learning goal for .NET becomes a stronger priority
- Define how the blog and ecommerce phases will coexist in the same app.
- Replace the legacy static Docker setup with frontend/backend containerization when the project bootstrapping is complete.

## Notes for Future Work
- Keep documentation concise and update this file when major decisions are made.
- Favor architectures that teach transferable concepts:
  - Docker and Portainer
  - relational modeling
  - authentication
  - migrations
  - API design
  - caching as a later concern
- First implemented vertical slice:
  - `users` datasource
  - `users` service
  - `users` controller
  - `GET /api/users` endpoint returning data from PostgreSQL
