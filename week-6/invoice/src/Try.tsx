import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type AppProps = {
  username: string;
  email: string;
  channel: string;
};

function Try() {
  //the form hook is used to create a form with the useForm hook. The useForm hook returns an object with the register, handleSubmit, control, and formState properties. The register property is used to register the input fields with the form. The handleSubmit property is used to handle the form submission. The control property is used to control the form. The formState property is used to get the form state.
 // the useForm accepts default values for the form, if you want to load previously saved data, we use asyn and await in the useform 
  const form = useForm<AppProps>({
    defaultValues: {
        username: "Esther",
        email: "",
        channel: "",
      
    },
  });
  const { register, handleSubmit, control, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: AppProps) => {
    console.log("data", data);
  };

  return (
    <div>
      <h1>Youtube form</h1>

      <form className="form" noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label htmlFor="username">Name</label>
          <input
            type="text"
            id="username"
            {...register("username", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
          />
          <p className="">{errors.username?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              pattern: {
                value: /^[^@]+@[^@]+\.[^@]+$/,
                message: "Invalid email address",
              },
              validate: {
                notAdmin: (fieldValue) => {
                  return (
                    fieldValue !== "admin@gmail.com" || "email cannot be admin"
                  );
                },
                notBlacklisted: (fieldValue) => {
                  return (
                    !fieldValue.endsWith("baddomain.com") ||
                    "The domain is not suppoerted"
                  );
                },
              },
            })}
          />
          <p className="error">{errors.email?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            {...register("channel", {
              required: "Channel is required",
              pattern: {
                value: /^[^@]+@[^@]+\.[^@]+$/,
                message: "Invalid email address",
              },
            })}
          />
          <p className="error">{errors.channel?.message}</p>
        </div>

        <button>Submit</button>

        <DevTool control={control} />
      </form>
    </div>
  );
}

export default Try;
