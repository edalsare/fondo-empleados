"use client";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { User, UserContextState } from "../Types/user";

var usuario: string, password: string;


export const saveUser = async () => {
const router = useRouter();
  let login = {
    usuario,
    password,
  };
  const headers = {
    "Access-Control-Allow-Origin": "*",
  };
  let res = await axios.post("http://localhost:8000/register/login", login, {headers});
  let user = await res.data;
  if(user){
    router.push("/myhome")
  }
};

export const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  if (e.target.id === "usuario") {
    usuario = e.target.value;
  } else if (e.target.id === "contraseña") {
    password = e.target.value;
  }
};