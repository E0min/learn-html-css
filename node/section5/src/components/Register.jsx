import { useState, useRef } from "react";

const Register = () => {
    const [form, setForm] = useState({
        name: "이름",
        birth: "",
        country: "",
        introduce: ""
    });

    //const ref = useRef(0);
    const inputRef = useRef();
    var count = 0;
    //console.log(ref.current);


    const handleChange = (e) => {
        //ref.current++;
        count++;
        console.log(count);
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const onSubmit = () => {
        if(form.name == ""){
            inputRef.current.focus();

        }
    }
    return (
        <div>
            <button onClick={onSubmit}>button</button>
            <div>
                <input
                    ref={inputRef}
                    type="text"
                    name="name"
                    placeholder="이름"
                    onChange={handleChange}
                    value={form.name}
                />
            </div>
            <div>
                <input
                    type="text"
                    name="birth"
                    placeholder="생일"
                    onChange={handleChange}
                    value={form.birth}
                />
            </div>
            <div>
                <select
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                >
                    <option value="한국">한국</option>
                    <option value="미국">미국</option>
                    <option value="영국">영국</option>
                </select>
            </div>
            <div>
                <textarea
                    name="introduce"
                    placeholder="소개"
                    onChange={handleChange}
                    value={form.introduce}
                ></textarea>
            </div>
            <div>
                <h2>소개 미리보기:</h2>
                <p>{form.introduce}</p>
            </div>
        </div>
    );
};

export default Register;
