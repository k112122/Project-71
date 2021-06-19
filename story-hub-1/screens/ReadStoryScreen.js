import React from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import db from '../config';

export default class ReadStoryScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      book: [],
      lastVisibleStory: null,
      search: '',
     
    };
  }

  componentDidMount = async () => {
    const allStories = await db.collection('story').get();

    allStories.docs.map((doc) => {
      this.setState({
        book: [...this.state.book, doc.data()],
        lastVisibleStory: doc,
      });
    });
  };

  getStories = async (text) => {
    const story = await db
      .collection('story')
      .where('storyName', '==', text)
      .startAfter(this.state.lastVisibleStory)
      .limit(10)
      .get();
    story.docs.map((doc) => {
      this.setState({
        book: [...this.state.book, doc.data()],
        lastVisibleStory: doc,
      });
    });
  };

  searchFilterFunction = async (text) => {
    const story = await db
      .collection('story')
      .where('storyName', '==', text)
      .get();
    story.docs.map((doc) => {
      this.setState({
        book: [...this.state.book, doc.data()],
        lastVisibleStory: doc,
      });
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.bar}
            placeholder="BOOK NAME"
            onChangeText={(text) => {
              this.setState({ search: text });
            }}
          />

          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => {
              this.searchFilterFunction(this.state.search);
            }}>
            <Text>Search</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={this.state.book}
          renderItem={({ item }) => (
            <View
              style={{ borderBottomWidth: 2, marginTop: 20, marginBottom: 20 }}>
              <Text>{'Story Name: ' + item.storyName}</Text>
              <Text>{'Story Author: ' + item.storyAuthor}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={this.getStories}
          onEndReachedThreshold={0.7}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  searchBar: {
    flexDirection: 'row',
    height: 40,
    width: 'auto',
    borderWidth: 1,
    alignItems: 'center',
    padding: 10,
  },
  bar: {
    height: 20,
    width: 900,
    borderWidth: 2,
    backgroundColor: 'cyan',
    height: 20,
    width: 900,
    paddingLeft: 10,
    borderRadius: 30,
  },
  searchButton: {
    borderWidth: 1,
    height: 30,
    width: 100,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
