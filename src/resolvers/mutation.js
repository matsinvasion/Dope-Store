const Mutations = {
    async createItem(parent,args,ctx,info){
        const item = await ctx.db.mutation.createItem({
            data:{
                ...args
            }
        },info)
        return item;
    },
    updateItem(parent,args,ctx,info){
        //first take copy of the updates
        const updates= { ...args };
        //remove id from updates, since an id is never updated
        delete updates.id;
        //run update method
        return ctx.db.mutation.updateItem({
            data: updates,
            where:{
                id:args.id
            }
        }, info
        )

    }
   
};

module.exports=Mutations;