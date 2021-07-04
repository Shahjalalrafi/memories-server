const PostMessage = require("../Models/PostMesssage")

exports.postContoller = async(req, res) => {
    try{
        const postMessage = await PostMessage.find()
        res.status(200).json(postMessage)
    }catch(error){
        res.status(404).json({message: error.message})
    }
}

exports.createContoller = async(req, res) => {
    const body = req.body
    const newPost = new PostMessage(body)

    try {
        await newPost.save()
        res.status(200).json(newPost)
    }catch(err) {
        res.status(409).json({message: err.message})
    }
}