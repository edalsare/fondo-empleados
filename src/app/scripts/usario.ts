"use client";
import React, { useContext } from "react";
import axios from "axios";

var clientId: number, usuario: string, email: string, password: string;

export const saveUser = async () => {
  let register = {
    clientId,
    usuario,
    email,
    password,
  };
  const headers = {
    "Access-Control-Allow-Origin": "*",
  };
  let res = await axios.post("http://localhost:8000/register/save", register);
  let user = await res.data;
};

export const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  if (e.target.id === "identificacion") {
    clientId = Number(e.target.value);
  } else if (e.target.id === "usuario") {
    usuario = e.target.value;
  } else if (e.target.id === "correo") {
    email = e.target.value;
  } else if (e.target.id === "contraseña") {
    password = e.target.value;
  }
};
