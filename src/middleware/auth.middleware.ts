import { NextFunction ,Request,Response} from "express";
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
const generateUniqueId = require('generate-unique-id');

const jwtService = new JwtService({
    secret: process.env.JWT_SECRET, // make sure this matches your app's JWT secret
  });

    export function authMIddleware(req:Request,res:Response,next: NextFunction){
        
        const authheader = req.header('authorization')
        
        
        let token
        if(authheader != null){
             token = authheader;

        }

        try {
          const decoded = jwtService.verify(token);
         // console.log(decoded.sub); // which is my id 
         const id = generateUniqueId();
          (req as any).userID = decoded.sub;
          (req as any).vID = id;
          next();
        } catch (error) {
          return res.status(403).json({ message: 'Invalid or expired token' });
        }
          
         
       
     
        //console.log(`Incoming Request ${req.method} ${req.url} `)
    


    }