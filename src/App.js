import React from "react";
import useFetchGit from "./hooks/useFetch";
import { ListaUser } from "./components"

export default function App() {
const url = 'https://api.github.com/users';
 const  {state:{isError, isLoading, users}}=useFetchGit({url})

  if(isError) return <>Error !</>
 if(isLoading) return <>Loading...</> 
  return (
    <ListaUser users={users}/>
  );
}
