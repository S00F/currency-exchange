import React, { useEffect, useState } from "react";
import "./App.css";
import {
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import { roundedNumber } from "./utils/Utils";
import usLogo from "./images/us.svg";
import eurLogo from "./images/eur.svg";
import Paper from "@mui/material/Paper";
import { rows } from "./utils/data";

function App() {
  const [rate, setRate] = useState(1.1);
  const [eur, setEur] = useState(1);
  const [usd, setUsd] = useState(1);
  const [eurToUsd, setEurToUsd] = useState(true);
  const [isPolling, setPolling] = useState(true);
  const [calculatedEur, setCalculatedEur] = useState(1);
  const [calculatedUsd, setCalculatedUsd] = useState(1);



  useEffect(() => {
    if (eurToUsd) {
      setCalculatedUsd(eur * rate);
    } else {
      setCalculatedEur(usd * rate);
    }
  }, [rate, eurToUsd, eur, usd]);

  useEffect(() => {
    if (isPolling) {
      const intervalID = setInterval(() => {
        const min = 1.05;
        const max = 1.15;
        const rand = roundedNumber(min + Math.random() * (max - min));
        setRate(rand);
      }, 3000);
      return () => clearInterval(intervalID);
    }
  }, [isPolling]);

  const handleChangeAmount = (e: any) => {
    if (eurToUsd) {
      setEur(e.target.value);
      setCalculatedUsd(eur * rate);
    } else {
      setUsd(e.target.value);
      setCalculatedEur(usd / rate);
    }
  };

  const handleChangeRate = (e: any) => {
    setPolling(false);
    setRate(e.target.value);
  };

  const handleClickSwitch = () => {
    setEurToUsd((eurToUsd) => !eurToUsd);
    if (eurToUsd) {
      setRate(1/rate)
      setCalculatedEur(eur);
      setUsd(calculatedUsd);
    } else {
      setRate(1/rate)
      setCalculatedUsd(usd);
      setEur(calculatedEur);
    }
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <body className="App-body">
        <div className="container">
          <div className="title">
            {eurToUsd ? (
              <h1>Convertir Euro en Dollar des États-Unis</h1>
            ) : (
              <h1>Convertir Dollar des États-Unis en Euro</h1>
            )}
          </div>

          <div className="white-box">
            {eurToUsd ? (
              <>
                <Grid item xs={12}>
                  <TextField
                    className="inputField"
                    type="number"
                    id="eur"
                    label="Taux de change"
                    variant="outlined"
                    value={rate}
                    onChange={handleChangeRate}
                    style={{ width: 200, marginBottom: 30 }}
                  />
                </Grid>
                <div className="eur-to-usd">
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <TextField
                        type="number"
                        id="eur"
                        label="EUR"
                        variant="outlined"
                        value={roundedNumber(eur)}
                        onChange={handleChangeAmount}
                        style={{ width: 300 }}
                        InputProps={{
                          endAdornment: (
                            <img
                              src={eurToUsd ? eurLogo : usLogo}
                              height={40}
                              width={40}
                              alt="icon"
                            />
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <IconButton
                        aria-label="switch"
                        size="large"
                        onClick={handleClickSwitch}
                      >
                        <ImportExportIcon fontSize="large" />
                      </IconButton>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        className="inputField"
                        type="number"
                        id="usd"
                        label="USD"
                        variant="outlined"
                        value={roundedNumber(calculatedUsd)}
                        style={{ width: 300 }}
                        slotProps={{
                          input: {
                            readOnly: eurToUsd,
                            endAdornment: (
                              <img
                                src={eurToUsd ? usLogo : eurLogo}
                                height={40}
                                width={40}
                                alt="icon"
                              />
                            ),
                          },
                        }}
                      />
                    </Grid>
                  </Grid>
                  <br />
                  <span className="memo">
                    1,00 € (Euro) = {rate} $ (Dollar des États-Unis){" "}
                  </span>
                </div>
              </>
            ) : (
              <>
                <Grid item xs={12}>
                  <TextField
                    className="inputField"
                    type="number"
                    id="eur"
                    label="Taux de change"
                    variant="outlined"
                    value={roundedNumber(rate)}
                    onChange={handleChangeRate}
                    style={{ width: 200, marginBottom: 30 }}
                  />
                </Grid>
                <div className="eur-to-usd">
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <TextField
                        type="number"
                        id="usd"
                        label="USD"
                        variant="outlined"
                        value={roundedNumber(usd)}
                        onChange={handleChangeAmount}
                        style={{ width: 300 }}
                        InputProps={{
                          endAdornment: (
                            <img
                              src={eurToUsd ? eurLogo : usLogo}
                              height={40}
                              width={40}
                              alt="icon"
                            />
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <IconButton
                        aria-label="switch"
                        size="large"
                        onClick={handleClickSwitch}
                      >
                        <ImportExportIcon fontSize="large" />
                      </IconButton>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        className="inputField"
                        type="number"
                        id="eur"
                        label="EUR"
                        variant="outlined"
                        value={roundedNumber(calculatedEur)}
                        style={{ width: 300 }}
                        slotProps={{
                          input: {
                            readOnly: !eurToUsd,
                            endAdornment: (
                              <img
                                src={eurToUsd ? usLogo : eurLogo}
                                height={40}
                                width={40}
                                alt="icon"
                              />
                            ),
                          },
                        }}
                      />
                    </Grid>
                  </Grid>
                  <br />
                  <span className="memo">
                    1,00 $ (Dollar des États-Unis) = {roundedNumber(1 / rate)} €
                    (Euro){" "}
                  </span>
                </div>
              </>
            )}
          </div>

        </div>
      </body>
    </div>
  );
}

export default App;
