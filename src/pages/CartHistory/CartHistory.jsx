import { checkToken } from "../../utilities/users-service";


export default function CartHistory() {

  async function handleCheckToken() {
    alert('clicked')
    try{
      const expDate = await checkToken();
      console.log(expDate);
    } catch(err){

    }
  }

  return (
    <>
      <h1>CartHistory</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}