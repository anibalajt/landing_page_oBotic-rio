import React from "react";
import { Grid, FormLabel } from "@material-ui/core";

const steps = [
  {
    name: `crea tu grupo de amigos <b>secretos</b>`,
    icon:
      "https://www.summitfirc.org/wp-content/uploads/2016/10/volunteer-icon-23.png",
  },
  {
    name: `Todos escogen sus <b>opciones de regalo</b>`,
    icon: "https://www.summitfirc.org/wp-content/uploads/2018/08/targe.png",
  },
  {
    name: `Se realiza el <b>sorteo</b> de forma aleatoria`,
    icon:
      "https://www.summitfirc.org/wp-content/uploads/2019/02/conversation-1.png",
  },
  {
    name: `<b>Intercambia regalos</b> en la fecha acordada`,
    icon:
      "https://www.summitfirc.org/wp-content/uploads/2016/10/volunteer-icon-23.png",
  },
];
const Step = ({}) => {
  return (
    <>
      <Grid container spacing={24}>
        {steps.map(({ name, icon }, i) => (
          <Grid key={i} xs={6} md={3} item className="step">
            <div className="step_number">{i}</div>
            <div className="step_body">
              <FormLabel className="step_name">
                <div dangerouslySetInnerHTML={{ __html: name }} />
              </FormLabel>
              <div
                className="step_icon"
                style={{
                  backgroundImage: `url(${icon})`,
                }}
              ></div>
            </div>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default Step;
