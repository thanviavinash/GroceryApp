import * as React from 'react';
import { } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashPhoneNumber from './Src/Controllers/Splash-PhoneNumber';
import SplashPreregistered from './Src/Controllers/Splash-Preregistered';
import SplashPhoneOtp from './Src/Controllers/SplashPhoneOtp';
import NewRegistration from './Src/Controllers/NewRegistration';
import OrderCategory from './Src/Controllers/OrderCategory';
import Home from '../GroceryApp/Src/Controllers/Home';
import Product from '../GroceryApp/Src/Controllers/Product';
import Profile from '../GroceryApp/Src/Controllers/Profile';
import EditProfile from '../GroceryApp/Src/Controllers/EditProfile';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        {/* <Stack.Screen 
      name="SplashPhoneNumber"
       component={SplashPhoneNumber} 
       options={{ headerShown:false}}
       /> */}
        {/* <Stack.Screen name="SplashPreregistered"
       component={SplashPreregistered}
       options={{ headerShown:false}}
         /> */}
        {/* <Stack.Screen name="SplashPhoneOtp"
       component={SplashPhoneOtp}
       options={{ headerShown:false}}
      //    /> */}
        {/* <Stack.Screen name="New Registration"
       component={NewRegistration}
       options={{ headerShown:false}}
         /> */}

        {/* <Stack.Screen name="Order"
       component={OrderCategory}
       options={{headerShadowVisible:false}}
         /> */}

        {/* <Stack.Screen name="Home"
       component={Home}
       options={{headerShown:false}}
         /> */}
        {/* <Stack.Screen name="Product"
        component={Product}
        options={{headerShown:true}}
        />
         */}
        <Stack.Screen name="EditProfile"
          component={EditProfile}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;





      //  options={{headerTransparent: true, 
      //   headerTitle=" ",
      //   headerStyle: { borderBottomWidth: 0, }}}