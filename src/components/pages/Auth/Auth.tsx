import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { AxiosResponse } from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { login } from "store/slices/authSlice";
import { userLogin, userSignUp } from "api/services/auth.services";
import { AuthProps } from "interfaces/auth.model";
import { AxiosError } from "interfaces/errors.model";
import { setLocalStorageItems } from "helpers/global";
import * as ROUTES from "constants/routes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./Auth.css";
const Auth = () => {
  const { t } = useTranslation("common");
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const isRegister = location.pathname === ROUTES.REGISTER;
  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const signinFunc = useMutation(userLogin, {
    async onSuccess(response) {
      const { token, user } = response;
      let localUser = {
        token: token,
        user: user,
      };
      setLocalStorageItems(localUser);
      dispatch(login());
    },
    onError(error: AxiosError<{ error: string }>) {
      toast.error(error.response?.data.error);
    },
  });
  const signupFunc = useMutation(userSignUp, {
    async onSuccess(response: AxiosResponse) {
      toast.success(response.data.message);
      setTimeout(() => {
        navigate(ROUTES.LOGIN);
      }, 2000);
    },
    onError(error: AxiosError<{ error: string }>) {
      toast.error(error.response?.data.error);
    },
  });
  const onSubmit = (data: AuthProps) => {
    if (isRegister) {
      signupFunc.mutate(data);
    } else {
      signinFunc.mutate(data);
    }
  };
  useEffect(() => {
    reset();
  }, [location.pathname, reset]);
  return (
    <>
      <ToastContainer />
      <div className="container auth">
        <h2>{isRegister ? t("auth.register") : t("auth.login")}</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
          {isRegister && (
            <>
              <label htmlFor="fullname">{t("auth.full-name")}</label>
              <input
                {...register("fullname", {
                  required: {
                    value: true,
                    message: "auth.full-name-valid",
                  },
                })}
                type="text"
                className="form-control"
                style={{
                  borderColor: !errors.fullname ? "" : "red",
                }}
              />
              {errors.fullname && (
                <p className="text_danger">
                  {t(errors.fullname.message as string)}
                </p>
              )}
            </>
          )}
          <label htmlFor="email">{t("auth.email")}</label>
          <input
            {...register("email", {
              required: {
                value: true,
                message: "auth.email-valid",
              },
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "auth.email-invalid",
              },
            })}
            type="email"
            className="form-control"
            style={{
              borderColor: !errors.email ? "" : "red",
            }}
          />
          {errors.email && (
            <p className="text_danger">{t(errors.email.message as string)}</p>
          )}
          <label htmlFor="guests">{t("auth.password")}</label>
          <input
            {...register("password", { required: true })}
            type="password"
            className="form-control"
            style={{
              borderColor: !errors.password ? "" : "red",
            }}
          />
          {errors["password"] && (
            <p className="text_danger">{t("auth.password-valid")}!</p>
          )}
          <input
            type="submit"
            value={isRegister ? t("auth.register") : t("auth.login")}
          />
        </form>
        <p>
          {isRegister ? (
            <>
              {t("auth.account-exist")}?{" "}
              <Link to={ROUTES.LOGIN}>{t("auth.login")}</Link>
            </>
          ) : (
            <>
              {t("auth.no-account")}?{" "}
              <Link to={ROUTES.REGISTER}>{t("auth.register")}</Link>
            </>
          )}
        </p>
      </div>
    </>
  );
};
export default Auth;
