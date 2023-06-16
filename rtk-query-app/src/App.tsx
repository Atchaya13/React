import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Todo } from './Contracts/Todo';
import { useGetTodosQuery,useGetTodoByIDQuery,usePostDataMutation } from './Service/api';
import { useGetPostsQuery } from './Service/post';
import { Post } from './Contracts/Post';

function App() {
  //const{data,error,isLoading,isFetching,isSuccess}=useGetTodosQuery();
  
  //const{data,error,isLoading,isFetching,isSuccess}=useGetTodoByIDQuery(1);
  //console.log(data)

  const[postData]=usePostDataMutation();
  
  const onFormSubmit=(data:any)=>{
    postData(data);
  }

  const{data,error,isLoading,isFetching,isSuccess}=useGetPostsQuery();

  return (
    <div className="App">
      <h1>Todos</h1>
      {isLoading&&<h2>Loading</h2>}
      {isFetching&&<h2>Fetching</h2>}
      {error&&<h2>Error Occured</h2>}
      {isSuccess&&(
        <div>
          {/* {data?.map((item:Todo)=>{
            return <div key={item.userId}>
              <span>{item.title}</span>
            </div>
          })} */}
          {data?.map((item:Post)=>{
            return <div key={item.userId}>
              <span>{item.title}</span>
            </div>
          })}
         
        </div>
      )}
    </div>
  );
}

export default App;
