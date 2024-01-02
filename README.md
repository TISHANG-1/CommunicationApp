# Project Name Readme

## Getting Started

Follow these steps to set up and run the project locally on your machine.

### Prerequisites

Make sure you have the following installed on your system:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/project-name.git
    ```

2. Navigate to the project folder:

    ```bash
    cd project-name
    ```

3. Create a `config.env` file in the root directory and add your Postmark server API token:

    ```bash
    POSTMARK_API_TOKEN=your-api-token-here
    ```

4. Update the path to `config.env` in your project based on your local machine.

5. Install the server-side dependencies:

    ```bash
    npm install
    ```

6. Run the server:

    ```bash
    npm run dev
    ```

7. Navigate to the frontend folder:

    ```bash
    cd frontend
    ```

8. Install the frontend dependencies:

    ```bash
    npm install
    ```

9. Start the frontend development server:

    ```bash
    npm start
    ```

Now, the project should be running locally. Access it through your web browser at [http://localhost:3000](http://localhost:3000).

## User Login

Use an email with the same domain for login as the one with which the Postmark API token was generated.

Feel free to explore and modify the project as needed for your use case. If you encounter any issues or have questions, refer to the project documentation or reach out to the community for support.
