import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Searchbar, Card, Title, Paragraph, IconButton } from 'react-native-paper';

const activities = [
    { id: 1, name: 'Activity 1', startTime: '10:00 AM', endTime: '12:00 PM' },
    { id: 2, name: 'Activity 2', startTime: '1:00 PM', endTime: '3:00 PM' },
    { id: 3, name: 'Activity 3', startTime: '3:00 PM', endTime: '5:00 PM' },
    { id: 4, name: 'Activity 4', startTime: '7:00 PM', endTime: '9:00 PM' },
    { id: 5, name: 'Activity 5', startTime: '10:00 AM', endTime: '12:00 PM' },
    { id: 6, name: 'Activity 6', startTime: '1:00 PM', endTime: '3:00 PM' },
    { id: 7, name: 'Activity 7', startTime: '3:00 PM', endTime: '5:00 PM' },
    { id: 8, name: 'Activity 8', startTime: '7:00 PM', endTime: '9:00 PM' },
];

export default function Home({ navigation }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [favorites, setFavorites] = useState([]);
    const onChangeSearch = query => setSearchQuery(query);
    const filteredActivities = activities.filter(
        activity =>
            activity.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            activity.startTime.toLowerCase().includes(searchQuery.toLowerCase()) ||
            activity.endTime.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const toggleFavorite = activity => {
        if (favorites.includes(activity.id)) {
            setFavorites(favorites.filter(id => id !== activity.id));
        } else {
            setFavorites([...favorites, activity.id]);
        }
    };

    const isFavorite = activity => favorites.includes(activity.id);

    return (
        <View>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={styles.searchBar}
            />
            <ScrollView>
                {filteredActivities.map(activity => (
                    <Card key={activity.id} style={styles.card}>
                        <Card.Content>
                            <Title>{activity.name}</Title>
                            <Paragraph>Starts at {activity.startTime} and ends at {activity.endTime}</Paragraph>
                            <IconButton
                                icon={isFavorite(activity) ? 'heart' : 'heart-outline'}
                                onPress={() => toggleFavorite(activity)}
                                color={isFavorite(activity) ? 'red' : 'grey'}
                                style={styles.loveButton}
                            />
                        </Card.Content>
                    </Card>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    searchBar: {
        margin: 10,
    },
    card: {
        margin: 10,
    },
    loveButton: {
        alignSelf: 'flex-end',
        marginTop: -45,
        marginRight: -10,
    },
});