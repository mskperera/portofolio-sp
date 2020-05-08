// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, FormGroup, Label, Alert } from "reactstrap";
import PortInput from "../form/PortInput";
import PortDate from "../form/PortDate";
import moment from "moment";

const validateInputs = (values) => {
  let errors = {};
  //console.log("PortfolioCreateForm :validateInputs ", values);
  const entries = Object.entries(values);
  entries.forEach(([key, value]) => {

    if (!value && key != "startDate" && key != "endDate") {
      errors[key] = `Field ${key} is required`;
    }
  });

  const startDate = moment(values.startDate);
  const endDate = moment(values.endDate);

  if (startDate && endDate && endDate.isBefore(startDate)) {
    errors.endDate = "End date can not be before start date!!!";
  }

  // Object.keys(values).forEach((key) => {
  //   if (!values[key]) {
  //     errors[key] = `Field ${key} is required`;
  //   }
  // });

  // if (!values.title) {
  //   errors.title = "Title is required";
  // }

  // if (!values.company) {
  //   errors.company = "Company is required";
  // }

  return errors;
};

const PortfolioCreateForm = ({ initialValues, onSubmit, error }) => (
  <div>
    <Formik
      initialValues={initialValues}
      validate={validateInputs}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="title" label="Title" component={PortInput} />

          <Field
            type="text"
            name="company"
            label="Company"
            component={PortInput}
          />

          <Field
            type="text"
            name="location"
            label="Location"
            component={PortInput}
          />

          <Field
            type="text"
            name="position"
            label="Position"
            component={PortInput}
          />

          <Field
            type="textarea"
            name="description"
            label="Description"
            component={PortInput}
          />

          {/* <Field name="startDate">
            {({
              field, // { name, value, onChange, onBlur }
              form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
              meta,
            }) => (
              <div>
                <DatePicker
                  selected={field.value}
                  onChange={(value)=>handleDateChange(value)}
                  showMonthDropdown
                  showYearDropdown
                  // maxDate={field.value.moment()}
            
                  dropdownMode="select"
                />

                {touched[field.name] && errors[field.name] && (
                  <div className="error">{errors[field.name]}</div>
                )}
              </div>
            )}
          </Field> */}

          <Field
            type="text"
            name="startDate"
            label="Start Date"
            initialDate={initialValues.startDate}
            component={PortDate}
          />

          <Field
            name="endDate"
            label="End Date"
            initialDate={initialValues.endDate}
            canBeDisabled={true}
            component={PortDate}
          />

          {error && <Alert color="danger">{error}</Alert>}
          <Button
            color="success"
            size="lg"
            type="submit"
            disabled={isSubmitting}
          >
            Create
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default PortfolioCreateForm;

// import React from "react";

// export default class PortfolioCreateForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { title: "", description: "", language: "" };

//     this.handleChange = this.handleChange.bind(this);

//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     const name = event.target.name;

//     this.setState({
//       [name]: event.target.value,
//     });
//   }

//   handleSubmit(event) {
//     alert(
//       "A name was submitted: " +
//         this.state.title +
//         "" +
//         this.state.description +
//         " " +
//         this.state.language
//     );
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input
//             name="title"
//             type="text"
//             value={this.state.title}
//             onChange={this.handleChange}
//           />
//         </label>

//         <label>
//           Description:
//           <textarea
//             name="description"
//             value={this.state.description}
//             onChange={this.handleChange}
//           />
//         </label>

//         <label>
//           Pick your favorite language:
//           <select
//             name="language"
//             value={this.state.language}
//             onChange={this.handleChange}
//           >
//             <option value="javascript">Javascript</option>
//             <option value="java">Java</option>
//             <option value="c++">C++</option>
//             <option value="c#">C#</option>
//           </select>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }
