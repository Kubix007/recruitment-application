import Datepicker from "react-datepicker";

const DatePickerField: React.FC<any> = ({ field, form, ...props }) => (
  <div>
    <Datepicker
      dateFormat="dd-MM-yyyy"
      {...field}
      selected={field.value}
      wrapperClassName="pickerData"
      onChange={(val) => form.setFieldValue(field.name, val)}
    />
  </div>
);

export default DatePickerField;
