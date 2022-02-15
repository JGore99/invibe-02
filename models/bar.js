import mongoose from 'mongoose'

const barSchema = new mongoose.Schema(
  {
    id: String,
    name: String,
    address: String,
    imageURL: String,
    cocktails: [{type: mongoose.Schema.Types.ObjectId, ref: 'Cocktail'}]
  },
  {
    timestamps: true,
  }
  )

const Bar = mongoose.model('Profile', barSchema)

export {
  Bar
}