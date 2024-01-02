import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import yup from "../../Helper/yupGlobal";
import "./index.css";

const loginSchema = yup.object().shape({
  fistName: yup
    .string()
    .required("Vui lòng nhập họ")
    .min(2, (context) => {
      return `Nhập ${context.value} là bậy yo, nhập lại đê`;
    })
    .max(10, (context) => {
      return `Nhập ${context.value} là bậy yo, tên dell gì dài thế`;
    }),

  lastName: yup
    .string()
    .required("Vui lòng nhập tên")
    .min(2, (context) => {
      return `Nhập ${context.value} là bậy yo, nhập lại đê`;
    })
    .max(10, (context) => {
      return `Nhập ${context.value} là bậy yo, tên dell gì dài thế`;
    }),

  //   password: yup
  //     .number()
  //     .min(6, "Minimum 6 characters")
  //     .max(12, "Minimum 12 characters")
  //     .required("mật khẩu sai rồi!"),

  phoneNumber: yup
    .string()
    .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, "Số điện thoại sai rồi")
    // .test("phoneErr", "Số điện thoại sai rồi", (value) => {
    //   const regex = new RegExp(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g);
    //   return regex.test(value);
    // })
    .required("Required!"),

  age: yup.number().min(0).required("điền tuổi!").matches(),
});

function FormLogin(props) {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  console.log("««««« errors »»»»»", errors);

  const onSubmit = (data) => {
    // Bạn có thể gọi API để cập nhật dữ liệu ở ngay đây
    console.log(data);
  };

  return (
    <div>
      <form className="box" onSubmit={handleSubmit(onSubmit)}>
        <h1>login</h1>
        <div className="input-field">
          <input
            type="text"
            name="fistName"
            id="fistName"
            placeholder="họ"
            autoComplete="off"
            {...register("fistName")}
            aria-invalid={errors.fistName ? "true" : "false"}
          />
          {errors.fistName && (
            <small className="text-danger">{errors.fistName.message}</small>
          )}
        </div>

        <div className="input-field">
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="tên"
            autoComplete="off"
            {...register("lastName")}
            aria-invalid={errors.lastName ? "true" : "false"}
          />
          {errors.lastName && (
            <small className="text-danger">{errors.lastName.message}</small>
          )}
        </div>

        <div className="input-field">
          <input
            type="password"
            name="pass"
            id="pass"
            placeholder="password"
            autoComplete="off"
            {...register("pass")}
            aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password && (
            <small className="text-danger">{errors.password.message}</small>
          )}
        </div>

        <div className="input-field">
          <input
            type="Text"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Nhap sdt"
            autoComplete="off"
            {...register("phoneNumber")}
            aria-invalid={errors.phoneNumber ? "true" : "false"}
          />
          {errors.phoneNumber && (
            <small className="text-danger">{errors.phoneNumber.message}</small>
          )}
        </div>

        <div className="input-field">
          <input
            type="Text"
            name="age"
            id="age"
            placeholder="Nhap tuoi"
            autoComplete="off"
            {...register("age")}
            aria-invalid={errors.age ? "true" : "false"}
          />
          {errors.age && (
            <small className="text-danger">{errors.age.message}</small>
          )}
        </div>

        <button type="submit" id="submit">
          LOGIN
        </button>
      </form>
    </div>
  );
}

export default FormLogin;
