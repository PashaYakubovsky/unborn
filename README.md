# Multi-platform Bot with Full-stack Application

This project is a full-stack Bun.js application featuring:

-   Multi-platform bot support (Telegram, Discord, Slack)
-   Backend API built with Elysia.js
-   Frontend React application with TypeScript
-   Supabase integration for database and authentication

## Architecture

-   `/api/*` - REST API endpoints
-   `/ui/*` - Frontend React application
-   `/swagger` - Documantation
-   Each bot working in separate thread via web socket
<img width="835" alt="Screenshot 2024-12-14 at 18 45 04" src="https://github.com/user-attachments/assets/89e5d451-c899-4da6-ada2-064af46c4c7c" />


## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/PashaYakubovsky/unborn
    cd unborn
    ```

2. Install dependencies:

    ```sh
    bun install
    ```

    You must have bun installed:
    For more information, refer to the [Bun documentation](https://bun.sh/docs).

3. Set up environment variables:

    ```sh
    # Bot Tokens
    export TELEGRAM_BOT_TOKEN=your-telegram-bot-token
    export DISCORD_BOT_TOKEN=your-discord-bot-token
    export SLACK_BOT_ID=your-slack-app-id
    export SLACK_APP_TOKEN=your-slack-app-token
    export SLACK_BOT_OAUTH_TOKEN=your-slack-ouath
    export SLACK_SIGNING_SECRET=your-slack-signing-secret
    export DISCORD_APP_ID=your-discord-app-id

    # API Keys
    export ANTHROPIC_API_KEY=your-anthropic-api-key
    export OPENAI_API_KEY=your-openai-api-key
    export STABLE_DIFFUSION_API_KEY=your-api-key

    # Database
    export SUPABASE_URL=your-supabase-url
    export SUPABASE_SERVICE_ROLE=your-supabase-service-role-token

    # Other Configuration
    export REDDIT_API_URL=reddit-api-url
    export PORT=your-port-default-3000
    export SECRET_PATH=your-secret-path-or-empty
    export GCS_BUCKET_NAME=your-google-claude-storage-name
    export GCS_KEY_FILE=json-gcs-file
    ```

## Development

Start the backend and bots in development mode with inspector:

```sh
# backend app & bots
npm run dev
# frontend
vite build --watch
```

Start the backend and bots in production mode:

```sh
npm run start
```

Build the frontend:

```sh
npm run build:client
```

The application will be available at:

-   Backend API: `http://localhost:3000/api`
-   Frontend: `http://localhost:3000/ui`
-   Bot's working via web sockets throw 3000 port

## Production Build

Build the frontend:

```sh
npm run build
```

## Contributing

Feel free to submit issues and pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License.

## Running Tests

To run tests, use the following command:

```sh
npm test
```

## Docker

Build the Docker image:

```sh
npm run docker:build
```

## Tech Stack

-   **Backend:**

    -   Bun.js
    -   Elysia.js
    -   TypeScript
    -   Supabase

-   **Frontend:**

    -   React
    -   TypeScript
    -   Vite
    -   TailwindCSS

-   **Bot Platforms:**

    -   Telegram
    -   Discord
    -   Slack

-   **AI Integration:**
    -   OpenAI
    -   Anthropic
    -   Stable Diffusion
