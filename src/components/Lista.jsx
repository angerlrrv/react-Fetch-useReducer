import { ItemList} from "."

const ListaUser =({users})=>{
  return  <section>
  <h3>github users</h3>
  <ul className='users'>
    {users.map(({ id, login, avatar_url, html_url }) => {
      return (
        <ItemList login={login} avatar_url={avatar_url} html_url={html_url} key={id}/>
      );
    })}
  </ul>
  </section>
  }
  export default ListaUser;