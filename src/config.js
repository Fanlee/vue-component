export default [
  {
    sort: 1,
    type: "input",
    label: "手机号",
    formKey: "phone",
    disabled: true,
    value: "18200129569"
  },
  {
    sort: 2,
    type: "input",
    label: "姓名",
    formKey: "username",
    rules: [{ required: true, message: "姓名不能为空!" }]
  },
  {
    sort: 3,
    type: "radio",
    label: "城市",
    value: 0,
    formKey: "city",
    optionData: [
      { label: "是", value: 1 },
      { label: "否", value: 0 }
    ]
  },
  {
    sort: 4,
    type: "textarea",
    label: "多行文本",
    value: "",
    formKey: "area"
  },
  {
    sort: 5,
    type: "a-select",
    label: "活动区域",
    formKey: "area",
    value: "area1",
    options: {
      multiple: true
    },
    optionData: [
      // 这里模拟去后端拉回数据
      { label: "区域1", value: "area1" },
      { label: "区域2", value: "area2" }
    ]
  }
];
