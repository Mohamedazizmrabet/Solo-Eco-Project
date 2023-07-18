"use client"
import React,{useState,useContext} from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import {Mycontext} from '../layout'
import Link from "next/link";
import { useRouter } from 'next/navigation'
const SignIn: React.FC = () => {
  
  const route=useRouter()
  const {setValue}=useContext(Mycontext)
  const onFinish =async (values: any) => {
    try {
      console.log('Success:', values);
    const result= await axios.get(`http://localhost:3000/user/getOne/${values.username}/${values.password}`)
    console.log(result.data);
    setValue(result.data)
    route.push("/")
    } catch (error) {
      console.log(error);
      route.push("/404")

    }
  };
  console.log(setValue);
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (<Form
  name="basic"
  labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item className='text-white'
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>)
};

export default SignIn;