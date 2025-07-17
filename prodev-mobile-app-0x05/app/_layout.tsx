import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right', 
        animationTypeForReplace: 'push',
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="(home)" />
      <Stack.Screen name="join" />
      <Stack.Screen name="signin" />
    </Stack>
  );
}
