import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
// import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
// import AuthForm from '../components/AuthForm';
// import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {
	const { state, signup } = useContext(AuthContext);
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	return (
		<View style={styles.container}>
			<Spacer>{/* <Text h3>{headerText}</Text> */}</Spacer>
			<Input label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" autoCorrect={false} />
			<Spacer />
			<Input
				secureTextEntry
				label="Password"
				value={password}
				onChangeText={setPassword}
				autoCapitalize="none"
				autoCorrect={false}
			/>
			{state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
			<Spacer>
				<Button title="Sign Up" onPress={() => signup({ email, password })} />
				{/* <Button title={submitButtonText} onPress={() => onSubmit({ email, password })} /> */}
			</Spacer>
			{/* <Button title="Go to main flow" onPress={() => navigation.navigate('mainFlow')} /> */}
			{/* <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />
      <NavLink
        routeName="Signin"
        text="Already have an account? Sign in instead!"
      /> */}
		</View>
	);
};

SignupScreen.navigationOptions = () => {
	return {
		header: null
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginBottom: 250
	},
	errorMessage: {
		fontSize: 16,
		color: 'red',
		marginLeft: 15,
		marginTop: 15
	}
});

export default SignupScreen;
