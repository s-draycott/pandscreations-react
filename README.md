# React + TypeScript + Vite

## Current Project Structure

pandscreations-react/  
│  
├─ **backend/** (backend server code (Node/Express + Typescript))  
│ ├─ **src/** (app runs from here)  
│ ├─ **tests/** (jest unit testing for backend functions)  
│ ├─ **node_modules/** (backend specific dependencies)  
│ ├─ **dist/** (compiled JS output from TS build)  
│ ├─ **.env** (backend environment variables e.g. DB URLs, API keys etc.)
│ ├─ **jest.config.js**  
│ ├─ **package.json** (backend dependencies and scripts)  
│ └─ **tsconfig.json** (backend TypeScript configuration)  
│  
├─ **frontend/**  
│ ├─ **src/**  
│ ├─ **public/** (static assets (images, favicon etc.))  
│ ├─ **.env** (frontend environment variables)  
│ ├─ **.env.local** (local environment variables overrides .env vars and not committed to git)  
│ ├─ **index.html** (this is the main HTML template for Vite/React)  
│ ├─ **package.json** (frontend dependencies and scripts)  
│ ├─ **package-lock.json**  
│ ├─ **tsconfig.app.json**  
│ ├─ **tsconfig.json**  
│ ├─ **tsconfig.node.json**  
│ └─ **vite.config.ts** (vite config for frontend bundling/dev server)  
│  
├─ **.node_modules/** (root-level node modules)  
├─ **.gitignore**  
├─ **.prettierrc.json** (prettier code formatting rules)  
├─ **eslint.config.js**  
└─ **README.md**

## Tech Stack

| Layer                | Technology                | Notes                                                                                                                                                                                                                            |
| -------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Frontend             | React + TypeScript + Vite | Handles the user interface of the store: product pages, cart, checkout flow, navigation, etc. React manages components and UI state. TypeScript adds type safety. Vite provides a fast development server and build tool.        |
| Backend              | Node/Express (Typescript) | Provides API endpoints for the frontend. Handles business logic such as creating orders, validating requests, communicating with Supabase and generating Stripe payment sessions                                                 |
| Testing              | Jest (backend)            | Used to run unit tests and integration tests on backend code. Tests ensure functions behave correctly, APIs return expected responses, and bugs are caught early before deployment.                                              |
| Database             | Supabase (free tier)      | Stores products, messages, gallery images, navigation menu                                                                                                                                                                       |
| Storage              | AWS S3 buckets            | Stores product images and other media files. Supabase database only stores the image URLs, while the actual files live in S3. This keeps the database lightweight and scalable.                                                  |
| Payments             | Stripe                    | Handles secure payment processing. Stripe manages credit card data, checkout flows, payment confirmation, refunds, and webhooks. Backend will create a Stripe checkout session and verify payment success.                       |
| CI/Automation        | GitHub Actions            | Keep-alive for free-tier Supabase to stop pausing                                                                                                                                                                                |
| Linting & Formatiing | ESLine + prettier         | Ensures consistent code style and catches potential bugs before runtime. ESLint analyzes the code for problems (unused variables, incorrect React hooks usage, etc.), while Prettier automatically formats code for consistency. |

## Running Locally

cd into frontend folder
npm run dev
