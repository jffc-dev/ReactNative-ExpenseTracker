import BackButton from '@/components/BackButton';
import ScreenWrapper from '@/components/ScreenWrapper';
import Typo from '@/components/Typo';
import { colors, spacingX, spacingY } from '@/constants/theme';
import { verticalScale } from '@/utils/styling';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const login = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton iconSize={28} />
        <View style={{ gap: 5, marginTop: spacingY._20 }}>
          <Typo size={30} fontWeight={'800'}>
            Hey,
          </Typo>
          <Typo size={30} fontWeight={'800'}>
            Welcome Back
          </Typo>
        </View>
        {/* Form Section */}
        <View style={styles.form}></View>
      </View>
    </ScreenWrapper>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacingY._30,
    paddingHorizontal: spacingX._20,
  },
  welcomeText: {
    fontSize: verticalScale(20),
    fontWeight: 'bold',
    color: colors.text,
  },
  form: {
    gap: spacingY._20,
  },
  forgotPassword: {
    textAlign: 'right',
    fontWeight: '500',
    color: colors.text,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  footerText: {
    textAlign: 'center',
    color: colors.text,
    fontSize: verticalScale(15),
  },
});
