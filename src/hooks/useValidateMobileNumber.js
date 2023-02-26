
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';


export default function useValidateMobileNumber() {
  const isValidEmail = phoneNumber => /^[0]?[789]\d{9}$/.test(phoneNumber);

  function handleMobileNumberValidation(phoneNumber) {

    const isValid = isValidEmail(phoneNumber);

    const validityChanged =
      (phoneNumber && isValid) || (!phoneNumber && !isValid);
    if (validityChanged) {
      //   console.log(' validity change  :', validityChanged);
      //   console.log('Fire tracker with', isValid ? 'Valid' : 'Invalid');
    }

    return isValid;
  }

  return {
    handleMobileNumberValidation,
  };
}

