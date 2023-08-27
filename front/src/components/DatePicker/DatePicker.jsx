import { DatePicker, Space } from "antd";

export default function DatePickerElement({ setTimestart, setTimeend }) {
  const { RangePicker } = DatePicker;

  const onChange = (value, dateString) => {
    const startTime = new Date(dateString[0]);
    const endTime = new Date(dateString[1]);

    const startSeconds = Math.floor(startTime.getTime() / 1000);
    const endSeconds = Math.floor(endTime.getTime() / 1000);

    setTimestart(startSeconds);
    setTimeend(endSeconds);
  };
  //   const onOk = (value) => {
  //     setStart(dateString[0]);
  //     setEnd(dateString[1]);
  //   };
  return (
    <Space direction="vertical" size={12}>
      <RangePicker
        showTime={{
          format: "HH:mm",
        }}
        format="YYYY-MM-DD HH:mm"
        onChange={onChange}
        style={{ width: "100%" }}
        // onOk={onOk}
      />
    </Space>
  );
}
