import express from 'express';
import { book } from '../models/bookdetails.js';

const router=express.Router();

router.post('/', async (req,res)=>{
    try{
      if(
        !req.body.title || !req.body.author ||!req.body.publishyear
      ){
        return res.status(400).send({
          message:"send all input field",
        })
      }
      const book1={
        title:req.body.title,
        author:req.body.author,
        publishyear:req.body.publishyear,
      };
      const book2=await book.create(book1);
      return res.status(201).send(book2);
  
    }catch(err){
      console.log(err.message)
      response.status(500).send({message:err.message})
    }
  })
  
  
  router.get('/', async (req,res)=>{
    try{
      const books=await book.find({});
      return res.status(200).send({
        count:books.length,
        data:books,
      });
    }catch(err){
      console.log(err.message)
      res.status(500).send({message:err.message})
    }
  })
  
  
  router.get('/:id', async (req,res)=>{
    try{
      const {id}=req.params;
      const book2=await book.findById(id);
      return res.status(200).send(book2);
    }catch(err){
      console.log(err.message)
      res.status(500).send({message:err.message})
    }
  })
  
  router.put('/:id', async (req,res)=>{
    try{
      if(
        !req.body.title || !req.body.author ||!req.body.publishyear
      ){
        return res.status(400).send({
          message:"send all input field",
        })
      }
      const {id}=req.params;
      const result=await book.findByIdAndUpdate(id,req.body);
      if(!result){
        return res.status(404).send({
          message:"book not found",
        })
      }
      return res.status(200).send({message:"book updated"});
    }catch(err){
      console.log(err.message)
      res.status(500).send({message:err.message})
    }
  
  })
  
  
  router.delete('/:id', async (req,res)=>{ 
    try{
      const {id}=req.params;
      const result=await book.findByIdAndDelete(id);
      if(!result){
        return res.status(404).send({
          message:"book not found",
        })
      }
      return res.status(200).send({message:"book deleted"});
    }catch(err){
      console.log(err.message)
      res.status(500).send({message:err.message})
    }
  })

    export default router;