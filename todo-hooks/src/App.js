import { useRef, useState } from "react"
import Button from "./Components/Button/Button"
import Input from "./Components/Input/Input"
import List from "./Components/List/List"
import Listitem from "./Components/Listitem/Listitem"
import Text from "./Components/Text/Text"
import Card from "./ui/Card/Card"
import Wrapper from "./ui/Wrapper/Wrapper"

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

  return (
    <Wrapper>
      <Card>
        <Text> new user Name </Text>
        <Input propsRef={newUserName}  placeholder='write new user name' type='text'/>
      </Card>
      <Card>
        <Text> new user Surname </Text>
        <Input propsRef={newUserName}  placeholder='write new user surname' type='text'/>
      </Card>
      <Card>
        <Text> new user age </Text>
        <Input propsRef={newUserAge}  placeholder='write new user age' type='number'/>
      </Card>
      <Card>
        <Text> new user hobby </Text>
        <Input propsRef={newUserRange}  placeholder='write new user hobby' type='text'/>
      </Card>
      <Card>
        <Text> new user range </Text>
        <Input propsRef={newUserHobby}  placeholder='write new user range' type='text'/>
        <Button onClick={addUser}> add user </Button>
      </Card>
       <List>
        {
          userList.map(user => {
            return (
              <Listitem key={user.id}>
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
    </Wrapper>
  )
}

export default App