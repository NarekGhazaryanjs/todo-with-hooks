import { useState } from "react"
import List from "./Components/List/List"
import Listitem from "./Components/Listitem/Listitem"
import Text from "./Components/Text/Text"
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

  return (
    <Wrapper>
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
              </Listitem>
            )
          })
        }
       </List>
    </Wrapper>
  )
}

export default App