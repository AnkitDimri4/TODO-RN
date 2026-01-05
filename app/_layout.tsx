import { ConvexProvider, ConvexReactClient } from "convex/react";

import { ThemeProvider } from "@/hooks/useTheme";
import { Stack } from "expo-router";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

export default function RootLayout() {
  return (
    <ConvexProvider client={convex}>
      <ThemeProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Tabs" />
        </Stack>
      </ThemeProvider>
    </ConvexProvider>
  );
}

// import { ThemeProvider } from "@/hooks/useTheme";
// import { Stack } from "expo-router";
// export default function RootLayout() {
//   return (
//     // <Stack />;
//     <ThemeProvider>
//       <Stack
//       // screenOptions={{ headerShown: false}} // If we are using this
//       >
//         <Stack.Screen
//           name="Tabs"
//           // options={{title:"Home"}} // Then there is not no need to use of this.
//         />
//       </Stack>
//     </ThemeProvider>
//   );
// }
