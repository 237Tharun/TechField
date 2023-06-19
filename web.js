import './web.css';
const Web =() =>{
    const Signin =()=>{
        return(
            <div className="bg2">
                <h1>Welcome to Signin page</h1>
                <form>
                    <table>
                        <tr>
                            <td><label>First Name:</label></td>
                            <td><input type="text" placeholder="firstname" required></input></td>
                        </tr>
                        <tr>
                        <td><label>Last Name:</label></td>
                           <td> <input type="text" placeholder="lasttname" required></input></td>
                        </tr>
                        <tr>
                        <td><label>Mobile:</label></td>
                            <td><input type="number" value="+91" placeholder="number" required></input></td>
                            </tr>
                            <tr>
                                <td><label>Email:</label></td>
                            <td><input type="email" placeholder='@gmail' required></input></td>
                        </tr>
                        <tr>
                            <td><label>Password:</label></td>
                            <td><input type="password" placeholder="enter password" required></input></td>
                        </tr>
                        <tr>
                            <td><label>Re-enter password</label></td>
                            <td><input type="password" placeholder="re-enter password" required></input></td>
                        </tr><br></br>
                        <input type="button" value="submit"></input>

                    </table>
                </form>
            </div>
        )
    }
    return(
        <div className="bg">
            <h1 align="center">Wellcome our Web</h1>
            <div className='bg2' align="center">
        <form>
            <tabel>
                <tr>
        <td><label>Username:</label></td>
        <td><input type="text" placeholder='username' required></input></td><br></br>
        </tr>
        <tr>
        <td><label>Password:</label></td>
        <td><input type="password" placeholder='password'required></input></td>
        </tr><br></br>
        <button>Submit</button>
        </tabel>
        </form>
        <h3>don't have an account</h3>
        <button onClick={Signin}>Signin</button>
        </div>
        </div>
    )
}
    
export default Web;