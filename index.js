const express = require('express')
// const{ Todo } = require('./models/todo-model')
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/static",express.static("public"));
app.set("view engine", "ejs");
app.get('/',async(req,res)=>{
    // try{
    //      let infos = await Todo.find();
    //      if(infos.length>0){
    //          return res.render('index.ejs',{todos: infos})
    //      } else{
    //          return res.status(404).json({
    //              success:false,
    //              error:'there is no info',
    //          })
    //      }
    //  }catch(err){
    //      console.log(err);
    //  }
    res.render('index.ejs')
      
})
// app.post('/',async(req,res)=>{
//     let info= req.body;
//     try{
//         const todo = await new Todo(info).save();
//         res.redirect('/')
   
//     }catch(err){
//         console.log(err)
//     }
// })
// app.get('/edit/:id',async(req,res)=>{
//     const _id = req.params.id;
//     try{
//         let todoUpdate = await Todo.findById({_id});
//         let done = !todoUpdate.done;
//         let updatedTodo = await Todo.findByIdAndUpdate(
//             {_id},
//             {done},
//             {new: true}
//         );
//         res.render("edit.ejs",{updated: updatedTodo});
//     }catch(err){
//         console.log(err)
//     }
// })
// app.post('/update/:id',async(req,res)=>{
//     try{
//         let _id = req.params.id;
//         let title = req.body.title;
//         const update = await Todo.findByIdAndUpdate({_id},{title});
//         res.redirect('/')
//     }catch(err){
//         console.log(err);
//     }
// })

// app.get('/delete/:id',async(req,res)=>{
//     let _id=req.params.id
//     try{
//         let todo = await Todo.findById({_id});
//         if(todo){
//             const deleteTodo = await Todo.findByIdAndDelete({_id});
//             res.redirect('/')
//         }
//     }catch(err){
//         console.log(err);
//     }
// })

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log('server is started')
})