import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, FlatList } from 'react-native';
import { fontSizes, spacing } from '../../utils/size';
import { RoundedButton } from '../../components/RoundedButton';

const HistoryItem = ({ item, idx }) => {
  return <Text >{item.subject}</Text>;
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };
  return (
    <>
      <SafeAreaView style={{ flex: 0.5, alignItems: 'center' }}>
        
          <Text style={styles.title}> Things we have focused on </Text>
          {!!focusHistory.length && (
            <>
            <FlatList
              style={{ flex: 1 }}
              conttentContainerStyle={{ flex: 1, alignItems: 'center' }}
              data={focusHistory}
              renderItem={HistoryItem}
            />
        <View style={styles.clearContainer}>
        <RoundedButton size={75} title={'clear'} onPress={()=> onClear()}/>
      </View>
      </>
      )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  historyItem: (status) => ({
    color: status > 1 ? 'red' : 'green',
    fontSize: fontSizes.md,
  }),
  title: {
    color: 'white',
    fontSize: fontSizes.md,
  },
  clearContainer:{
    alignItems:'center',
    padding:spacing.md
  }
});
