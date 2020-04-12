import React, { Component } from "react";
import { 
  Icon, 
  Menu, 
  Input,
  Button,
  Dropdown,
} from 'semantic-ui-react';

const options = [
  {
    key: 'user',
    text: (
      <span>
        پروفایل <strong>مهدی رضایی</strong>
      </span>
    ),
    disabled: true,
  },
  { key: 'messages', text: 'پیغام ها' },
  { key: 'contents', text: 'مطالب شما' },
  { key: 'help', text: 'راهنمایی' },
  { key: 'settings', text: 'تنظیمات' },
  { key: 'sign-out', text: 'خروج' },
];

export default class App extends Component {
  render() {
    return (
      <Menu 
        stackable  
        attached='top' 
        style={{justifyContent: "space-between"}}
        borderless
        >

          <Menu.Menu>
            <Menu.Item>
              <Dropdown
              trigger={<Icon name='user' size="large"/>}
              options={options}
            />
            </Menu.Item>
          </Menu.Menu>

          <Menu.Menu>
            <Menu.Item  position="left">
              <Input icon='search' placeholder='جستجو' />
            </Menu.Item>
          </Menu.Menu>

          <Menu.Item>
            <Button color="red">
              سوال بپرسید
            </Button>
          </Menu.Item>

          <Menu.Menu>
            <Menu.Item
              name="bookmark"
              onClick={() => {}}
            >
              نشان شده
              <Icon size='large' name='bookmark' />
            </Menu.Item>
            <Menu.Item
              name="answer"
              onClick={() => {}}
            >
              پاسخ
              <Icon size='large' name='crosshairs' />
            </Menu.Item>
            <Menu.Item
              name="home"
              active="true"
              onClick={() => {}}
            >
              خانه
              <Icon size='large' name='home' />
            </Menu.Item>
          </Menu.Menu>

          <Menu.Menu>
            <Menu.Item position="right">
              <h3 style={{margin: "0 20px"}}>L30D</h3>
              <img src='./images/school.png' />
            </Menu.Item>
          </Menu.Menu>
        
      </Menu>
    );
  }
}
