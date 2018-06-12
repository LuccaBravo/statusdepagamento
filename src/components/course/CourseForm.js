import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import FieldInput from '../common/FieldInput';
import SelectInput from '../common/SelectInput';


export const CourseForm = ({ handleSubmit, pristine, reset, submitting, heading, authors, handleSave, handleCancel }) => {
    return (
        <form onSubmit={handleSubmit(handleSave)}>
            <h1>{heading}</h1>

            <Field
                type="text"
                name="title"
                label="Descrição"
                placeholder="Insira a descrição da peça ou serviço"
                component={FieldInput}
            />

            <Field
                name="authorId"
                label="Tipo"
                options={authors}
                component={SelectInput}
            />

            <Field
                type="text"
                name="category"
                label="Categoria"
                placeholder="Informe a catergoria"
                component={FieldInput}
            />

            <Field
                type="text"
                name="length"
                label="Quantidade"
                placeholder="Informe a quantidade"
                component={FieldInput}
            />

            <div>
                <button type="submit" disabled={submitting} className="btn btn-primary"><i className="fa fa-paper-plane-o" aria-hidden="true" /> Adicionar</button>

                {heading === 'Add' && <button type="button" disabled={pristine || submitting} onClick={reset} className="btn btn-default btn-space">Limpar Tudo</button>}

                <button type="button" className="btn btn-default btn-space" onClick={handleCancel}>Cancelar</button>
            </div>
        </form>
    );
};





const validate = values => {
    const errors = {};

    if (!values.title) {
        errors.title = 'Required';
    }

    if (!values.category) {
        errors.category = 'Required';
    }

    if (!values.length) {
        errors.length = 'Required';
    }

    if (!values.authorId) {
        errors.authorId = 'Required';
    }

    return errors;
};



CourseForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    reset: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    heading: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    handleSave: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired
};



export default reduxForm({
    form: 'CourseForm',
    validate
})(CourseForm);
