import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import {sign,verify,decode} from 'hono/jwt'
import {signinInput,signupInput} from '@kushagra05/medium-common';


export const userRouter = new Hono <{
  Bindings:{
    DATABASE_URL: string;
    JWT_SECRET : string;
  }
}>();

userRouter.post("/signup", async (c) => {
  const body = await c.req.json();
  const {success} = signupInput.safeParse(body);
  if(!success) {
    c.status(411);
    return c.json({
      message:"Inputs are incorrect"
    })
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    // implement zod/password hashing
    const user = await prisma.user.create({
      data: {
        name: body.name,
        password: body.password,
        email: body.email,
      },
    });
    
    const jwt  = await sign({
      id:user.id
    },c.env.JWT_SECRET);
    return c.text(jwt);
  } catch (err) {
    c.status(411);
    return c.text("Error while taking input");
  }
});

userRouter.post("/signin", async (c) => {
  const body = await c.req.json();
  const {success} = signinInput.safeParse(body);
  if(!success) {
    c.status(411);
    return c.json({
      message:"Inputs are incorrect"
    })
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    // implement zod/password hashing
    const user = await prisma.user.findFirst({
      where: {
        password: body.password,
        email: body.email
      },
    });
    if(!user){
      c.status(403);
      return c.json({
        message:'SignIn Error ,User doesnot exist or InValid Credentials'
      });
    }
    const jwt  = await sign({
      id:user.id
    },c.env.JWT_SECRET);
    return c.text(jwt);
  } catch (err) {
    c.status(411);
    return c.text("Error while taking input");
  }
});
