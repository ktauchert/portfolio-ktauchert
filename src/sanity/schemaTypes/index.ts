import { type SchemaTypeDefinition } from "sanity";
import { heroPage } from "./heroPage";
import { buttonType } from "./buttonType";
import { aboutPage } from "./aboutPage";
import { careerPage } from "./careerPage";
import { projectPage } from "./projectPage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [buttonType, heroPage, aboutPage, careerPage, projectPage],
};
