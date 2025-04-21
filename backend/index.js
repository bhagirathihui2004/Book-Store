import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
// import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js"
import cors from 'cors';
const app = express();


// Middleware for parsing request body
//Option 1: Allow all origins with default of cors(*)
app.use(express.json());
//option 2: Allow Custom origins
/*
    app.use(
        cors({
            origin: 'http://localhost:3000',
            methods: ['GET','POST','PUT','DELETE'],
            allowedHeaders: ['Content-Type'],
        })
    )
*/

//Middleware for handling CORS POLICY
app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Hey this is shreya");
});

app.use('/books',booksRoute);

// app.post("/books", async (request, response) => {
//   try {
//     if (
//       !request.body.title ||
//       !request.body.author ||
//       !request.body.publishYear
//     ) {
//       return response.status(400).send({
//         message: "Send all required fields: title, author, publishYear",
//       });
//     }

//     const newBook = {
//       title: request.body.title,
//       author: request.body.author,
//       publishYear: request.body.publishYear,
//     };

//     const book = await Book.create(newBook);
//     return response.status(201).send(book);
//   } catch (error) {
//     console.log(error.message);
//     response.status(500).send({ message: error.message });
//   }
// });

// app.get("/books", async (request, response) => {
//   try {
//     const books = await Book.find({});

//     return response.status(200).json({
//       count: books.length,
//       data: books,
//     });
//   } catch (error) {
//     console.log(error.message);
//     response.status(500).send({ message: error.message });
//   }
// });

// //Route for Get One Book from Database by id
// app.get("/books/:id", async (request, response) => {
//   try {
//     const { id } = request.params;
//     const book = await Book.findById(id);

//     return response.status(200).json(book);
//   } catch (error) {
//     console.log(error.message);
//     response.status(500).send({ message: error.message });
//   }
// });

// //route for Update a Book
// app.put("/books/:id", async (request, response) => {
//   try {
//     if (
//       !request.body.title ||
//       !request.body.author ||
//       !request.body.publishYear
//     ) {
//       return response.status(400).send({
//         message: "Send all required fields: title, author, publishYear",
//       });
//     }

//     const { id } = request.params;

//     const result = await Book.findByIdAndUpdate(id, request.body);
//     if (!result) {
//       return response.status(404).json({ message: "Book not found" });
//     }

//     return response.status(200).send({ message: "Book updated successfully" });
//   } catch (error) {
//     console.log(error.message);
//     response.status(500).send({ message: error.message });
//   }
// });

// //route for deleteing a book
// app.delete("/books/:id", async (request, response) => {
//   try {
//     const { id } = request.params;

//     const result = await Book.findByIdAndDelete(id);

//     if (!result) {
//       return response.status(404).json({ message: "Book not found" });
//     }
//     return response.status(500).send({ message: "Book successfully deleted" });
//   } catch (error) {
//     console.log(error.message);
//     response.status(500).send({ message: error.message });
//   }
// });

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to db");
    app.listen(PORT, () => {
      console.log(`App is listening to the port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
