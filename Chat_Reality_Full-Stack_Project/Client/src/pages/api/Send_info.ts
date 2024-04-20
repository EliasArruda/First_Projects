import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "./lib/prisma";

export default async function handle (req:NextApiRequest,res:NextApiResponse)
{
  const { method } = req;
  const { User , email , senha } = req.body;
  const { requestInfo } = req.body;

  switch(method)
  {
    case "GET":
    {
      res.end();
      break;
    }

    case "POST":
    {

      if(await requestInfo)
      {
        await prisma.userInformation.create
        ({
          data:
          {
            Usuario: User,
            Email: email,
            Senha: senha
          }
        })
        res.end();
      }
      break;
    }
  }
}