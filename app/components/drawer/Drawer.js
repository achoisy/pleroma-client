import React from 'react';
import { View, Dimensions, Image } from 'react-native';
import {
  Drawer,
  DrawerItem,
  DrawerHeader,
  DrawerSection,
  BodyText,
  Avatar,
} from 'material-bread';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Style from './DrawerStyle';
import ApplicationStyles from '../../theme/ApplicationStyles';

const DrawerContent = ({ navigation, activeDrawerItem }) => {
  return (
    <View style={ApplicationStyles.header}>
      <DrawerHeader
        title={'Le Coq Social'}
        subtitle={'Knows nothing1'}
        avatar={
          <Avatar
            type="image"
            image={
              <Image
                source={{
                  uri:
                    'https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/john-snow-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg',
                }}
              />
            }
            size={60}
          />
        }
      />
      <View style={Style.statistics}>
        <BodyText type={2}>28 telex, 5 favoris, 5 suivis</BodyText>
      </View>
      <DrawerSection bottomDivider>
        <DrawerItem
          text={'Actualités'}
          icon={'home'}
          onPress={() => navigation('MainScreen')}
          active={activeDrawerItem === 1}
        />
        <DrawerItem
          text={'Favoris'}
          icon={'star'}
          onPress={() => navigation('FavorisScreen')}
          active={activeDrawerItem === 2}
        />
        <DrawerItem
          text={'Suivis'}
          icon={'account-group'}
          iconComponent={MaterialCommunityIcons}
          onPress={() => navigation('SuivisScreen')}
          active={activeDrawerItem === 3}
        />
        <DrawerItem
          text={'Recherche'}
          icon={'search'}
          onPress={() => navigation('RechercheScreen')}
          active={activeDrawerItem === 4}
        />
        <DrawerItem
          text={'Lecteur QRCode'}
          icon={'qrcode-scan'}
          iconComponent={MaterialCommunityIcons}
          onPress={() => navigation('QrScanScreen')}
          active={activeDrawerItem === 5}
        />
      </DrawerSection>
      <DrawerSection bottomDivider>
        <DrawerItem
          text={'Paramètres et confidentialité'}
          onPress={() => navigation('ParametresScreen')}
          active={activeDrawerItem === 6}
        />
        <DrawerItem
          text={'Centre d’assistance'}
          onPress={() => navigation('AideScreen')}
          active={activeDrawerItem === 7}
        />
      </DrawerSection>
    </View>
  );
};

export default function DrawerPage({
  drawerIsOpen,
  children,
  drawerToggle,
  navToScreen,
  activeDrawerItem,
}) {
  const screenWidth = Dimensions.get('window').width;
  const drawerWidth = screenWidth <= 450 ? screenWidth - 56 : 350;
  return (
    <Drawer
      open={drawerIsOpen}
      drawerContent={
        <DrawerContent
          navigation={navToScreen}
          activeDrawerItem={activeDrawerItem}
        />
      }
      onClose={() => drawerToggle()}
      animationTime={250}
      width={drawerWidth}>
      {children}
    </Drawer>
  );
}
