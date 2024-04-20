import { NextApiRequest, NextApiResponse } from "next";
import NextCors from 'nextjs-cors';
import { prisma } from "./lib/prisma";
import * as fs from 'fs'

export default async function handle(req:NextApiRequest,res:NextApiResponse)
{

    await NextCors(req, res, {
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
     });

     const { method } = req;
     const {  email , senha } = req.body;

    const info = await prisma.userInformation.findMany
    ({
        where: 
        {
           Email: `${email}`,
           Senha: `${senha}`
        },
        
        select: 
        {
          Usuario: true,
        },
    })

    switch(method)
    {
        case 'GET':
        {

            res.redirect('http://localhost:3001/')
            res.end();
            break;
        }

        case 'POST':
        {
            if(info.length == 1)
            {
                res.redirect('http://localhost:3001/')
            }
        }
    }
}