# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- Image upload support to the backend (`POST /api/trips/upload/cover`) using `UploadFile` and `StaticFiles`.
- Dynamic backend integration for trip creation, enabling cover image upload and form submission.
- Dynamic backend integration for the trip detail page, correctly fetching and displaying actual trip data (`GET /api/trips/{id}`).
- Dynamic backend integration for the edit trip page, supporting fetching the existing trip, editing, replacing the cover image, and saving via `PUT /api/trips/{id}`.
- Global `fetchApi` method dynamically handles both JSON and `FormData` for multipart uploads.

### Changed
- Refactored `TripsPage` (library view) to dynamically fetch from the backend instead of using mock data.
- Enhanced date formatting across the frontend to gracefully handle empty/null dates from the database.
- Upgraded the Delete function in the library dashboard to interact with `DELETE /api/trips/{id}`.

### Removed
- Hardcoded `MOCK_TRIPS` and `MOCK_TRIP` data from frontend views.
