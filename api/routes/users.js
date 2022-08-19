const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
// update user
router.put("/:id", async(req, res)=>{
    if(req.body.userId == req.params.id || req.body.isAdmin){
        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            }catch(err){
                return res.status(500).json(err);
            }
            
        }
        try{
            const user = await User.findByIdAndUpdate(req.params.id,{
                $set:req.body,
            });
            res.status(200).json("Account has been updated")
        }catch(err){
            return res.status(500).json(err);

        }
    }else{
        return res.status(403).json("You can update only your account")
    }
});
// delete user
router.delete("/:id", async(req, res)=>{
    if(req.body.userId == req.params.id || req.body.isAdmin){
       
        try{
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Account has been deleted")
        }catch(err){
            return res.status(500).json(err);

        }
    }else{
        return res.status(403).json("You can delete only your account")
    }
});
// get a user
router.get("/:id", async (req, res)=>{
    try {
        const user = await User.findById(req.params.id);
        const {password, updatedAt, ...other} = user._doc;
        res.status(200).json(other)
    }catch(err){
        return res.status(500).json(err);

    }
})

// get a user by query
router.get("/", async (req, res)=>{
    const userId = req.query.userId;
    const username = req.query.username;

    try {
        const user = userId ? await User.findById(userId) : await User.findOne({username:username});
        const {password, updatedAt, ...other} = user._doc;
        res.status(200).json(other)
    }catch(err){
        return res.status(500).json(err);

    }
})
// follow a user
router.put("/:id/follow", async (req,res)=>{
    if(req.body.userId !== req.params.id){
        console.log("step 0");

        try{
            console.log("step 1");
            const user = await User.findById(req.body.userId);
            console.log("step 1.1");

            const currentUser = await User.findById(req.params.id)
            console.log("step 1.2");
            if(!user.followers.includes(req.params.id)){
                console.log("step 2");

                await user.updateOne({$push:{followers:req.params.id}})
                await currentUser.updateOne({$push:{followings:req.body.userId}})
                res.status(200).json("user has been followed");
            }else{
                res.status(403).json("you already follow this user");
            }
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(403).json("you cant follow your self")
    }
})
// unfollow a user
router.put("/:id/unfollow", async (req,res)=>{
    if(req.body.userId !== req.params.id){
        console.log("step 0");

        try{
            console.log("step 1");
            const user = await User.findById(req.body.userId);
            console.log("step 1.1");

            const currentUser = await User.findById(req.params.id)
            console.log("step 1.2");
            if(user.followers.includes(req.params.id)){
                console.log("step 2");

                await user.updateOne({$pull:{followers:req.params.id}})
                await currentUser.updateOne({$pull:{followings:req.body.userId}})
                res.status(200).json("user has been unfollowed");
            }else{
                res.status(403).json("you dont follow this user");
            }
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(403).json("you cant unfollow your self")
    }
})
module.exports = router;