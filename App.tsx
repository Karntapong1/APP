import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// นำเข้าหน้าจอทั้งหมด (ตรวจสอบให้แน่ใจว่าชื่อไฟล์ในโฟลเดอร์ screens ตรงตามนี้)
import HomeScreen from './screens/HomeScreen';
import ContentScreen from './screens/ContentScreen'; 
import InnovationsScreen from './screens/InnovationsScreen';
import CaseStudiesScreen from './screens/CaseStudiesScreen';
import DashboardScreen from './screens/DashboardScreen';
import FutureScreen from './screens/FutureScreen';
import TrackingScreen from './screens/TrackingScreen';
// นำเข้าหน้าอ้างอิงที่เพิ่งสร้างใหม่
import ReferenceScreen from './screens/ReferenceScreen'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{
            // ดีไซน์แถบหัวข้อให้เป็นสีน้ำเงินเข้มตามธีมหลัก
            headerStyle: { backgroundColor: '#0f172a' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            headerTitleAlign: 'center',
          }}
        >
          {/* หน้าแรก: CV & AI Inspection */}
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ title: 'CV & AI Inspection' }} 
          />

          {/* หน้าเนื้อหาหลัก: กราฟและแบบทดสอบ */}
          <Stack.Screen 
            name="Topic" 
            component={ContentScreen} 
            options={{ title: 'เนื้อหาหลัก: Computer Vision' }} 
          />

          <Stack.Screen 
            name="Innovations" 
            component={InnovationsScreen} 
            options={{ title: 'นวัตกรรม AI' }} 
          />

          <Stack.Screen 
            name="CaseStudies" 
            component={CaseStudiesScreen} 
            options={{ title: 'กรณีศึกษา' }} 
          />

          {/* หน้าสรุปผล: ดึงข้อมูลจาก OneDrive Excel */}
          <Stack.Screen 
            name="Dashboard" 
            component={DashboardScreen} 
            options={{ title: 'สรุปผล AI (Dashboard)' }} 
          />

          {/* หน้าข้อเสนอแนะ: Metaverse & Gen AI */}
          <Stack.Screen 
            name="Future" 
            component={FutureScreen} 
            options={{ title: 'ข้อเสนอแนะและอนาคต' }} 
          />

          {/* หน้าระบบติดตาม: ตารางติดตาม & Google Maps */}
          <Stack.Screen 
            name="Tracking" 
            component={TrackingScreen} 
            options={{ title: 'ระบบติดตาม (Tracking)' }} 
          />

          {/* หน้าอ้างอิง: ข้อมูลผู้จัดทำและแหล่งที่มา */}
          <Stack.Screen 
            name="Reference" 
            component={ReferenceScreen} 
            options={{ title: 'ข้อมูลอ้างอิง (Reference)' }} 
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}