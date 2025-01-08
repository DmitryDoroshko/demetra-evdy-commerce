import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "@/hooks/redux-hooks";
import Link from "next/link";

interface ISignInInputs {
  email: string;
  password: string;
}

export default function SignInPage() {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, watch, formState: { errors } } = useForm<ISignInInputs>();

  const onSubmit: SubmitHandler<ISignInInputs> = async (data) => {
    console.log("Sign in page", data);
  };

  return (
    <div className="sign-in">
      <h1 className="sign-in__main-heading">
        Sign In
      </h1>
      <form className="sign-in__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="sign-in__action">
          <label htmlFor="email" className="sign-in__label">Email*</label>
          <input type="email" id="email" className="sign-in__input" {...register("email", { required: true })} />
          {errors.email && <span className="sign-in__error">This field is required</span>}
        </div>
        <div className="sign-in__action">
          <label htmlFor="password" className="sign-in__label">Password*</label>
          <input type="password" id="password"
                 className="sign-in__input" {...register("password", { required: true })} />
          {errors.password && <span className="sign-in__error">This field is required</span>}
        </div>
        <button className="sign-in__button btn btn--red" type="submit">
          Sign In
        </button>
        <Link href="/sign-up" className={"btn btn--grey"}>Not registered yet? Go to registration.</Link>
      </form>
    </div>
  );
}
