import {React,usestate} from "react";
import {AiOutlinEye, AiOutlinEyeInvisible} from "react-icons/ai";
import styles from "../styles/style";
import { Link } from "react-router-dom";
import {RxAvatar} from "react-icons/rx";
import axios from 'axios';

const signupPage = () => {
    const [email, setEmail] = usestate("");
    const [name, setname] = usestate("");
    const [password, setPassword] = usestate("");
    const [visible, setVisible] = usestate(false);
    const [avatar, setAvatar] = usestate(null);

    const handleFileSubmit = (e) => {
        const file = e.target.files[0];
        if (file){
            const filePath = URL.createObjectURL(file);
            console.log("File path: " + filePath);
            setAvatar(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newForm = new FormData();
        newForm.append('name', name);
        newForm.append('email', email);
        newForm.append('password', password);
        newForm.append('file', avatar);

        const config = {
            headers: {
                'Content-Type':'multipart/form-data',
                "Accept": "any"
            },
        };
        axios.post("http://localhost:8000/api/v2/user/create-user", newForm, config).then((res) =>{
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        });
    };
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-12 flex flex-col justify-center sm:px-6 lg:px-8">
            
        </div>
    );
    

}