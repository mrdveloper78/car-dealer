
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const TextInput = ({ title, holder, err, validation }) => {
    return (
        <div>
            <label className='text-[23px] font-semibold text-lableColor'>
                {title}
            </label>
            <br />

            <div
                className="flex items-center w-full"
                style={{ border: "1px solid #DDD", position: "relative" }}
            >
                <FaUserAlt
                    style={{ position: "absolute", left: "10px", top: "10px", color: "gray" }}
                />

                <input
                    type={"text"}
                    className={`normal-inp w-full ${err ? 'error-inp' : ''}`}
                    placeholder={holder}
                    {...validation}
                    style={{ border: "none", paddingLeft: "30px" }}
                />
            </div>

        </div>
    )
};

const EmailInput = ({ title, holder, err, validation }) => {
    return (
        <div>
            <label className='text-[23px] font-semibold text-lableColor'>
                {title}
            </label>
            <br />

            <div
                style={{ border: "1px solid #DDD", position: "relative" }}
            >
                <MdEmail
                    style={{ position: "absolute", left: "10px", top: "10px", color: "gray" }}
                />

                <input
                    type={"email"}
                    className={`normal-inp w-full ${err ? 'error-inp' : ''}`}
                    placeholder={holder}
                    {...validation}
                    style={{ border: "none", paddingLeft: "30px" }}
                />
            </div>

        </div>
    )
};


const PasswordInput = ({ title, holder, err, validation }) => {
    return (
        <div>
            <label className='text-[23px] font-semibold text-lableColor'>
                {title}
            </label>
            <br />

            <div
                style={{ border: "1px solid #DDD", position: "relative" }}
            >
                <RiLockPasswordFill
                    style={{ position: "absolute", left: "10px", top: "10px", color: "gray" }}
                />

                <input
                    type={"password"}
                    className={`normal-inp w-full ${err ? 'error-inp' : ''}`}
                    placeholder={holder}
                    {...validation}
                    style={{ border: "none", paddingLeft: "30px" }}
                />
            </div>

        </div>
    )
};


export { TextInput, EmailInput, PasswordInput };