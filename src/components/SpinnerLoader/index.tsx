import React from 'react';
import {View, StyleSheet} from 'react-native';
import Svg, {Rect} from 'react-native-svg';
import ContentLoader from 'react-native-masked-loader';

const getMaskedElement = () => {
  return (
    <Svg height={'250px'} width="100%" fill={'black'}>
      <Rect x="0" y="0" rx="8" ry="8" width="50%" height="16" />
      <Rect x="0" y="30" rx="9" ry="9" width="100%" height="128" />
      <Rect x="0" y="172" rx="4" ry="4" width="100%" height="8" />
      <Rect x="0" y="188" rx="4" ry="4" width="100%" height="8" />
      <Rect x="0" y="204" rx="4" ry="4" width="100%" height="8" />
    </Svg>
  );
};

export const BOSLoader = () => {
  const MaskedElement = getMaskedElement();
  return (
    <View style={styles.container}>
      <ContentLoader MaskedElement={MaskedElement} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 285,
  },
});
