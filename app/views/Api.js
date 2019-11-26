import React from 'react';
import {
  FlatList,
  ActivityIndicator,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
    RefreshControl,
} from 'react-native';
import {
  RkText,
  RkCard,
  RkStyleSheet,
} from 'react-native-ui-kitten';

const url = 'http://127.0.0.1:5000'

export class Api extends React.Component {
  static navigationOptions = {
    title: 'Article List'.toUpperCase(),
  };

  constructor(props){
    super(props);
    this.state = {isLoading: true,refreshing: false,}
  }

  _onRefresh = () => {
    this.setState({isLoading: true});
    this.fetchData().then(() => {
      this.setState({refreshing: false});
    });
  }

  fetchData = async() => {
    fetch(url + '/articles')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.articles,
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  componentDidMount(){
    this.fetchData()
  }

  renderItem = ({ item }) => (
    <TouchableOpacity
      delayPressIn={70}
      activeOpacity={0.8}
      >
      <RkCard rkType='horizontal' style={styles.card}>
        <Image rkCardImg source={{uri: url + item.photo}} />
        <View rkCardContent>
          <RkText numberOfLines={1} rkType='header6'>{item.title}</RkText>
          <RkText style={styles.post} numberOfLines={2} rkType='secondary1'>{item.text}</RkText>
        </View>
      </RkCard>
    </TouchableOpacity>
  );
  extractItemKey = (item) => `${item.id}`;
  render = () => (
      <FlatList
        data={this.state.dataSource}
        renderItem={this.renderItem}
        keyExtractor={(this.extractItemKey)}
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />}
      />
  );
}



const styles = RkStyleSheet.create(theme => ({
  container: {
    backgroundColor: theme.colors.screen.scroll,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  card: {
    marginVertical: 8,
  },
  post: {
    marginTop: 13,
  },
}));
