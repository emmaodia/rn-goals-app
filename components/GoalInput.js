import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';


const GoalInput = props => {
    const [goal, setGoal] = useState('');

    const goalInputHandler = (text) => {
        setGoal(text);
      }
    
    const addGoalHandler = () => {
      props.onAddGoal(goal);
      setGoal('');
    }

    return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.input}>
          <TextInput 
            placeholder="Course Goal"
            style={styles.textInput}
            onChangeText={goalInputHandler}
            value={goal}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="CANCEL" color="red" onPress={props.onCancel}/>
            </View>
            <View style={styles.button}>
              <Button title="ADD" onPress={addGoalHandler} />
            </View>
            </View>
          </View>
      </Modal>
    );
}

const styles = StyleSheet.create({
    input: {flex: 1, justifyContent: 'center', alignItems: 'center', },
    buttonContainer: { flexDirection: "row", width: "60%" , justifyContent: "space-between"},
    button: {width: "40%", justifyContent: "center", margin: 10},
    textInput: { width: '80%', borderColor: 'black', borderWidth: 1, padding: 10, marginBottom: 10},
});

export default GoalInput;