import { ButtonAuth, NumberInput } from "@shared/ui/atoms";
import React, { FC, useRef } from "react";
import * as S from "./style";
import { useForm, SubmitHandler } from "react-hook-form";
import { AuthNumberFormProps } from "./types";

export const AuthNumberForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors, isValid },
    reset,
  } = useForm<AuthNumberFormProps>();
  const onSubmit: SubmitHandler<AuthNumberFormProps> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <S.AuthNumberForm onSubmit={handleSubmit(onSubmit)}>
      <S.LabelNumberInput>
        <S.Label>Номер телефона</S.Label>
        <NumberInput
          placeholder="+7 999 999-99-99"
          {...register("phoneNumber", {
            required: true,
            minLength: 11,
            maxLength: 12,
            pattern:
              /([\+]?[7|8][\s-(]?[9][0-9]{2}[\s-)]?)?([\d]{3})[\s-]?([\d]{2})[\s-]?([\d]{2})/,
          })}
        />
        {errors.phoneNumber?.type === "required" && (
          <p>Это обязательное поле!</p>
        )}
        {errors.phoneNumber?.type === "maxLength" && (
          <p>Номер слишком длинный!</p>
        )}
        {errors.phoneNumber?.type === "pattern" && (
          <p>Введите правильный номер!</p>
        )}
      </S.LabelNumberInput>
      <ButtonAuth isDisabled={!isValid} type={"submit"}>
        Выслать код
      </ButtonAuth>
    </S.AuthNumberForm>
  );
};
