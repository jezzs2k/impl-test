import React, {useCallback} from 'react';
import {
  Linking,
  StyleProp,
  Text,
  TouchableOpacity,
  TextStyle,
  StyleSheet,
} from 'react-native';
import {responsiveFontSetting} from '../../utils';

type LinkURLProptype = {
  url: string;
  styleUrl?: StyleProp<TextStyle>;
  title?: string;
};

export const LinkURL = ({
  url,
  styleUrl = {},
  title = 'Brower',
}: LinkURLProptype) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    }
  }, [url]);

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={[styles.textSmall, styles.textBold, styles.link, styleUrl]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textBold: {
    fontWeight: '700',
    fontSize: responsiveFontSetting(2.5),
  },
  link: {
    fontStyle: 'italic',
    textTransform: 'capitalize',
    fontSize: responsiveFontSetting(2),
    color: '#1068bf',
    textDecorationLine: 'underline',
  },
  textSmall: {
    fontSize: responsiveFontSetting(1.6),
    fontStyle: 'normal',
  },
});
