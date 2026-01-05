

---

# TODO-RN 📱

A **React Native Todo application** built using **Expo** for the frontend and **Convex** as the backend. This project demonstrates modern mobile app development with file-based routing, async storage, and real-time backend integration.

---

##  Tech Stack

* **Frontend:** React Native, Expo, TypeScript
* **Backend:** Convex
* **State & Storage:** Async Storage
* **Tooling:** Node.js, npm, Git, VS Code

---

##  Project Structure (High Level)

```
TODO-RN/
│── app/                # App screens (file-based routing)
│── assets/             # Images and static assets
│── convex/             # Convex backend (schema, functions)
│── hooks/              # Custom React hooks
│── node_modules/       # Dependencies (ignored in Git)
│── .env.local          # Environment variables (ignored)
│── app.json            # Expo configuration
│── package.json        # Project dependencies & scripts
│── tsconfig.json       # TypeScript configuration
│── README.md           # Project documentation
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

## Best Practices Followed

* Clean folder structure
* `.gitignore` to avoid unnecessary files
* Modular components and hooks
* Separate backend logic using Convex

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

