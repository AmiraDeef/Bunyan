
import { useOutletContext } from "react-router-dom";

function FormalDashboard() {
  const   setActive  = useOutletContext();
    const handleInput = (e) => {
        const text = e.target.value
        const path=(window.location.pathname).split("/")[1]
        if(text.trim().length > 0){setActive(path) } else{setActive("none")}
        console.log(text);
        console.log(path);




    }
    return (

        <><div className="container">
            <form onChange={handleInput}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form></div>

        </>
    )
}
export default FormalDashboard;