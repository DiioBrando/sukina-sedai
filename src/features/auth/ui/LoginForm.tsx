import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@/shared/component/Button';
import React from 'react';
import Link from 'next/link';
import { ILogin } from '@/entities/models/IAuth';
import { useAppContext } from '@/shared/context/page';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const store = useAppContext();
  const login = store((state) => state.login);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<ILogin>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<ILogin> = async (data): Promise<void> => {
    await login(data.email, data.password);
    reset();
  };

  return (
    <div className={'flex justify-center items-center w-full h-full'}>
      <div>
        <form
          method={'post'}
          className={'flex flex-col gap-5'}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <h1 className={'text-2xl text-center mr-3'}>Login</h1>
          </div>
          <label className={'flex flex-col gap-1.5'}>
            <h2>Email</h2>
            <input
              type="email"
              placeholder="email"
              {...register('email', {
                required: true,
                pattern: /^\S+@\S+$/i,
                maxLength: {
                  value: 256,
                  message: 'max length email 256 symbols',
                },
                minLength: {
                  value: 2,
                  message: 'max length email 2 symbols',
                },
              })}
              className={
                'shadow-customInner shadow-gray-200 rounded-md p-2 outline-none dark:bg-slate-900'
              }
            />
            <div>
              {errors?.email && (
                <p className={'text-red-500'}>
                  {errors?.email?.message?.toString() ||
                    'This field is required!'}
                </p>
              )}
            </div>
          </label>
          <label className={'flex flex-col gap-1.5'}>
            <h2>Password</h2>
            <input
              type="password"
              placeholder="password"
              {...register('password', {
                required: true,
                maxLength: {
                  value: 20,
                  message: 'max length symbols 20',
                },
                minLength: {
                  value: 8,
                  message: 'min length symbols 8',
                },
              })}
              className={
                'shadow-customInner shadow-gray-200 rounded-md p-2 outline-none dark:bg-slate-900'
              }
            />
            <div>
              {errors?.password && (
                <p className={'text-red-500'}>
                  {errors?.password?.message?.toString() ||
                    'This field is required!'}
                </p>
              )}
            </div>
          </label>
          <input
            className={
              'shadow-customInner shadow-gray-200 rounded-md p-2 outline-none' +
              ` ${!isValid ? 'bg-gray-400' : 'hover:bg-grayTransparent cursor-pointer'}`
            }
            type={'submit'}
            disabled={!isValid}
          />
        </form>
        <div className={'h-full w-full justify-center flex mt-4'}>
          <Link href={'/registration'}>
            <Button
              setting={{
                styleButton: 'p-1 max-w-max h-fit',
                text: {
                  value: 'Sign Up',
                },
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
