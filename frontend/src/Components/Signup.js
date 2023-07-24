import React, { useState } from 'react';
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

export function Signup() {
    const [user, setUser] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [msg, setMsg] = useState('');
    const [cls, setCls] = useState('text-danger');

    function handlechange(e) {
        setMsg('');
        const { name, value } = e.target;

        setUser(
            {
                ...user,
                [name]: value
            }
        )
    }
    async function register() {
        const { email, password, confirmPassword } = user;
        if (email && password && password == confirmPassword) {
            const resJson = await fetch("http://localhost:9000/user/signup", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            const res = await resJson.json();
            console.log(res)
            if (!resJson.ok) {
                setCls('text-danger');
                let err = res.message + ": ";
                res.data?.forEach(e => {
                    err += e.msg + ' ';
                });
                setMsg(err);
            } else {
                setCls('text-success');
                setMsg(res.message);
            }
        }
        else if (password != confirmPassword) {
            setCls('text-danger');
            setMsg('Confirm password didn\'t match!');
        }
        else {
            setCls('text-danger');
            setMsg('Empty inputs!');
        }

    }
    return (
        <div className='d-flex justify-content-center mt-3 '>
            <div className='w-50 rounded-3 border border-primary p-4'>
                <div className=''>
                    <p className={cls}>{msg}</p>
                </div>
                <MDBInput className='mb-4' type='email' id='email' name='email' value={user.email} label='Enter email address' onChange={handlechange} />
                <MDBInput className='mb-4' type='password' id='password' name='password' value={user.password} label='Enter password' onChange={handlechange} />
                <MDBInput className='mb-4' type='password' id='confirmPassword' name='confirmPassword' value={user.confirmPassword} label='Confirm password' onChange={handlechange} />

                <MDBRow className='mb-4'>
                    <MDBCol>
                        <Link to="/signin">
                            Go to signin?
                        </Link>
                    </MDBCol>
                </MDBRow>

                <MDBBtn onClick={register} block>
                    Sign up
                </MDBBtn>
            </div>
        </div>
    );
}
