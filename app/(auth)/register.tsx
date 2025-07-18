import BackButton from '@/components/BackButton';
import Button from '@/components/Button';
import Input from '@/components/Input';
import ScreenWrapper from '@/components/ScreenWrapper';
import Typo from '@/components/Typo';
import { colors, spacingX, spacingY } from '@/constants/theme';
import { useAuth } from '@/contexts/authContext';
import { verticalScale } from '@/utils/styling';
import { useRouter } from 'expo-router';
import { At, Lock, User } from 'phosphor-react-native';
import { useRef, useState } from 'react';
import { Alert, Pressable, StyleSheet, View } from 'react-native';

const Register = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const nameRef = useRef('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { register: registerUser } = useAuth();

  const handleSubmit = async () => {
    if (
      !emailRef.current ||
      !passwordRef.current ||
      !nameRef.current ||
      !nameRef.current
    ) {
      Alert.alert('Login', 'Please fill all the fields');
      return;
    }
    setIsLoading(true);

    const res = await registerUser(
      emailRef.current,
      passwordRef.current,
      nameRef.current,
    );
    setIsLoading(false);
    console.log('res: ', res);
    if (!res.success) {
      Alert.alert('Error', res.msg || 'Something went wrong');
    }
  };
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton iconSize={28} />
        <View style={{ gap: 5, marginTop: spacingY._20 }}>
          <Typo size={30} fontWeight={'800'}>
            Let&apos;s
          </Typo>
          <Typo size={30} fontWeight={'800'}>
            Get started
          </Typo>
        </View>
        {/* Form Section */}
        <View style={styles.form}>
          <Typo size={16} color={colors.textLighter}>
            Create an account now to track all your expenses
          </Typo>
          {/* input */}
          <Input
            placeholder="Enter your name"
            onChangeText={(value) => (nameRef.current = value)}
            icon={
              <User
                size={verticalScale(26)}
                color={colors.neutral300}
                weight="fill"
              />
            }
          />
          <Input
            placeholder="Enter your email"
            onChangeText={(value) => (emailRef.current = value)}
            icon={
              <At
                size={verticalScale(26)}
                color={colors.neutral300}
                weight="fill"
              />
            }
          />
          <Input
            placeholder="Enter your password"
            secureTextEntry
            onChangeText={(value) => (passwordRef.current = value)}
            icon={
              <Lock
                size={verticalScale(26)}
                color={colors.neutral300}
                weight="fill"
              />
            }
          />

          <Typo size={14} color={colors.text} style={{ alignSelf: 'flex-end' }}>
            Forgot Password?
          </Typo>

          <Button loading={isLoading} onPress={handleSubmit}>
            <Typo color={colors.black} size={21} fontWeight={'700'}>
              Sign Up
            </Typo>
          </Button>
          {/** footer */}
          <View style={styles.footer}>
            <Typo size={15}>Already have an account?</Typo>
            <Pressable onPress={() => router.navigate('/(auth)/login')}>
              <Typo size={15} fontWeight={700} color={colors.primary}>
                Login
              </Typo>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Register;

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
