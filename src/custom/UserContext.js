
import {auth} from "../platform/firebase";
import axiosInstance from "../platform/axiosConfig";
import {useState, useEffect, createContext,useContext} from "react";
import { array, object } from "prop-types";



export const UserContext = createContext( object | undefined );
