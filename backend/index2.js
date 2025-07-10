// const userRoutes = require("./routes/user");

// GET: Fetch data (e.g., app.get ('/route',callback))
// POST: Submit data (e.g., app.post('/route', callback))
// PUT: Update data (e.g., app.put('/route', callback))
// DELETE: Remove data (e.g., app.delete ('/route', callback))

//dynamic route with parameters
// app.get ("/user/:id", (req,res) => {
// const userId = req.params.id;
// res.send(`user ID: ${userId}`)
// })

//query parameters
// app.get("/search", (req, res) => {
//   const query = req.query.q;
//   res.send(`search query: ${query}`);
// });


//  //standard middleware function
// function (req, res,next){
//    //logic in here,
//  }

// //custom middleware
// function logger( req, res, next){
//   console.log(`${req.method} ${ req.url}`);
//   next();
// }
//app.use(logger);

// app.use((req, res,next) => {
//   console.log("first middleware");
//   next(); //pass to the next middleware
// });



// app.get ("/", (req,res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });





// async function addStudent(name, age, course) {
//   const student = new Student({ name, age, course });
//   try {
//     const result = await student.save();
//     console.log("Student Added:", result);
//   } catch (err) {
//     console.error("Error Adding Student:", err.message);
//   }
// }

// addStudent("Max k", 17, "Computer Science");

// app.get("/app/api/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const student = await Student.findById(id);

//     res.status(200).json(student);
//   } catch (err) {
//     res.status(500).json("Student not found");
//   }
// });

// async function getStudent() {
//   const students = await Student.find({ age: { $gte: 18 } })
//     .sort({ name: 1 }) // Sort by name (ascemding)
//     .limit(10) // Limit results
//     .select("name age course"); // Select specific fields
//   console.log("Students:", students);
// }
// getStudent();

// async function updateStudent(id, updates) {
//   try {
//     const student = await Student.findByIdAndUpdate(
//       id,
//       updates,
//       { new: true, runValidators: true }
//     );
//     console.log("Updated Student:", student);
//   } catch (err) {
//     console.error("Error Updating Student:", err.message);
//   }
// }

// updateStudent("student_id_here", { age: 23 });

// async function deleteStudent(id) {
//   try {
//     const result = await Student.findByIdAndDelete(id);
//     console.log("Deleted Student:", result);
//   } catch (err) {
//     console.error("Error Deleting Student:", err.message);
//   }
// }

// deleteStudent("6851635673e2ba957a69c679");

// app.use((req, res, next)=>{
//   console.log("second middleware");
//   res.send("request processed!")
// });

// app.use("/users", userRoutes)

// app.use((req,res) => {
//   res.status(404).send("404 Not Found")
// });



// res.status(200).send("OK");//SUCCESS]]
// res.status(404).send("Not found");//Resource not found
// res.status(500).send("Server Error"); // Internal server error