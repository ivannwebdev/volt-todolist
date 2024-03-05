import { Checkbox as AntdCheckbox, Space } from 'antd'

function Checkbox({ checked, onChange, label }) {
  return (
    <Space>
      {label}
      <AntdCheckbox
        onChange={onChange}
        checked={checked}
      />
    </Space>
  )
}

export { Checkbox }
