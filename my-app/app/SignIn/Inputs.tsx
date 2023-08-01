
"use client"
import React,{useState} from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/navigation';
const Inputs: React.FC = () => {
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
 
  
  const onFinish =async (values: any) => {
    try {
      
      console.log('Success:', values);
    const result:typeof users= await axios.get(`http://localhost:3000/user/getOne/${values.username}/${values.password}`) 
    console.log(result);
    
    } catch (error) {
      console.log(error);
      
    }
  };

  return  (
  <Form
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

  </Form>
)
}

export default Inputs;