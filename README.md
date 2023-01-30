# React JSON Schema Form
I am using React and JSON Schema Form to create a form that validates the data. The form is created using JSON Schema. The form is then rendered using React JSON Schema Form. 


First of all, let's install the dependencies.

```bash
npm install
```

Now we can start the application.

```bash
npm start
```

# What is React JSON Schema Form?
React JSON Schema Form is a library that allows you to create forms using JSON Schema. It is a React component that allows you to create forms using JSON Schema. 

## Installation

```bash
npm install @rjsf/core
```

There are many other packages as well like `react-jsonschema-form` and `react-jsonschema-form-validation-mixin` that you can use to create your form with JSON Schema.


## Usage
First of all we need to import the library.

```jsx
import Form from "@rjsf/core";
```

Now we can use Form to create a form.

```jsx
<Form schema={schema} uiSchema={uiSchema} formData={formData} onSubmit={onSubmit} />
```

For now I am just using schema, uiSchema and formData, and onSubmit. You can see the documentation for these properties in the [React JSON Schema Form documentation]().

Now I will explain each property in detail, with an example.

## schema
The schema property is the JSON Schema that is used to create the form.

```jsx
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
```

## uiSchema
The uiSchema property is the JSON Schema that is used to create the form.

```jsx
const uiSchema = {
    'ui:order': ['name', 'age','dob', 'education', 'nationality', 'address'],
    address: {
        "ui:widget": "textarea",
    },
};
```

## formData
This is use to assign default value to form

```jsx
const formData = {
    nationality: 'Pakistani'
};
```

## onSubmit 
```jsx
const onSubmit = ({ formData }) => {
    console.log("Data submitted: ", formData);
    setData(formData);
}
```

Form Will look like this
![image](https://user-images.githubusercontent.com/27571455/185586041-c5bacd85-4a67-4c30-8507-fc5d36579ac9.png)

