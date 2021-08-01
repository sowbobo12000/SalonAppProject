import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
} from 'react-native';

import {useTheme} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

import ImagePicker from 'react-native-image-crop-picker';

const UploadCertificate = ({navigation}) => {
  const initURI = 'https://api.adorable.io/avatars/80/abott@adorable.png'
  const [image, setImage] = useState(initURI);
  const {colors} = useTheme();

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      setImage(image.path);
      this.bs.current.snapTo(1);
    });
  }

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      setImage(image.path);
      this.bs.current.snapTo(1);
    });
  }

  renderInner = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => this.bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  bs = React.createRef();
  fall = new Animated.Value(1);

  return (
    <View style={styles.container}>
       <SafeAreaView style={styles.wrapper}>
         <Text style={{marginTop: 80, fontSize: 18, fontWeight: 'bold'}}>
            Upload Your Certification
          </Text>
      
           <Text style={{marginTop: 10, fontSize: 18}}>
           If you do not have one, skip this step.
         </Text>
        
         
          </SafeAreaView>
      <BottomSheet
        ref={this.bs}
        snapPoints={[330, 0]}
        renderContent={this.renderInner}
        renderHeader={this.renderHeader}
        initialSnap={1}
        callbackNode={this.fall}
        enabledGestureInteraction={true}
      />
      <Animated.View style={{margin: 20,
        opacity: Animated.add(0.1, Animated.multiply(this.fall, 1.0)),
    }}>
        <View style={{alignItems: 'center',justifyContent: 'center',borderRadius:20,borderWidth: 0.5, height:400,
        borderColor: '#000'}}>
          <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageBackground
                source={{
                  uri: image,
                }}
                style={{height: 350, width: 300}}
                imageStyle={{borderRadius: 15}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                   {image === initURI ?
                     <Icon
                     name="camera"
                     size={35}
                     color="#808080"
                     style={{
                       opacity: 0.7,
                       alignItems: 'center',
                       justifyContent: 'center',
                       borderWidth: 1,
                       borderColor: '#fff',
                       borderRadius: 10,
                     }}
                    /> :
                    null } 
                
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          {image === initURI ? 
            <Text>Tabp to upload a photo</Text>
         :
         null

          }
         
       
        </View>
   
     
       
       
      </Animated.View>
      {image === initURI ? 
            <TouchableOpacity 
                style={styles.buttonMain}
                onPress={() => {
                    navigation.navigate('PhoneInput');
                }}>
                    <Text style={styles.buttonText}>Skip</Text>

              </TouchableOpacity> :
              <>

            <TouchableOpacity 
              style={styles.buttonRight}
              onPress={() => {
                  navigation.navigate('UploadCertificate');
              }}>
                  <Text style={styles.buttonText}>Continue</Text>

              </TouchableOpacity>
            

          <TouchableOpacity 
              style={styles.buttonLeft}
              onPress={() => {
                  setImage(initURI);
              }}>
                  <Text style={styles.buttonText}>Remove Photo</Text>

          </TouchableOpacity>
  
          </>
          }
    </View>
  );
};

export default UploadCertificate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonMain: {
    width: '100%', 
    height: 70, 
    backgroundColor: '#808080', 
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left:0
},
buttonRight: {
  width: '50%', 
  height: 70, 
  backgroundColor: '#E66950', 
  justifyContent: 'center', 
  alignItems: 'center',
  position: 'absolute',
  bottom: 0,
  right:0
}, 
buttonLeft: {
  width: '50%', 
  height: 70, 
  backgroundColor: '#808080', 
  justifyContent: 'center', 
  alignItems: 'center',
  position: 'absolute',
  bottom: 0,
  left:0
},
buttonText:{
  color: 'white',
  fontSize: 15,
  marginBottom: 30,
},
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
});