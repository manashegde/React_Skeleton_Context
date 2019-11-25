import React, { Component } from "react";
import "react-dates/initialize";
import moment from "moment";
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from "react-dates";
import { ANCHOR_LEFT, ICON_AFTER_POSITION } from "react-dates/constants";
import "react-dates/lib/css/_datepicker.css";

export default class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(),
      focused: false
    };
  }

  render() {
    const { label, id, displayFormat, isOutsideRange } = this.props;
    return (
      <div className="field">
        {label && typeof label === "function" ? label() : label}
        <div className="control">
          <SingleDatePicker
            date={this.state.date} // momentPropTypes.momentObj or null
            onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
            focused={this.state.focused} // PropTypes.bool
            onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
            id={id} // PropTypes.string.isRequired,
            anchorDirection={ANCHOR_LEFT}
            numberOfMonths={1}
            //orientation = {VERTICAL_ORIENTATION}
            inputIconPosition={ICON_AFTER_POSITION}
            displayFormat={"YYYY-MM-DD"}
            noBorder={true}
            isOutsideRange={isOutsideRange}
            showDefaultInputIcon={true}
            hideKeyboardShortcutsPanel={true}
          />
        </div>
      </div>
    );
  }
}
