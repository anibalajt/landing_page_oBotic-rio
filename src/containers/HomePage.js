import React, { useEffect, useState } from "react";
import {
  Grid,
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@material-ui/core";

import Spotlight from "../components/Spotlight";
import Steps from "../components/step";

const HomePage = ({}) => {
  const [people, setPeople] = useState(2);
  useEffect(() => {}, []);

  return (
    <div className="HomePage">
      <Spotlight />
      <div className="backgroud-steps wrapper row">
        <div className="steps">
          <Steps />
        </div>
      </div>
      <div className="wrapper row">
        <div className="wrapperForm">
          <div className="header">
            <Grid container spacing={3}>
              <Grid xs={6} md={9} item>
                <h1 className="title">
                  <b>Crea</b> tu Grupo
                </h1>
                <p className="subTitle">
                  Al el <b>sorteo todos recibirán un e-mail</b> con las opciones
                  de regalo de su amigo secreto correspondiente.
                </p>
              </Grid>
              <Grid item>
                <div
                  className="bgImg"
                  style={{
                    backgroundImage:
                      'url("https://www.summitfirc.org/wp-content/uploads/2016/10/volunteer-icon-23.png")',
                  }}
                ></div>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="formControl principal">
          <div>
            <Grid container spacing={3}>
              <Grid md={4} item>
                <TextField
                  id="standard-full-width"
                  label="Tu nombre:"
                  style={{ margin: 8 }}
                  // placeholder="Tu nombre"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid md={4} item>
                <TextField
                  id="standard-full-width"
                  label="Tu apellido:"
                  style={{ margin: 8 }}
                  // placeholder="Tu apellido"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid md={4} item>
                <TextField
                  id="standard-full-width"
                  label="Tu correo:"
                  style={{ margin: 8 }}
                  // placeholder="Tu correo"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid md={4} item>
                <TextField
                  id="standard-full-width"
                  label="Nombre del grupo:"
                  style={{ margin: 8 }}
                  // placeholder="Nombre del grupo"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid md={4} item>
                <TextField
                  className="select"
                  style={{ width: "100%" }}
                  label="Fecha de entrefa de regalos:"
                  type="date"
                  defaultValue="2017-05-24"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid md={4} item>
                <TextField
                  className="select"
                  style={{ width: "100%" }}
                  label="Fecha del sorteo automático:"
                  type="date"
                  defaultValue="2017-05-24"
                  // className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid md={4} item>
                <FormControl style={{ width: "100%" }} className="select">
                  <InputLabel id="label-value">Valor del regalo:</InputLabel>
                  <Select
                    labelId="label-value"
                    id="value-select"
                    value={""}
                    onChange={() => {}}
                  >
                    <MenuItem value={10}>menor de $20.000</MenuItem>
                    <MenuItem value={20}>de $20.000 a $100.000</MenuItem>
                    <MenuItem value={30}>de $100.000 a $200.000</MenuItem>
                    <MenuItem value={40}>minimo de $200.000</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid md={8} item>
                <TextField
                  id="standard-full-width"
                  label="Deja un mensaje personalizado:"
                  style={{ margin: 8 }}
                  // // placeholder="Placeholder"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="formControl otherPeople">
          <div>
            {[...Array(people)].map((person, i) => {
              return (
                <Grid container md={8} spacing={3}>
                  <Grid md={6} item>
                    <TextField
                      id="standard-full-width"
                      label={`Nombre (Participante ${i + 2}):`}
                      style={{ margin: 8 }}
                      // placeholder="Tu nombre"
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid md={6} item>
                    <TextField
                      id="standard-full-width"
                      label="Correo:"
                      style={{ margin: 8 }}
                      // placeholder="Tu correo"
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                </Grid>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
