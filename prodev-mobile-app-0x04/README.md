# React Native Expo Router

### Expo Router

### React Components

### NativeWind Integration in React Native

- This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

- [Expo documentation](https://docs.expo.dev/).

### TypeScript doesn't natively support image imports, so you need a module declaration.

- Create a or global.d.ts in the root of your project and add:

```ts
declare module '*.png' {
  const value: any;
  export default value;
}
```

- [Expo vectors](https://icons.expo.fyi/Index)
