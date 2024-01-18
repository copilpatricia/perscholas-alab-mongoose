import express from "express";
// import { ObjectId } from "mongodb";
// import db from "../db/conn.js";
import Grade from "../models/grades.js"

const router = express.Router();

//Mongoose

router.get('/', async(req, res) => {
  const grades = await Grade.find({});
  res.status(200).json(grades)
})

router.get('/:id', async(req, res) => {
  const userId = req.params.id;
  
  const grades = await Grade.findById(userId);
  res.status(200).json(grades);
})

router.post('/', async(req, res) =>{
  const grades = await Grade.create(req.body);
  res.status(203).json(grades);
})


router.patch('/:id/scores/add', async (req, res) => {
  // find the grade to update
  const grades = await Grade.findOne({_id: req.params.id});
 
  if (!grades) return res.send('Grade not found!')
  // add the new score (req.body) to the scores array
  grades.scores.push(req.body);
  // save doc
  await grades.save();
  res.send(grades);

});
// router.delete("/:id", async(req, res) => {
//   const userId = req.params.id;
  
//   const grades = await Grade.deleteOne({userId});
//   res.status(200).json(grades);
// })


// router.get("/:id", async (req, res) => {
  // const collection = await db.collection("grades");

  // const query = { _id: new ObjectId(req.params.id) };

  // const result = await collection.findOne(query);


  // if (!result) res.send("Not found").status(404);
  // else res.send(result).status(200);
// });

// // POST ROUTE
// router.post('/', async(req, res) => {
//     const collection = await db.collection('grades')
//     const newDocument = req.body;
//     console.log(newDocument);

//     if(newDocument.student_id) {
//         newDocument.learner_id = newDocument.student_id;
//         delete newDocument.student_id;
//     }

//     const result = await collection.insertOne(newDocument);
//     res.send(result).status(204);
// })

// // GET REQUEST /student/:id

// router.get("/student/:id", async (req, res) => {
//   res.redirect(`/grades/learner/${req.params.id}`);
// });

// // GET /learner/:id

// router.get("/learner/:id", async (req, res) => {
//   const collection = await db.collection("grades");
//   let query = { learner_id: Number(req.params.id) };
//   let result = await collection.find(query).toArray();

//   if (!result) res.send("Not found").status(404);
//   else res.send(result).status(200);
// });

// // GET /class/:id

// router.get("/class/:id", async (req, res) => {
//   const collections = await db.collection("grades");
//   let query = { class_id: Number(req.params.id) };
//   let result = await collections.find(query).toArray();

//   if (result.length < 1) res.status(404).send("Not found");
//   else res.send(result).status(202);
// });


// //PATCH
// //add a score to a grade entry
// router.patch("/add/:id", async (req, res) => {
//     let collection = await db.collection("grades");
//     let query = {_id: new ObjectId(req.params.id)};
//     let result = await collection.updateOne(query, {
//         $push: {scores: req.body}
//     });

//     if (result.length < 1) res.status(404).send("Not found");
//     else res.send(result).status(200);
// });

// //remove a score from a grade entry
// router.delete("/remove/:id", async(req, res) => {
//     let collection = await db.collection("grades");
//     let query = {_id: new ObjectId(req.params.id)};
//     let result = await collection.updateOne(query, {
//         $pull: {scores: req.body}
//     });

//     if (result.length < 1) res.status(404).send("Not found");
//     else res.send(result).status(200);
// })

// //update the class_id

// router.patch("/class/:classId", async(req, res) => {
//     let collection = await db.collection("grades");
//     let query = {class_id: Number(req.params.classId)};
//     console.log(query)
//     let result = await collection.updateMany(query, {
//         $set: {class_id: req.body.class_id}
//     });

//     if (result.length < 1) res.status(404).send("Not found");
//     else res.send(result).status(200);
// })

// //delete a single grade entry



export default router;
