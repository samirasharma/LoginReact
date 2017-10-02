// import libraries for making components
import React from 'react';
import { Text, View } from 'react-native';

//Make components
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};
const styles = {
  viewStyle: {
    backgroundColor: '#D1F2EB',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    paddingTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
  fontSize: 20
  }
};
//make components available to other parts
export { Header };
