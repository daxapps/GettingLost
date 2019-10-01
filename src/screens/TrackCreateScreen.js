import '../_mockLocation';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
// import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
// import TrackForm from '../components/TrackForm';
// import { FontAwesome } from '@expo/vector-icons';

const TrackCreateScreen = ({ isFocused }) => {
	const { addLocation } = useContext(LocationContext);
	// const callback = useCallback(
	// 	(location) => {
	// 		addLocation(location, recording);
	// 	},
	// 	[ recording ]
	// );
	const [ err ] = useLocation(isFocused, addLocation);

	// const [ err, setErr ] = useState(null);

	// const startWatching = async () => {
	// 	try {
	// 		await requestPermissionsAsync();
	// 		await watchPositionAsync(
	// 			{
	// 				accuracy: Accuracy.BestForNavigation,
	// 				timeInterval: 1000,
	// 				distanceInterval: 10
	// 			},
	// 			(location) => {
	// 				addLocation(location);
	// 			}
	// 		);
	// 	} catch (e) {
	// 		setErr(e);
	// 	}
	// };

	// useEffect(() => {
	// 	startWatching();
	// }, []);

	return (
		<SafeAreaView forceInset={{ top: 'always' }}>
			<Text h2>Create a Track</Text>
			<Map />
			{err ? <Text>Please enable location services</Text> : null}
			{/* <TrackForm /> */}
		</SafeAreaView>
	);
};

// TrackCreateScreen.navigationOptions = {
// 	title: 'Add Track',
// 	tabBarIcon: <FontAwesome name="plus" size={20} />
// };

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
