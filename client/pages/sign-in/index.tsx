import Link from "next/link";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";

import { useAppDispatch } from "@/hooks/redux-hooks";
import { signIn } from "@/store/auth/auth.actions";
import { signInSuccess } from "@/store/auth/auth.slice";
import { notification }from "@/helpers/utils";
import { TOKEN_LOCAL_STORAGE_KEY } from "@/constants/constants";

interface ISignInInputs {
  email: string;
  password: string;
}

export default function SignInPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm<ISignInInputs>();

  const onSubmit: SubmitHandler<ISignInInputs> = async (body) => {
    const { data } = await dispatch(signIn({ email: body.email, password: body.password })).unwrap();

    if (data.token) {
      dispatch(signInSuccess({ ...data.user, token: data.token }));
      localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, data.token);
      notification("Successfully signed in!", "success");
      await router.push("/shop");
    }
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
