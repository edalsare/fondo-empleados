"use client";
import React from "react";
import axios from "axios";

var names: string, last_name: string, id_cliente: number, telephone: string,
correo: string, mensaje: string, asociado: string;

export const saveEmail = async () => {
  let register = {
    names,
    last_name, 
    id_cliente, 
    telephone,
    correo, 
    mensaje, 
    asociado
  };
  const headers = {
    "Access-Control-Allow-Origin": "*",
  };
  let res = await axios.post("http://localhost:8000/send_mail/save", register);
  let mail = await res.data;
};

export const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  if (e.target.id === "id") {
    id_cliente = Number(e.target.value);
  } else if (e.target.id === "name") {
    names = e.target.value;
  } else if (e.target.id === "lastname") {
    last_name = e.target.value;
  } else if (e.target.id === "tel") {
    telephone = e.target.value;
  }else if (e.target.id === "mail") {
    correo = e.target.value;
  }else if (e.target.id === "coment") {
    mensaje = e.target.value;
  }else if (e.target.id === "si") {
    asociado = e.target.value;
  }else if (e.target.id === "no") {
    asociado = e.target.value;
  }
};
