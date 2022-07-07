import { useCallback, useRef, useState } from "react"
import Button from "./Components/Button/Button"
import Input from "./Components/Input/Input"
import List from "./Components/List/List"
import Listitem from "./Components/Listitem/Listitem"
import Text from "./Components/Text/Text"
import Card from "./ui/Card/Card"
import Wrapper from "./ui/Wrapper/Wrapper";
import classes from './ui/Global.module.css'
import './App.css';


const App = () => {
  const [userList,setUserList] = useState([
    {
       name: 'Narfioro', 
       surname: 'Ghazaryan', 
       age: 32, 
       hobby: 'coding', 
       range: 'expert', 
       id: 1
    }, 
    {
      name: 'Narfi', 
      surname: 'Xudoyan', 
      age: 30, 
      hobby: 'eating', 
      range: 'expert', 
      id: 2
    }, 
    {
      name: 'Hamo', 
      surname: 'Haxverdyan', 
      age: 22, 
      hobby: 'coding', 
      range: 'nub', 
      id: 3
    }, 
    {
      name: 'Kate', 
      surname: 'Kalamocew', 
      age: 28, 
      hobby: 'coding', 
      range: 'God level', 
      id: 4
    }, 
  ])

  const newUserName = useRef('');
  const newUserSurname = useRef('');
  const newUserAge = useRef('');
  const newUserHobby = useRef('');
  const newUserRange = useRef('');
  const [nextUserId,setNextUserId] = useState(5);
  const [searchName,setSearchName] = useState('');


  const deleteUser = (id) => {
     const newUserList = userList.filter(user => user.id !== id);
     setUserList(newUserList)
  }

  const checkAge = (item) => {
    return Number(item.current.value) >= 18 && Number(item.current.value) <70
  }

  const checkInputsValue = (inputsArray) => {
   const realInputs = inputsArray.filter(el => el.current.value.length >= 2 && el.current.value.length <=10)
   return realInputs.length === 4
  }

  const addUser = () => {
    if(checkInputsValue([newUserName,newUserName,newUserHobby,newUserAge]) 
      && checkAge(newUserAge)) {
      const newUser = {
      name: newUserName.current.value,
      surname: newUserSurname.current.value,
      age: newUserAge.current.value,
      hobby: newUserHobby.current.value,
      range: newUserRange.current.value,
      id: nextUserId
    }
      setUserList(userList.concat(newUser));
      setNextUserId(nextUserId + 1)
    }
     return
  }

  const changeNameHandler = (event) => {
    setSearchName(event.target.value)
  }

  const filterByName = useCallback(
    (item) => {
      return item.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase())
    }, [searchName]
  )

  return (
    <Wrapper>
      <Card className={classes.container}>
      <Card className={classes['new-user-container']}> 
      <Card className={classes.block}>
        <Text>search user by name</Text>
        <Input placeholder='search user by name' onChange={changeNameHandler} type='text' />
      </Card>
      </Card>
      <Card className={classes['new-user-container']}> 
      <Card className={classes.block}>
        <Text> new user Name </Text>
        <Input propsRef={newUserName}  placeholder='write new user name' type='text'/>
      </Card>
      <Card className={classes.block}>
        <Text> new user Surname </Text>
        <Input propsRef={newUserName}  placeholder='write new user surname' type='text'/>
      </Card>
      <Card className={classes.block}>
        <Text> new user age </Text>
        <Input propsRef={newUserAge}  placeholder='write new user age' type='number'/>
      </Card>
      <Card className={classes.block}>
        <Text> new user hobby </Text>
        <Input propsRef={newUserRange}  placeholder='write new user hobby' type='text'/>
      </Card>
       <Card className={classes.block}>
        <Text> new user range </Text>
        <Input propsRef={newUserHobby}  placeholder='write new user range' type='text'/>
        <Button onClick={addUser}> add user </Button>
      </Card>
      </Card>
     
       <List className={classes.list} >
        {
          userList.filter(filterByName).map(user => {
            return (
              <Listitem className={classes['list-item']}  key={user.id}>
                <Text> {user.name} </Text>
                <Text> {user.surname} </Text>
                <Text> {user.age} </Text>
                <Text> {user.hobby} </Text>
                <Text> {user.range} </Text>
                <Button onClick={() => deleteUser(user.id)}> delete user </Button>
              </Listitem>
            )
          })
        }
       </List>
       </Card>
    </Wrapper>
  )
}

export default App