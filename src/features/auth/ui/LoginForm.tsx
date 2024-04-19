import { $postUser } from '@/entities/data/user-data/api/api';
import { useForm } from 'react-hook-form';
import { Button } from '@/shared/component/Button';
import React from 'react';
import Link from 'next/link';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = async (data: object) => {
    await $postUser.post('/login', data).then((res) => {});
    reset();
  };

  return (
    <div className={'flex justify-center items-center w-full h-full'}>
      <div className={'border border-black p-5 rounded-lg'}>
        <form
          method={'post'}
          className={'flex flex-col gap-5'}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <p>Login page</p>
          </div>
          <label className={'flex flex-col gap-1.5'}>
            <h1>Email</h1>
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
              className={'border border-black rounded-md p-2 outline-none'}
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
            <h1>Password</h1>
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
              className={'border border-black rounded-md p-2 outline-none'}
            />
            <div>
              {errors?.password && (
                <p className="text-red-500">
                  {errors?.password?.message?.toString() ||
                    'This field is required!'}
                </p>
              )}
            </div>
          </label>
          <input
            className={
              'border border-black rounded-md p-2 outline-none' +
              ` ${!isValid ? 'bg-gray-500' : 'hover:bg-grayTransparent cursor-pointer'}`
            }
            type="submit"
            disabled={!isValid}
          />
        </form>
        <div className={'h-full w-full justify-center flex mt-4'}>
          <Link href={'/registration'}>
            <Button
              setting={{
                styleButton: 'p-1 max-w-max h-fit',
                text: {
                  value: 'register page',
                },
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
