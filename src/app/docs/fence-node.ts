import { Schema } from "@markdoc/markdoc";

export const fence: Schema = {
  render: "Fence",
  attributes: {
    language: {
      type: String,
    },
  },
};
