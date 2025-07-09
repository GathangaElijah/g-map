# 🌍 React Location Map App

This is a simple React application that displays a map with your current location using Leaflet and the browser's built-in Geolocation API. No API keys or payments required.

---

## 🚀 Features

- Displays a map centered on your real-time location.
- Shows a marker at your current position.
- Automatically updates the map view once location is fetched.
- 100% free using OpenStreetMap tiles (no Google Maps API needed).

---

## 📦 Prerequisites

Make sure you have the following installed:

- [Node.js and npm](https://nodejs.org/) (v16 or newer recommended)
- A terminal like VS Code, or Linux/macOS Terminal

---

## ⚙️ Setup Instructions

1. **Clone this repository**
   ```bash
   git clone https://github.com/GathangaElijah/g-map.git
   cd gmap-frontend

2. **Install the dependencies**
    ```bash
    npm install

3. **Start the development server**
    ```bash
    npm run dev # If you are using Vite

    OR
    
    npm start # If using Create React App
4. **Allow Location Access**
    - Your browser will ask for permission to access your location.

    - Click Allow.

    - The map will center on your location with a marker.

---

## File Structure
    ```
    src/
    ├── App.jsx         # Root component
    ├── Map.js          # Map and location logic
    └── main.jsx        # Entry point


## ❓ Troubleshooting

Location not working?

    Make sure you're running on localhost or https:// (not file://)

    Allow location access in your browser

    Try reloading the page

VS Code warning about schemas?

    Safe to ignore (won’t affect the app)