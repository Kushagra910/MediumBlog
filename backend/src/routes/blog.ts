import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import {sign,verify} from 'hono/jwt'
import { createBlogInput,updateBlogInput } from "@kushagra05/medium-common";

export const blogRouter = new Hono<{
  Bindings:{
    DATABASE_URL: string;
    JWT_SECRET : string;
  },
  Variables:{
    userId:string
  }
}>();

blogRouter.use("/*",async(c,next)=>{
  try{
    const token = c.req.header("Authorization") || "";
    const user = await verify(token,c.env.JWT_SECRET);
    if(user){
      c.set("userId",user.id);
      await next();
    }
    else {
      c.status(403);
      return c.json({
        message:"Empty User"
      })
    }
  }catch(err){
    c.status(500);
    return c.json({
      message:"You are not logged in"
    })
  }
})



//apply pagination first-10 then ...

blogRouter.get("/bulk", async(c) => {
  try{
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const blogs = await prisma.blog.findMany({
      select:{
        content:true,
        title:true,
        id : true,
        published:true,
        author:{
          select:{
            name : true
          }
        }
      }
    });
    c.status(200);
    return c.json({
      blogs,
      message:"Bulk blogs fetched"
    })
  } catch(err){
    c.status(500);
    return c.json({
      message:"Internal Server error"
    })
  }
});

blogRouter.get("/:id", async(c) => {
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try{
    const blog = await prisma.blog.findFirst({
      where:{
        id:Number(id)
      },
      select:{
        id:true,
        title : true,
        content : true,
        author : {
          select:{
            name:true
          }
        }
      }
    })
    c.status(200);
    return c.json({
      blog,
      message:"Blog Fetched successfully"
    })
  } catch(err){
    c.status(500);
    return c.json({
      message:"Error while Posting,retry"
    })
  }
});

blogRouter.post("/", async(c) => {
  const body = await c.req.json();
  const {success} = createBlogInput.safeParse(body);
  if(!success){
    c.status(411);
    return c.json({
      message:"invalid inputs"
    })
  }
  const authorId = c.get('userId');
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try{
    const blog = await prisma.blog.create({
      data:{
        title:body.title,
        content:body.content,
        authorId:Number(authorId)
      }
    })
    c.status(200);
    return c.json({
      id:blog.id,
      message:"Blog posted successfully"
    })
  } catch(err){
    c.status(500);
    return c.json({
      message:"Error while Posting,retry"
    })
  }
});

blogRouter.put("/", async(c) => {
  const body = await c.req.json();
  const {success} = updateBlogInput.safeParse(body);
  if(!success){
    c.status(411);
    return c.json({
      message:"invalid inputs"
    })
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try{
    const blog = await prisma.blog.update({
      where:{
        id:body.id
      },
      data:{
        title:body.title,
        content:body.content
      }
    })
    c.status(200);
    return c.json({
      id:blog.id,
      message:"Blog Updated successfully"
    })
  } catch(err){
    c.status(500);
    return c.json({
      message:"Error while Updating Post,retry"
    })
  }
});