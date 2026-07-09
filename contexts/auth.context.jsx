"use client";
import { api } from "@/util/axios";
import { saveInLocalStorage } from "@/util/localstorage";
import { showError } from "@/util/toaster";
import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext();

import React from "react";

export const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [update, setUpdate] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const { data } = await api.get("/auth/getUser");
        if (!data?.data?.user) {
          showError("user not found");
        }
        setUser(data?.data?.user);
      } catch (err) {
        console.error(err.message);
      }
    };
    getCurrentUser();
  }, [update]);

  return (
    <AuthContext.Provider
      value={{ user, setUser, loading, setLoading, error, setError, setUpdate, setGoogleLoading, googleLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuths = () => useContext(AuthContext);
