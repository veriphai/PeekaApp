import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function DateComponent({
  date,
  onChangeDate,
  setIsVisible,
  isVisible,
}) {

  return (
    <>
      {isVisible && (
        <DateTimePicker
          mode={'date'}
          value={date || new Date()}
          is24hourSource="locale"
          locale="fr"
          onChange={(event, date) => {
            setIsVisible(false);
            onChangeDate(date)
          }}
        />
      )}
    </>

  );
}

const styles = StyleSheet.create({});
