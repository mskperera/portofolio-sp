import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import { FormGroup, Label, Button } from "reactstrap";
import "react-datepicker/dist/react-datepicker.css";

export default class PortDate extends React.Component {
  constructor(props) {
    super(props);

    const dateValue = props.initialDate ? moment(props.initialDate) : moment();
    const isHidden = props.initialDate ? false : true;

    this.state = {
      dateValue, //dateValue: dateValue,
      isHidden,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (date) => {
    const { setFieldValue, setFieldTouched } = this.props.form;
    const { name } = this.props.field;

    const formatedDte = date.format();
    this.setState({
      dateValue: date,
    });

    setFieldTouched(name, true, true);
    setFieldValue(name, date, true);
  };

  toggleDate = (date) => {
    const { setFieldValue, setFieldTouched } = this.props.form;
    const { name } = this.props.field;

    this.setState({
      isHidden: !this.state.isHidden,
    });

    setFieldValue(name, date, true);
    setFieldTouched(name, true, true);
  };

  render() {
    const {
      canBeDisabled,
      label,
      field,
      form: { touched, errors },
    } = this.props;

    const { isHidden, dateValue } = this.state;

    //const {touched,errors}=this.props.form;
    return (
      <FormGroup>
        <Label>{label}</Label>
        <div className="form-group">
          {!isHidden && (
            <DatePicker
              selected={this.state.dateValue}
              onChange={this.handleChange}
              showMonthDropdown
              showYearDropdown
              maxDate={moment()}
              dropdownMode="select"
            />
          )}
          {canBeDisabled && !isHidden && (
            <Button onClick={() => this.toggleDate(null)}>
              Still Working Here...
            </Button>
          )}

          {canBeDisabled && isHidden && (
            <React.Fragment>
              <span> Still Working Here...</span>
              <Button onClick={() => this.toggleDate(dateValue)}>
                Set End Date
              </Button>
            </React.Fragment>
          )}
          {touched[field.name] && errors[field.name] && (
            <div className="error">{errors[field.name]}</div>
          )}
        </div>
      </FormGroup>
    );
  }
}
