import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { useAppDispatch } from "@/hooks/redux-hooks";
import { signUp } from "@/store/auth/auth.actions";
import notification from "@/helpers/utils";

interface ISignUpInputs {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export default function SignUpPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { register, handleSubmit, watch, formState: { errors } } = useForm<ISignUpInputs>();

  const onSubmit: SubmitHandler<ISignUpInputs> = async (data) => {
    const { success } = await dispatch(signUp({
      email: data.email,
      password: data.password,
      username: data.username,
    })).unwrap();

    if (success) {
      notification("Successfully signed up!", "success");
      await router.push("/sign-in");
    } else {
      notification("Error signing up...", "error");
    }
  };

  return (
    <div className="sign-in">
      <h1 className="sign-in__main-heading">
        Sign Up
      </h1>
      <form className="sign-in__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="sign-in__action">
          <label htmlFor="username" className="sign-in__label">Username*</label>
          <input type="text" id="username" className="sign-in__input" {...register("username", { required: true })} />
          {errors.username && <span className="sign-in__error">This field is required</span>}
        </div>
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
        <div className="sign-in__action">
          <label htmlFor="repeat-password" className="sign-in__label">Repeat Password*</label>
          <input type="password" id="repeat-password"
                 className="sign-in__input" {...register("repeatPassword", { required: true })} />
          {errors.repeatPassword && <span className="sign-in__error">This field is required</span>}
        </div>
        <button className="sign-in__button btn btn--red" type="submit">
          Sign Up
        </button>
        <Link href="/sign-in" className={"btn btn--grey"}>Already signed up? Go to sign in page.</Link>
      </form>
    </div>
  );
}
