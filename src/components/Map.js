import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
	// let points = [];
	// for (let i = 0; i < 20; i++) {
	// 	points.push({
	// 		latitude: 37.33233 + i * 0.001,
	// 		longitude: -122.03121 + i * 0.001
	// 	});
	// }
	const { state } = useContext(LocationContext);
	console.log(state);

	// if (!currentLocation) {
	// 	return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
	// }

	return (
		<MapView
			style={styles.map}
			initialRegion={{
				// ...currentLocation.coords,
				latitude: 37.33233,
				longitude: -122.03121,
				latitudeDelta: 0.01,
				longitudeDelta: 0.01
			}}
		>
			{/* <Polyline coordinates={points} /> */}
		</MapView>
	);
};

const styles = StyleSheet.create({
	map: {
		height: 300
	}
});

export default Map;
