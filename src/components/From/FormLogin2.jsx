import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import yup from "../../Helper/yupGlobal";
import InputGroup from "./Form2";

import "./index.css";

const loginSchema = yup.object().shape({
  firstName: yup
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

  age: yup
    .number()
    .required("Không bỏ trống tuổi")
    // .test('check_type', ' Kiểu dữ liệu sai', () => {

    // })
    .min(18, (content) => {
      return `Tuổi ${content.value} chưa đủ để sử dụng dịch vụ. phải 18+ mới được`;
    }),

  phoneNumber: yup
    .string()
    .required("Required")
    .phoneNumber("Số điện thoại không hợp lệ"),

  pass: yup.string().required("Required").password("Password sai định dạng"),
});

const GENDER = {
  MALE: "male",
  FEMALE: "female",
  OTHER: "other",
};

const GENDERS = ["---", GENDER.FEMALE, GENDER.MALE, GENDER.OTHER];

function FormLogin2(props) {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    // Bạn có thể gọi API để cập nhật dữ liệu ở ngay đây
    console.log(data);
  };

  const onChangeAge = (e) => {
    if (e.target.value === "") {
      setValue("age", 0);
    } else {
      // setValue('age', e.target.value);
    }
  };

  const ageField = register("age", {
    onChange: onChangeAge,
  });

  return (
    <form className="box" onSubmit={handleSubmit(onSubmit)}>
      <h1>login</h1>

      {/* <InputGroup
        name="firstName"
        placeholder="Họ"
        register={register}
        errors={errors}
      /> */}

      <InputGroup
        name="lastName"
        placeholder="Tên"
        register={register}
        errors={errors}
      />

      <div className="input-field">
        <input
          type="number"
          name="age"
          id="age"
          placeholder="Tuổi"
          autoComplete="off"
          {...register("age", {
            onChange: onChangeAge,
          })}
          aria-invalid={errors.age ? "true" : "false"}
        />
        {errors.age && (
          <small className="text-danger">{errors.age.message}</small>
        )}
      </div>

      <InputGroup
        name="phoneNumber"
        placeholder="Số điện thoại"
        register={register}
        errors={errors}
      />

      <InputGroup
        type="password"
        name="pass"
        placeholder="Password"
        register={register}
        errors={errors}
      />

      <select {...register("gender")}>
        {console.log("««««« getValues »»»»»")}
        {GENDERS.map((g, index) => (
          <option
            key={g}
            value={g}
            style={{
              display:
                index === 0 && getValues("gender") !== undefined
                  ? "none"
                  : "block",
            }}
            disabled={index === 0 && getValues("gender") !== undefined}
          >
            {g}
          </option>
        ))}
      </select>

      <button type="submit" id="submit">
        LOGIN
      </button>
    </form>
  );
}

export default FormLogin2;
