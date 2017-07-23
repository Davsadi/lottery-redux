import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createLotteryNumbers } from '../actions';

class NewNumbers extends Component {
    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `add-new-form form-group ${touched && error ? 'has-danger' : ''}`;
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type={field.type}
                    {...field.input}
                />
                <div className="text-help">{touched ? error : ''}</div>
            </div>
        );
    }

    onSubmit(values) {
        values.standardNumbers = values.standardNumbers.split(",");
        values.gameType = "SuperLotto Plus";
        this.props.createLotteryNumbers(values);
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Standard Numbers"
                    name="standardNumbers"
                    type="text"
                    component={this.renderField}
                />
                <Field
                    label="Bonus Number"
                    name="bonusNumber"
                    type="text"
                    component={this.renderField}
                />
                <Field
                    label="Draw Date"
                    name="drawDate"
                    type="text"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/lottery" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};
    if (!values.standardNumbers) {
        errors.standardNumbers = "Enter the standard numbers!";
    }
    if (!values.bonusNumber) {
        errors.bonusNumber = "Enter the bonus number!";
    }
    if (!values.drawDate) {
        errors.drawDate = "Enter the draw date!";
    }
    // If errors is empty, form will submit
    return errors;
}

export default reduxForm({
    validate,
    form: 'NewNumbersForm'
})(
    connect(null,{ createLotteryNumbers })(NewNumbers)
);
