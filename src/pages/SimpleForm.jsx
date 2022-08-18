import React from "react";
import { withTheme } from "@rjsf/core";
import { Theme as MaterialUITheme } from "@rjsf/material-ui";
const Form = withTheme(MaterialUITheme);

function SimpleForm() {
    const [data, setData] = React.useState();

    const schema = {
    title: "Todo",
    type: "object",
    required: ["title", "description"],
    properties: {
        title: {
        type: "string",
        title: "Title",
        default: "",
        minLength: 1
        },
        description: {
        type: "string",
        title: "Description of task"
        },
        priority: {
        type: "string",
        title: "Priority",
        enum: ["Low", "Medium", "High"]
        },
        tags: {
        type: "array",
        title: "Related Projects",
        items: {
            type: "string",
            enum: ["ProjA", "ProjB"]
        },
        uniqueItems: true
        },
        done: { type: "boolean", title: "Done?", default: false }
    }
    };

    const uiSchema = {
    "ui:rootFieldId": "formOne",
    title: {
        validateOnBlur: true
    },
    description: {
        "ui:widget": "textarea",
        classNames: "task__description some-class"
    },
    tags: {
        "ui:widget": "checkboxes"
    }
    };

    const formData = {
    done: true
    };

    const onSubmit = ({ formData }) => {
        console.log("Data submitted: ", formData);
        setData(formData);
    }

    return (
        <div className="container">
            <Form schema={schema} uiSchema={uiSchema} formData={formData} data onSubmit={onSubmit} />
            <pre style={{fontSize: '20px'}}>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}

export default SimpleForm;

