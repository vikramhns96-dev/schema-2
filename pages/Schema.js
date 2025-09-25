const mongoose = required('mongoose')


const bookSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true,
        purpose:"title of the book"
    },

    author:{
        type:String,
        require:true,
        purpose:"Name of the author"
    },

    isbn:{
        type:String,
        require:true,
        unique:true,
        purpose:"unique identifier for the book"
    },

    category:{
        type:String,
        require:true,
        enum: ['fiction', 'non-fiction', 'comics', 'biography'],
        purpose:"genre of the book"
    },

    copies:{
        type:String,
        required:true,
        purpose:"Total copies available in the library"
    },

    available:{
        type:String,
        default: function(){
            return this.copies
        },
        min:0,
        purpose:"To check availability"
    }

});


const memberSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        purpose:"Full name of the library member"
    },


    email:{
        type:String,
        required:true,
        purpose:"Email address of the member"
    },

    joinDate:{
        type:Date,
        default:Date.now,
        purpose:" Date the member joined"
    },

    booksIssued:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'book',
        purpose:"List of books currently issued to the member"
    }
});


const Book = mongoose.model('Book',bookSchema);
const Member = mongoose.model('Member',memberSchema);

model.export = {Book,Member};