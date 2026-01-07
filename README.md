

---

# TODO-RN 📱

A **React Native Todo application** built using **Expo** for the frontend and **Convex** as the backend. This project demonstrates modern mobile app development with file-based routing, async storage, real-time data synchronization, and a clean, polished UI.

---

## 📱 Run the App Using Expo Go

You can preview and test the app **without installing an APK** by using **Expo Go**.

### Steps:

- 1. Install **Expo Go** from the Play Store / App Store
- 2. Open this link on your phone and scan the QR code from there:
   👉 **[https://sl1nk.com/Todo-RN](https://sl1nk.com/Todo-RN)**
   **OR** scan the QR code below using the Expo Go app  
  <img width="1312" height="795" alt="image" src="https://github.com/user-attachments/assets/4275738b-ea4f-41c0-bc45-01220f5fb0a8" />
- **3. The app will load instantly, you can interact with it and verify all features**

> This method is recommended for quick testing and sharing the app during development.

---
https://github.com/user-attachments/assets/3065c555-f74a-4c38-8546-bacc5c37c95a

---

##  Features

*  Create, edit, and delete todos
*  **ProgressStats**: Track total, completed, and active todos
*  **Preferences**:

  * Dark mode toggle
  * Notification settings
  * Auto-sync support
*  **Danger Zone**: Delete all todos in a single click
*  **LoadingSpinner** for async operations
*  **EmptyState** UI when no todos are available
* 🎨 Gradient-based UI using `expo-linear-gradient`

---


##  Tech Stack


* **Frontend:** React Native, Expo, TypeScript
* **Backend:** Convex
* **Styling:** Modular stylesheets + Linear Gradients
* **State & Storage:** Convex + Async patterns
* **Tooling:** Node.js, npm, Git, VS Code

---

## 📂 Project Structure (High Level)

```
TODO-RN/
│── app/                 # App screens (Expo Router)
│── components/          # Reusable UI components
│── assets/
│   └── styles/          # home.styles.ts, settings.styles.ts
│── convex/              # Backend schema & functions
│── hooks/               # Custom hooks (useTheme)
│── .env                 # Public environment variables
│── .env.local           # Convex deployment (ignored)
│── app.json             # Expo configuration
│── package.json         # Dependencies & scripts
│── README.md            # Documentation
```

---


##  Installation & Setup

### 1️ Create Expo App

```bash
npx create-expo-app@latest
```

### 2️ Install Dependencies

```bash
npm install
npm i @react-native-async-storage/async-storage
npm i convex
npx expo install expo-linear-gradient
```

---

## Backend Setup (Convex)

Start the Convex development server:

```bash
npx convex dev
```

This will initialize and run the backend locally.

---

## ▶ Run the Frontend

Start the Expo development server (with cache cleared):

```bash
npx expo start -c
```

You can run the app using:

* Expo Go (QR Code)
* Android Emulator
* iOS Simulator
* Development Build

---

##  How It Works

* The **frontend** is built using Expo’s file-based routing.
* **Convex** handles backend logic and data storage.
* **Async Storage** is used for local persistence.
* The app supports scalable structure and clean separation of concerns.

---

## Reset Project (Optional)

To start fresh:

```bash
npm run reset-project
```

This moves starter files to `app-example/` and creates a clean `app/` folder.

---

##  Environment Configuration (Important)

To avoid **WebSocket error (code 1006)** on Android, configure the Convex URL correctly.

### `.env` (tracked)

**Android Emulator:**

```env
EXPO_PUBLIC_CONVEX_URL=http://10.0.2.2:3210
```

**Real Android Device:**

```env
EXPO_PUBLIC_CONVEX_URL=http://<your-local-ip>:3210
```

### `.env.local` (auto-generated, ignored)

```env
CONVEX_DEPLOYMENT=anonymous:anonymous-Todo-RN
```

---

## UI & Architecture Highlights

* Modular styles using `home.styles.ts` and `settings.styles.ts`
* Reusable components:

  * Header
  * TodoInput
  * ProgressStats
  * Preferences
  * DangerZone
  * LoadingSpinner
  * EmptyState
* Centralized theme handling with `useTheme`

---

## Best Practices Followed

* Clean and scalable folder structure
* Environment variables properly managed
* `.gitignore` configured for safety
* Modular components and hooks
* Reusable, readable components
* Separate backend logic using Convex,  Separation of UI

---

## 📖 Learn More

* [Expo Documentation](https://docs.expo.dev/)
* [Expo Router](https://docs.expo.dev/router/introduction/)
* [Convex Documentation](https://docs.convex.dev/)
* [React Native Async Storage](https://react-native-async-storage.github.io/async-storage/)

---

## 👥 Community & Support

* Expo GitHub: [https://github.com/expo/expo](https://github.com/expo/expo)
* Expo Discord: [https://chat.expo.dev](https://chat.expo.dev)

---

## Final Note

This project is ideal for learning **modern React Native development**, backend integration with Convex, and real-world app structure using Expo.

---
