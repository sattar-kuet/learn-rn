import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { 
  StyleSheet, 
  View, 
  FlatList, 
   Button 
  } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const addCourseGoal = (goalTitle) =>{
    setCourseGoals(currentGoals => [...currentGoals,{id: Math.random().toString(), value: goalTitle}]);
  }
  const deleteGoal = goalId =>{
    //alert(goalId);
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal)=> goal.id !== goalId);
    });
  }
  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onGoalAdd = {addCourseGoal} />
      <FlatList 
                keyExtractor = {(item,index) => item.id}
                data={courseGoals} 
                renderItem={itemData => <GoalItem  onDeleteGoal = {deleteGoal} 
                                                   id={itemData.item.id} 
                                                   title={itemData.item.value} 
                                        /> } 
      />
   
    </View>
  );
}

const styles = StyleSheet.create({
 screen:{
   padding:50
 },

});
