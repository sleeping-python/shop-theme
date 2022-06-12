import React, { Component } from "react";
import "react-dates/initialize";
import { DayPickerRangeController } from "react-dates";
import CustomizableCalendarDay from "react-dates/lib/components/CustomizableCalendarDay.js";
import "react-dates/lib/css/_datepicker.css";
// import "./styles";

const START_DATE = "startDate";
const END_DATE = "endDate";

const hoveredStyles = {
  background: "#ff9497",
  border: "1px solid #ff9497",
  color: "#fff"
};

const selectedStyles = {
  background: "#ff5a5f",
  border: "1px solid #ff5a5f",
  color: "#fff",

  hover: {
    background: "#bc6e70",
    border: "1px solid #bc6e70",
    color: "#555"
  }
};

const selectedSpanStyles = {
  background: "#ff5a5f",
  border: "1px solid #ff5a5f",
  color: "#fff",

  hover: {
    background: "#bc6e70",
    border: "1px solid #bc6e70",
    color: "#fff"
  }
};

const customDayStyles = {
  selectedStartStyles: selectedStyles,
  selectedEndStyles: selectedStyles,
  hoveredSpanStyles: hoveredStyles,
  selectedSpanStyles,
  selectedStyles: Object.assign({}, selectedStyles, {
    background: "#ff9497",
    border: "1px solid #ff9497"
  })
};

//this is the component i'm using in the rest of my app
export default class TripDatePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focusedInput: props.autoFocusEndDate ? END_DATE : START_DATE,
      startDate: props.startDate,
      endDate: props.endDate
    };
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate });
    this.props.handleDateChange({ startDate, endDate });
  };

  onFocusChange = focusedInput => {
    this.setState({
      // Force the focusedInput to always be truthy so that dates are always selectable
      focusedInput: !focusedInput ? START_DATE : focusedInput
    });
  };

  clearDateSelection = () => {
    this.setState({
      startDate: null,
      endDate: null
    });
  };

  setDateSelection = () => {
    this.setState({
      showDatePicker: false
    });
  };

  renderControls = () => {
    return (
      <section className="calendar_controls">
        <span onClick={this.clearDateSelection}>Clear</span>
        <span onClick={this.setDateSelection}>Apply</span>
      </section>
    );
  };

  render() {
    const { showInputs } = this.props;
    const { focusedInput, startDate, endDate } = this.state;

    const startDateString = startDate && startDate.format("MMM D");
    const endDateString = endDate && endDate.format("MMM D");
    const dateRangeString =
      startDate && endDate
        ? `${startDateString} - ${endDateString}`
        : "Choose a date range";

    return (
      <div className="trip_date_picker search__text">
        {showInputs && (
          <div className={`input_label ${!endDate && "placeholder"} `}>
            {/* <Icon type="calendar" size="18" /> */}
            <label
              onClick={() =>
                this.setState({ showDatePicker: !this.state.showDatePicker })
              }
            >
              {dateRangeString}
            </label>
          </div>
        )}

        {this.state.showDatePicker && (
          <DayPickerRangeController
            {...this.props}
            onFocusChange={this.onFocusChange}
            onDatesChange={this.onDatesChange}
            focusedInput={focusedInput}
            startDate={startDate}
            endDate={endDate}
            keepOpenOnDateSelect={false}
            enableOutsideDays={false}
            hideKeyboardShortcutsPanel={true}
            numberOfMonths={2}
            onOutsideClick={() => this.setState({ showDatePicker: false })}
            renderCalendarDay={props => (
              <CustomizableCalendarDay {...props} {...customDayStyles} />
            )}
            renderCalendarInfo={this.renderControls}
          />
        )}
      </div>
    );
  }
}
