import React from 'react';
import { Icon } from 'antd';

import {
  Checkbox,
  Input,
  AutoComplete,
  Cascader,
  DatePicker,
  InputNumber,
  Form,
  Radio,
  Rate,
  Select,
  Slider,
  Switch,
  TimePicker,
  Transfer,
  TreeSelect,
  ResetButton,
  SubmitButton,
} from 'components/AntFormik';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
};

const mockData: any[] = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
    disabled: i % 3 < 1,
  });
}

const SampleForm: React.FC<any> = () => {
  return (
    <Form {...formItemLayout}>
      <Input name="first_name" label="First name" type="text" placeholder="Enter your Username" />
      <Input name="number-true" label="Im  number" type="text" placeholder="Enter your Password" />
      <Input.Password name="password" label="Password" type="password" placeholder="Enter your Password" />
      <Input.TextArea name="comments" label="Comments" placeholder="Enter your Comments" />
      <Cascader
        name="country"
        label="Country"
        placeholder="Please select"
        options={[
          {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
              {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                  {
                    value: 'xihu',
                    label: 'West Lake',
                  },
                ],
              },
            ],
          },
          {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
              {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                  {
                    value: 'zhonghuamen',
                    label: 'Zhong Hua Men',
                  },
                ],
              },
            ],
          },
        ]}
      />
      <AutoComplete
        label="Select your Fruits"
        name="fruits_search"
        dataSource={['Apple', 'Pear', 'Orange', 'Mango', 'Pineapple', 'Peach', 'Banana', 'Strawberry', 'Lemon']}
        style={{ width: 200 }}
        placeholder="input here"
      />
      <Checkbox label="Select" name="status">
        Status
      </Checkbox>
      <Checkbox.Group
        label="Select your Fruits"
        name="fruits_select"
        options={[
          { label: 'Apple', value: 'Apple' },
          { label: 'Pear', value: 'Pear' },
          { label: 'Orange', value: 'Orange' },
        ]}
      />
      <DatePicker
        name="date"
        label="Date"
        format="YYYY-MM-DD"
        suffixIcon={<Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />}
      />
      <DatePicker.MonthPicker name="month" label="Month" />
      <DatePicker.WeekPicker name="week" label="Week" />
      <DatePicker.RangePicker name="range-date" label="Start - End" />
      <InputNumber name="currency" label="currency" type="number" />
      <Radio.Group
        name="favorite_fruit"
        label="favorite"
        options={[
          { label: 'Apple', value: 'Apple' },
          { label: 'Pear', value: 'Pear' },
          { label: 'Orange', value: 'Orange' },
        ]}
      />
      <Radio.Group name="my_place" label="Please Select" size="large" buttonStyle="solid">
        <Radio.Button value="Hangzhou">Hangzhou</Radio.Button>
        <Radio.Button value="Shanghai">Shanghai</Radio.Button>
      </Radio.Group>
      <Rate name="rate" label="Rate Me" />
      <Select name="my_crush" label="My Crush" style={{ width: 120 }}>
        <Select.Option value="jack">Jack</Select.Option>
        <Select.Option value="lucy">Lucy</Select.Option>
        <Select.Option value="disabled" disabled>
          Disabled
        </Select.Option>
        <Select.Option value="Yiminghe">yiminghe</Select.Option>
      </Select>
      <Slider name="price" label="Price" tooltipVisible />
      <Slider name="price_range" label="Range Price" range />
      <Switch name="sex" label="Sex" unCheckedChildren="Male" checkedChildren="Female" />

      <TimePicker name="time" label="Time" use12Hours format="h:mm a" />

      <Transfer
        dataSource={mockData}
        name="myFile"
        label="Upload File"
        titles={['Source', 'Target']}
        render={item => item.title}
      />

      <TreeSelect
        name="tree_select"
        label="Tree Select"
        style={{ width: 300 }}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        treeData={[
          {
            title: 'Node1',
            value: '0-0',
            key: '0-0',
            children: [
              {
                title: 'Child Node1',
                value: '0-0-1',
                key: '0-0-1',
              },
              {
                title: 'Child Node2',
                value: '0-0-2',
                key: '0-0-2',
              },
            ],
          },
          {
            title: 'Node2',
            value: '0-1',
            key: '0-1',
          },
        ]}
        placeholder="Please select"
        treeDefaultExpandAll
      />

      <SubmitButton>submit</SubmitButton>
      <ResetButton>Reset</ResetButton>
    </Form>
  );
};

export default SampleForm;
