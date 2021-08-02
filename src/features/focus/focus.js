import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import {colors} from '../../utils/colors';
import {fontSizes, spacing} from '../../utils/size';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What Would you like to focus on</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={{ flex: 1, marginRight: spacing.md }}
          onSubmitEditing={({ nativeEvent: { text } }) => setSubject(text) }
        />
        <RoundedButton
          title="+"
          size={50}
          onPress={()=>addSubject(subject)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    padding: spacing.md,
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fontSizes.md,
  },
  inputContainer: {
    paddingTop: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
