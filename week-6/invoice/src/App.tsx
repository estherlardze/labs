import "./App.css";
import { useForm } from "react-hook-form";
import {DevTool} from '@hookform/devtools'


type AppProps = {
  username: string;
  email: string;
  channel: string;
}

function App() {
  const form = useForm<AppProps>();
  const { register, handleSubmit, control, formState} = form;
  const { errors } = formState;

  const onSubmit = (data:AppProps) => {
    console.log("data", data);
  };

  return (
    <div>
      <h1>Youtube form</h1>

      <form className="form" noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label htmlFor="username">Name</label>
          <input type="text" id="username" {...register("username", {
            required: {
              value: true,
              message: "Name is required",
            }
          })}/>
          <p className="">{errors.username?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email", {
            required: "Email is required",
          })}/>
          <p className="error">{errors.email?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input type="text" id="channel" {...register("channel", {
            required: "Channel is required",
            pattern: {
              value: /^[^@]+@[^@]+\.[^@]+$/,
              message: "Invalid email address",
            }, 
          })}/>
          <p className="error">{errors.channel?.message}</p>
        </div>

        <button>Submit</button>

      <DevTool control={control}/>
      </form>
    </div>
  );
}

export default App;
