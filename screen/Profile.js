import { View, Text ,TouchableOpacity} from 'react-native'
import { Camera, CameraType } from 'expo-camera';
import React, { useEffect } from 'react'
import { useState } from 'react';
const Profile = () => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
 
  return (
    <View >
   
  </View>
  )
}

export default Profile