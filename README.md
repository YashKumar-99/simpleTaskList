Todolist instrucation:-

1.created react app and install nessesery dependecy.
2.for created two  folder first is compoenents there we will mange our all components and second is redux where we will manange our all state's globlly.
3.in redux I have created three files one is for action where we can write all action, second is reducer where we can handle the logics . basically we dispatch the actions and accesss it in reuducer , in reducer according to the condition we return a new update state and this new update state will reflect in our component , for dispatch action we have useDispacth function provided and for get the all states we have useSelector function both are provided by the react-redux.

4.now we can see have have TaskReducer we have getting the action as a perameter and returing the result according to the acition.type also we have defined our all actions in action.js

5.our third file is store.js basically store  is our glbole obj in this obj we manage our the states . We have export this from here store.js and imported in index.js . in index. js we wrapped the whole app compoent in provider  and pass  this store obj as a props.


6.In Today component First I have created input box and add task button . on addTask function we are trigger a action and sending payload as a arguemnt.it will add the task in our task with unqiue id.
delete task- we are getting the id as payload and deleteing the item which we not needed.using filter function.
edit task- We are getting the id as payload and upading the text in the state.
toggle_fevorite- we have created a fevorite status for every items . according to our logic click on star icon it's do the fevorite status true and false . and according to this true/false statement we are updating our icons.

toggle_todo:- in list items we have added a checkbox with every item when it's be check then it's sets the complete status true otherwise it's false.

according to completed:true/false statement we are can difference task which is completed and which is not completed.


for better managemangement I have made a differenet component for popup model. in my code we can see i am getting the nessery state or function as a props and manging it in different compoenent. basically this model component will pop up when we want to update task and in this model we have two buttons first for cancel the change and second one for save . when we click on save button it call the handleupdatetask function and in this function we are dispatching an action "Edit task" for edit.


We have two list in our app one is for todo list task and second is  completed tasks. we are finding the different between by the "completed" true or false.


I did not focus on ui part just focud on functionally  . althorugh I have good experieces and knowledage in UI.


Thanks




 
