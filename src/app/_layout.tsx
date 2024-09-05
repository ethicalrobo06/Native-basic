import { Stack, Tabs } from 'expo-router'

const RootLayout = () => {
  return (
    //    <Stack>
    //     <Stack.Screen
    //       name="Index"
    //       options={{
    //         headerTitle: 'Home Page',
    //         headerStyle: {
    //           backgroundColor: 'crimson',
    //         },
    //       }}
    //     />
    //     <Stack.Screen
    //       name="About"
    //       options={{
    //         headerTitle: 'About',
    //         headerStyle: {
    //           backgroundColor: 'teal',
    //         },
    //       }}
    //     />
    //     <Stack.Screen
    //       name="users/[id]"
    //       options={{
    //         headerTitle: 'User Page',
    //       }}
    //     />
    //   </Stack>
    <Tabs>
      <Tabs.Screen name="Index" />
      <Tabs.Screen name="About" />
      <Tabs.Screen name="users/[id]" />
    </Tabs>
  )
}

export default RootLayout
