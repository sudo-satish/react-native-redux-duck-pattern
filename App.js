import React, {useState} from 'react';
import {Provider, connect} from 'react-redux';
import {StyleSheet, Text, View, TextInput, Button, TouchableOpacity, FlatList } from 'react-native';
import {store} from './store/store';
import {addTodo} from './store/addTodo';
import {todoListSelector} from './store/selector';


function Item({title}) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const MyApp = ({store, todos}) => {
  const [todo, setTodo] = useState('Some text');

  const onAddTodo = () => {
    store.dispatch(addTodo(todo));
  }

  console.log({todos});
  

  return (
    <>
      <View style={{flex: 1}}>
        <FlatList
          data={todos.todo}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />
        <TouchableOpacity style={{ justifyContent: 'center', alignContent: 'center', width: 100}}>
          <TextInput
            style={{width: 100}}
            placeholder="Some input"
            defaultValue={todo}
            onChangeText={setTodo}
          />
        <Button title="Add Todo" onPress={onAddTodo}/>
        </TouchableOpacity>
      
      </View>
    </>
  )
}

const mapStateToProps = (state) => ({
  todos: todoListSelector(state)
});
const TODOS = connect(mapStateToProps)(MyApp);


export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <TODOS store={store}/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
