import React, { Component } from 'react';
import { StyleSheet, Text, View, TabBarIOS } from 'react-native';

import { FavoritesTab } from "./favoritesTab";
import { ExercisesTab } from "./exercisesTab";

export default class TabsMain extends Component {

  state = {
    selectedTab: "favorites"
  }

  render() {
    return (
        <TabBarIOS>

          <TabBarIOS.Item
            systemIcon="favorites"
            selected={this.state.selectedTab === "favorites"}
            onPress={() => this.selectTab.call(this, "favorites")} >

            <FavoritesTab />

          </TabBarIOS.Item>

          <TabBarIOS.Item
            systemIcon="top-rated"
            selected={this.state.selectedTab === "ExercisesTab"}
            onPress={() => this.selectTab.call(this, "ExercisesTab")} >

            <ExercisesTab />

          </TabBarIOS.Item>

        </TabBarIOS>
    );
  }

  selectTab = (tab) => {
    
    this.setState({
      selectedTab: tab
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})