import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalInput from './components/GoalInput'
import GoalItem from './components/GoalItem'

export default function App() {
  
  const [courseGoal, setCourseGoal] = useState([]);
  const [isAddModal, setIsAddModal] = useState(false);
  
  const addGoalHandler = goalTitle => {
   
    setCourseGoal(courseGoal => [ 
                                  ...courseGoal, 
                                  { id: Math.random().toString(), value: goalTitle }
                                ]);
    
    //Implementing state functions for 2 different states ensures that the app is not rerendered.
    setIsAddModal(false)

    console.log(goalTitle)
  }

  const removeGoalHandler = goalId => {
    setCourseGoal(goals => {
      return goals.filter((currentGoal) => currentGoal.id !== goalId );
    });
    console.log(goalId)
  }

  const cancelGoalHandler = () => {
    setIsAddModal(false);
  }
// id={itemData.item.id}
  return (
    <View style={styles.container}>
      <Button title='Add new Goal'onPress={() => setIsAddModal(true) }/>
     <GoalInput 
      visible={isAddModal} 
      onAddGoal={addGoalHandler} 
      onCancel={cancelGoalHandler}
      />
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={courseGoal}
        renderItem={itemData => (
          <GoalItem 
          onDelete={removeGoalHandler.bind(this, itemData.item.id)} 
          title={itemData.item.value}
          />
        )}
      />

     {/* <ScrollView>
       {courseGoal.map((result) => <View key={result} style={styles.listItems}><Text >{result}</Text></View>)}
     </ScrollView> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
});
