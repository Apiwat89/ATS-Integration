# ATS-Integration

A Node.js application designed for integration with Applicant Tracking Systems (ATS). It periodically fetches job postings from external sources like JobsDB and JobThai, stores them locally, and makes them available through a dedicated API.

📌 **Features**

*   **Backend:** Built with Node.js & Express.js for robust performance.
*   **Data Aggregation:** Automatically fetches and consolidates job data from JobsDB and JobThai.
*   **Local Storage:** Uses SQLite for a simple, file-based local database (`data/jobs.db`).
*   **API Exposure:** Provides a local API to access the aggregated job data.
*   **SAP Integration:** Includes a dedicated set of API endpoints for SAP integration.
*   **Mock Data:** Supports using mock data for development and testing.

📄 License Internal use only.
