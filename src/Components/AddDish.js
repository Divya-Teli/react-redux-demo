import { UserOutlined } from "@ant-design/icons";
import React from "react";
import "../assets/add.css";
import { Select } from "antd";
import { Form, Input, InputNumber, Button, Upload } from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { addItem } from "../redux/actions/ItemActions";
import { Component } from "react";
var uniqid = require('uniqid');

const { Option } = Select;
const layout = {
  labelCol: {
    span: 3,
  },
  wrapperCol: {
    span: 20,
  },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
};

class AddDish extends Component {
  constructor(){
    super()
  
    
  }
  onFinish = (values) => {
    this.props.addItem({...values,id:uniqid()});
   
  };
  render() {
    return (
      <section className="mx-auto w-75" style={{ backgroundColor: "#bfd2da" }}>
        <header className="text-center h-5 font-weight-bold mb-5">
          Add Category
        </header>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={this.onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name= "name"
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="price"
            label="price"
            rules={[
              {
                type: "number",
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            name="category"
            label="Select"
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please select category!",
              },
            ]}
          >
            <Select placeholder="Please select category">
              <Option value="tea">Tea</Option>
              <Option value="coffee">Coffee</Option>
              <Option value="drink">Drink</Option>
              <Option value="junkfood">JunkFood</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name= "description"
            label="Description"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 11 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </section>
    );
  }
}
const mapDispatchToProps = {
  addItem,
  
};
export default connect(null, mapDispatchToProps)(AddDish);
