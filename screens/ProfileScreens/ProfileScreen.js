import React, {
  useState, Component, useEffect, useCallback,
} from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { MaterialIcons, FontAwesome, Entypo } from '@expo/vector-icons'
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  ActivityIndicator,
  Dimensions,
  ImageBackground,
} from 'react-native'
import * as firebase from 'firebase'
import ModalDropdown from 'react-native-modal-dropdown'
import CustomHeaderButton from '../../components/CustomHeaderButton'
import Colors from '../../constants/Colors'
import SignOut from '../SignOut'
import Login from '../LoginScreen'

const ProfileScreen = (props) => {
  let TouchableCmp = TouchableOpacity

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback
  }
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [title, setTitle] = useState('')
  const [number, setNumber] = useState('')
  const [status, setStatus] = useState('')
  const [avatar, setAvatar] = useState('')
  const [loading, setLoading] = useState(true)

  const [buttonColor, setButtonColor] = useState(Colors.active)

  const uid = firebase.auth().currentUser.uid
  const db = firebase.database()

  const userRef = db.ref(`users/${uid}/profile`)

  useEffect(() => {
    setLoading(true)
    const onValueChange = userRef.on(
      'value',
      (snapshot) => {
        // console.log(snapshot.val())
        const {
          name, email, avatar, title, number, status
        } = snapshot.val()
        setName(name)
        setEmail(email)
        setAvatar(avatar)
        setTitle(title)
        setNumber(number)
        setStatus(status)

        //set button color
        status === 'Active' ? setButtonColor(Colors.active) : setButtonColor(Colors.busy);
      },
      (err) => {
        console.log(`Encountered error: ${err}`)
        setLoading(false)
      },
    );

    //clean up listener
    return () => userRef.off('value', onValueChange);
  }, [])

  const handleSignOut = () => {
    setLoading(false)
    new SignOut().signOut(props)
  }

  //Navigates to Certification (CME) screen
  const handleCerts = () => {
    props.navigation.navigate('CME')
  }

  const menuArray = ['Active', 'Busy']

  const onSelectStatus = (value) => {
    if (value === 'Active') {
      setButtonColor(Colors.active)
      setStatus('Active')
      userRef.update({
        status: 'Active'
      })
    }
    else if (value === 'Busy') {
      setButtonColor(Colors.busy)
      setStatus('Busy')
      userRef.update({
        status: 'Busy'
      })
    }
  }

  if (loading) {
    <ActivityIndicator size={'large'} />
  }

  const image = !avatar
    ? require('../../components/img/default-profile-pic.jpg')
    : { uri: avatar }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ImageBackground
          source={require('../../components/img/colors3.jpeg')}
          style={styles.background}
        >
          <View style={styles.responsiveBox}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{ alignSelf: 'center' }}>
                <View style={styles.profileImage}>
                  <Image source={image} style={styles.avatar} resizeMode={'cover'} />
                </View>
                <TouchableCmp>
                  <View style={styles.active} backgroundColor={buttonColor} />
                </TouchableCmp>
              </View>
              <View style={styles.infoContainer}>
                <Text style={[styles.text, { fontWeight: "200", fontSize: 20/*, fontWeight: "bold"*/ }]}>{name}</Text>
                <Text style={[styles.text, { fontSize: 16 }]}>{title}</Text>
              </View>
              <View style={styles.statusContainer}>
                <View style={styles.status}>
                  <ModalDropdown
                    options={menuArray}
                    dropdownStyle={{ height: 40 * menuArray.length, alignItems: 'center' }}
                    dropdownTextStyle={{ fontSize: 0.04 * screenWidth, color: 'black' }}
                    textStyle={{ fontSize: 0.04 * screenWidth, color: 'black', alignSelf: 'center' }}
                    defaultValue={''}
                    onSelect={(index, value) => { onSelectStatus(value) }}
                  >
                    <View style={{ alignItems: 'center' }}>
                      <FontAwesome name={'smile-o'} size={20} color={'black'} />
                      <Text style={{ fontSize: 0.04 * screenWidth }}>Active Status</Text>
                    </View>
                  </ModalDropdown>
                </View>
                <View style={styles.status}>
                  <TouchableOpacity
                    style={{ alignItems: 'center' }}
                    onPress={() => props.navigation.navigate({
                      routeName: 'Edit',
                      params:    {
                        userID: uid, name, title, number, avatar,
                      },
                    })}
                  >
                    <MaterialIcons name={'edit'} size={20} />
                    <Text style={{ fontSize: 0.04 * screenWidth }}>Edit Profile</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.status}>
                  <TouchableOpacity
                    style={{ alignItems: 'center' }}
                    onPress={() => props.navigation.navigate({ routeName: 'Calendar' })}
                  >
                    <FontAwesome name={'calendar'} size={20} color={'black'} />
                    <Text style={{ fontSize: 0.04 * screenWidth }}>Calendar</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={[styles.detailContainer]}>
                <View style={styles.iconBox}>
                  <MaterialIcons name={'email'} size={20} />
                </View>
                <View style={styles.detailBox}>
                  <Text style={styles.text}>Email Address: </Text>
                  <Text style={[styles.text, styles.subText]}>{email}</Text>
                </View>
              </View>
              <View style={[styles.detailContainer]}>
                <View style={styles.iconBox}>
                  <MaterialIcons name={'local-phone'} size={20} />
                </View>
                <View style={styles.detailBox}>
                  <Text style={styles.text}>Phone Number: </Text>
                  <Text style={[styles.text, styles.subText]}>{number}</Text>
                </View>
              </View>
              
              <View style={[styles.detailContainer]}>
                <View style={styles.iconBox}>
                  <Entypo name={'medal'} size={20} color={'black'} />
                </View>

                <View style={styles.detailBox}>
                  <Text style={styles.text}>MyDocs:</Text>
                  <Text
                    style={[styles.text, styles.subText]}
                    onPress={handleCerts}
                  >
                    {' '}
                    Show All
                    {' '}
                    {'>'}
                    {' '}

                  </Text>
                </View>

              </View>
              <View style={styles.buttonStyle}>
                <TouchableOpacity onPress={handleSignOut}>
                  <Text style={styles.button}>LOGOUT</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </View>
  )
}

export default ProfileScreen

const screenHeight = Math.round(Dimensions.get('window').height)
let screenWidth = Math.round(Dimensions.get('window').width)

const styles = StyleSheet.create({
  container: {
    flex:            1,
    backgroundColor: 'white',
    borderRadius:    20,
  },
  background: {
    width:  screenWidth,
    height: screenHeight,

  },
  responsiveBox: {
    width:  screenWidth,
    height: screenHeight,
  },
  text: {
    fontFamily: 'open-sans',
    color:      'black',
    fontSize:   0.043 * screenWidth,
  },
  avatar: {
    width:        screenWidth * 0.30,
    height:       screenHeight * 0.20,
    aspectRatio: 1,
    overflow: 'hidden',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'white',
  },
  profileImage: {
    marginTop:    '4%',
  },
  active: {
    position:     'absolute',
    bottom:       20,
    left:         5,
    padding:      4,
    height:       25,
    width:        25,
    borderRadius: 15,
  },
  infoContainer: {
    alignSelf:    'center',
    alignItems:   'center',
    marginTop:    '2%',
    marginBottom: '3%',
  },
  detailContainer: {
    flexDirection:    'row',
    alignItems:       'center',
    height:           screenHeight * 0.101,
    alignSelf:        'center',
    marginTop:        '4%',
    marginHorizontal: 25,
    backgroundColor:  'whitesmoke',
    shadowColor:      'gray',
    shadowOffset:     {
      width:  0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius:  6.27,
    elevation:     10,
    borderRadius:  12,
    opacity:       0.8,
  },

  status: {
    flex:       1,
    alignItems: 'center',
  },
  statusContainer: {
    flexDirection: 'row',
    alignSelf:     'center',
    marginBottom:  '1%',
    width:         '85%',
  },
  iconBox: {
    flex:       0.3,
    alignItems: 'flex-end',
  },
  detailBox: {
    flex:            1,
    alignItems:      'center',
    borderColor:     'silver',
    borderLeftWidth: 1,
    marginLeft:      40,
  },
  subText: {
    fontSize:      0.038 * screenWidth,
    color:         'black',
    opacity:       0.5,
    textTransform: 'uppercase',
    fontWeight:    '500',
    marginTop:     5,
  },
  buttonStyle: {
    marginTop:    screenHeight * 0.02,
    alignContent: 'center',
    alignSelf:    'center',
  },
  button: {
    backgroundColor: Colors.primaryColor,
    borderColor:     Colors.primaryColor,
    borderWidth:     1,
    borderRadius:    20,
    color:           'white',
    fontSize:        0.038 * screenWidth,
    fontWeight:      'bold',
    overflow:        'hidden',
    padding:         15,
    textAlign:       'center',
  },
})

ProfileScreen.navigationOptions = (navigationdata) => ({
  headerTitle: 'Profile',
  headerLeft:  () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title={'Menu'}
        iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
        onPress={() => {
          navigationdata.navigation.toggleDrawer()
        }}
      />
    </HeaderButtons>
  ),
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title={'Home'}
        iconName={Platform.OS === 'android' ? 'md-home' : 'ios-home'}
        onPress={() => {
          navigationdata.navigation.navigate('Categories')
        }}
      />
    </HeaderButtons>
  ),
})