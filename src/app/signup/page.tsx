'use client';
import React, { useState } from "react";
import * as actions from '@/actions/user/create-user'
import { useFormState } from "react-dom";

export default function SignUpUser() {

  const [formState, action] = useFormState(actions.createUser, {message : ""})
    

    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
          <h2 className="text-2xl font-bold text-center mb-6">회원가입</h2>
          <form className="space-y-4" action={action}>
            <input
              type="email"
              name="email"
              placeholder="이메일"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            
            />
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="비밀번호 확인"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formState.message ? <div className='my-2 p-2 bg-red-200 border rounded border-red-400'>{formState.message}</div> : null}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
            >
              회원가입
            </button>
          </form>
          <p className="text-center text-gray-500 mt-4">
            이미 계정이 있으신가요?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              로그인
            </a>
          </p>
        </div>
      </div>
    );
  }
  
