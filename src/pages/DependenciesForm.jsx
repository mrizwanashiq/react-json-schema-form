import React from "react";
import Form from "@rjsf/core";

const schema = {
  title: "Demo for countries",
  type: "object",
  properties: {
    country: {
      type: "string",
      title: "Country",
      enum: ["Pakistan", "India", "China", "USA", "Russia"],
    }
  },
  dependencies: {
    country: {
      oneOf: [
        {
          properties: {
            country: {
              enum: ["Pakistan"]
            },
            province: {
              type: "string",
              title: "Province",
              enum: ["Punjab", "Sindh", "Balochistan", "KPK", "Gilgit Baltistan"]
            }
          },
        },
        {
          properties: {
            country: {
              enum: ["India"]
            },
            province: {
              type: "string",
              title: "State",
              enum: ["Andhra Pradesh", "Telangana", "Karnataka", "Tamil Nadu", "Kerala"]
            }
          }
        },
        {
          properties: {
            country: {
              enum: ["China"]
            },
            province: {
              type: "string",
              title: "State",
              enum: ["Beijing", "Shanghai", "Tianjin", "Hebei", "Shanxi"]
            }
          }
        },
        {
          properties: {
            country: {
              enum: ["USA"]
            },
            province: {
              type: "string",
              title: "State",
              enum: ["California", "New York", "Texas", "Florida", "Illinois"]
            }
          }
        },
        {
          properties: {
            country: {
              enum: ["Russia"]
            },
            province: {
              type: "string",
              title: "State",
              enum: ["Moscow", "Saint Petersburg", "Novosibirsk", "Yaroslavl", "Krasnoyarsk"]
            }
          }
        }
      ]
    }
  }
};

const onsubmit = (event) => {
  console.log(event);
  alert(JSON.stringify(event.formData));
};

export default function App() {
  return (
    <div className="App">
      <h1>Dropdown dependencies with JSON schemas</h1>
      <Form schema={schema} onSubmit={onsubmit} />
    </div>
  );
}
