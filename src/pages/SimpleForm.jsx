import React from "react";
// import Form from "@rjsf/core";
import { withTheme } from "@rjsf/core";
import { Theme as MaterialUITheme } from "@rjsf/material-ui";
const Form = withTheme(MaterialUITheme);

function SimpleForm() {
    const [data, setData] = React.useState();

    const schema = {
        title: "Simple Form Taking Personal Information",
        description: "This is a simple form taking personal information",
        type: "object",
        required: ['name', 'age'],
        properties: {
            name: {
                type: "string",
                title: "Name",
            },
            age: {
                type: "number",
                title: "Age",
                description: "Age in years, mimimum value is 16, maximum value is 100",
                minimum: 16,
                maximum: 100,
            },
            address: {
                type: "string",
                title: "Address",
                description: "Address of the person",
            },
            nationality: {
                type: 'string',
                title: 'Nationality',
                enum: ['Pakistani', 'Indian', 'Bandladeshi', 'Other']
            },
            dob: {
                type: "string",
                title: "Date of birth",
                format: "date",
            },
            education: {
                type: "array",
                title: "Education",
                description: "Education of the person, name of the degree and year of completion",
                items: {
                    type: "object",
                    properties: {
                        nameOfDegree: {
                            type: "string",
                            title: "Name of the degree",
                        },
                        nameOfSchool: {
                            type: "string",
                            title: "Name of the school",
                        },
                        yearOfCompletion: {
                            type: "number",
                            title: "Year of completion",
                            minimum: 1900,
                        },
                    },
                },
            },
        },
    };

    const uiSchema = {
        'ui:order': ['name', 'age','dob', 'education', 'nationality', 'address'],
        address: {
            "ui:widget": "textarea",
        },
    };

    const formData = {
        nationality: 'Pakistani'
    };

    const onSubmit = ({ formData }) => {
        console.log("Data submitted: ", formData);
        setData(formData);
    }

    return (
        <div className="container">
            <Form schema={schema} uiSchema={uiSchema} formData={formData} onSubmit={onSubmit} />
            <pre style={{fontSize: '20px'}}>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}

export default SimpleForm;

