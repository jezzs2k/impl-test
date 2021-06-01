import {Dimensions, PixelRatio} from 'react-native';

export const generateText = (length: number) => {
  const result = [];
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result.push(
      characters.charAt(Math.floor(Math.random() * charactersLength)),
    );
  }
  return result.join('');
};

const {height, width} = Dimensions.get('window');

export const widthPercentageToDP = (widthPercent: number) => {
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.getFontScale() >= 1
    ? PixelRatio.roundToNearestPixel((width * elemWidth) / 100)
    : Math.round(
        ((width * elemWidth) / 100) * Math.round(PixelRatio.getFontScale()),
      );
};
export const heightPercentageToDP = (heightPercent: number) => {
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);
  return PixelRatio.getFontScale() >= 1
    ? PixelRatio.roundToNearestPixel((height * elemHeight) / 100)
    : Math.round(
        ((height * elemHeight) / 100) * Math.round(PixelRatio.getFontScale()),
      );
};

export const responsiveFontWidth = (widthPercent: number) => {
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return (
    PixelRatio.roundToNearestPixel((width * elemWidth) / 100) /
    PixelRatio.getFontScale()
  );
};

export const responsiveFontSetting = (heightPercent: number) => {
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);
  return (
    PixelRatio.roundToNearestPixel((height * elemHeight) / 100) /
    PixelRatio.getFontScale()
  );
};

export function resetFontSizeInput(size: number) {
  return size ? Number(size) / PixelRatio.getFontScale() : undefined;
}
