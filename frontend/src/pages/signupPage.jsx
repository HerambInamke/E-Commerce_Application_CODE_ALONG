//eslint-disable-next-line
import {React, use, useState} from "react";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import styles from "../styles/style";
import {Link} from "react-router-dom";
import {RxAvatar} from "react-icons/rx";
import axios from 'axios';

const signupPage = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);
    const [avatar, setAvatar] = useState(null);
    
    const handleFileSubmit = (e) => {
        const file = e.target.files[0];
        if (file) {
            const filePath = URL.createObjectURL(file);
            console.log("File path: ", filePath);
            setAvatar(file);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newForm = new FormData();

        newForm.append("file", avatar);
        newForm.append("name", name);
        newForm.append("email", email);
        newForm.append("password", password);

        const config = {
            headers: {
                "Content-type": "multipart/form-data",
                "Accept": "any",
            }
        }

        axios.post("http://localhost:8000/api/v2/user/create-user", newForm, config).then((res)=> {
            console.log(res.data);
        }).catch((err)=> {
            console.log(err)
        })
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-12">
        flex flex-col justify-center py-12 sm:px-6 lg:px-8"
            <div className="sm:mx-auto sm:w-full sm:max-w-md">               
            <h2 className="mt-6 text-center text-3xl font-bold text-gray-950">
                Register as a new user
            </h2>
            </div>
        <div className="mt-8 sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"></div>
            <form className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                
            </form>
        </div>

        </div>
    )
}
